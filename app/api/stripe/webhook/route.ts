import Stripe from "stripe";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";



type PlanType = "launch" | "starter" | "pro" | "agency";
type SubscriptionStatus =
  | "active"
  | "canceled"
  | "past_due"
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "unpaid";

interface ProfileUpdatePayload {
  subscription_status: SubscriptionStatus;
  subscription_plan?: PlanType;
  stripe_customer_id?: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
}

interface PendingSubscriptionPayload {
  email: string;
  stripe_customer_id: string | null;
  subscription_status: SubscriptionStatus;
  subscription_plan: PlanType;
  name: string | null;
  address: string | null;
  city: string | null;
}

interface StripeCustomerDetails {
  name: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
}

interface UpdateProfileOptions {
  customerId: string | null;
  status: SubscriptionStatus;
  plan: PlanType;
  email: string | null;
  name?: string | null;
  includeAddress?: boolean;
}

// ── Initialization ───────────────────────────────────────────────────────────

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey);


// ⚠️ Must be the JWT service_role key (starts with eyJ...) — NOT the sb_secret_ key.
const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

// ── Helpers ───────────────────────────────────────────────────────────────────

const planForPrice = (priceId: string | undefined): PlanType => {
  if (!priceId) return "launch";
  if (priceId === process.env.STRIPE_PRICE_STARTER) return "starter";
  if (priceId === process.env.STRIPE_PRICE_PRO) return "pro";
  if (priceId === process.env.STRIPE_PRICE_AGENCY) return "agency";
  return "launch";
};

const getStripeCustomerDetails = async (
  customerId: string | null
): Promise<StripeCustomerDetails> => {
  if (!customerId) return {};

  try {
    const customer = await stripe.customers.retrieve(customerId);

    // Type guard for Stripe.Customer vs Stripe.DeletedCustomer
    if (customer.deleted) {
      console.warn("[Webhook] Customer was deleted:", customerId);
      return {};
    }

    return {
      name: customer.name ?? null,
      email: customer.email ?? null,
      address: customer.address?.line1
        ? [customer.address.line1, customer.address.line2].filter(Boolean).join(", ")
        : null,
      city: [customer.address?.city, customer.address?.state]
        .filter(Boolean)
        .join(", ") || null,
    };
  } catch (e: unknown) {
    const error = e as Error;
    console.error("[Webhook] getStripeCustomerDetails error:", error.message);
    return {};
  }
};

// ── Core Update Logic ─────────────────────────────────────────────────────────

const updateProfileSubscription = async ({
  customerId,
  status,
  plan,
  email,
  name,
  includeAddress = false,
}: UpdateProfileOptions): Promise<void> => {
  console.log("[Webhook] updateProfile:", { customerId, status, plan, email });

  if (!customerId && !email) {
    console.warn("[Webhook] no customerId or email — skipping");
    return;
  }

  const payload: ProfileUpdatePayload = {
    subscription_status: status,
    ...(plan !== undefined && { subscription_plan: plan }),
    ...(customerId && { stripe_customer_id: customerId }),
  };

  if (includeAddress && customerId) {
    const details = await getStripeCustomerDetails(customerId);
    if (details.name) payload.name = details.name;
    if (details.email) payload.email = details.email;
    if (details.address) payload.address = details.address;
    if (details.city) payload.city = details.city;
  }

  let updated = false;

  // 1. Try update by stripe_customer_id
  if (customerId) {
    const { data, error } = await supabase
      .from("profiles")
      .update(payload)
      .eq("stripe_customer_id", customerId)
      .select("id");

    console.log("[Webhook] by stripe_customer_id → rows:", data?.length, error?.message);
    if (data && data.length > 0) updated = true;
  }

  // 2. Try update by email
  if (!updated && email) {
    const { data, error } = await supabase
      .from("profiles")
      .update(payload)
      .eq("email", email)
      .select("id");

    console.log("[Webhook] by email → rows:", data?.length, error?.message);
    if (data && data.length > 0) updated = true;
  }

  // 3. No profile row yet — save to pending_subscriptions staging table
  if (!updated && email) {
    const pendingPayload: PendingSubscriptionPayload = {
      email,
      stripe_customer_id: customerId ?? null,
      subscription_status: status,
      subscription_plan: plan ?? "launch",
      name: payload.name ?? name ?? null,
      address: payload.address ?? null,
      city: payload.city ?? null,
    };

    const { error: pendingError } = await supabase
      .from("pending_subscriptions")
      .upsert(pendingPayload, { onConflict: "email" });

    if (pendingError) {
      console.error(
        "[Webhook] pending_subscriptions upsert error:",
        pendingError.message
      );
    } else {
      console.log(
        "[Webhook] saved to pending_subscriptions for",
        email,
        "— will merge on first Google sign-in"
      );
    }
  }
};

// ── POST Handler ──────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  const payload = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { message: "Missing stripe-signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Webhook] signature verification failed:", error.message);
    return NextResponse.json(
      { message: "Invalid signature" },
      { status: 400 }
    );
  }

  try {
    const { type, data: { object } } = event;
    console.log("[Webhook] event:", type);

    switch (type) {
      case "checkout.session.completed": {
        const session = object as Stripe.Checkout.Session;
        const customerId = session.customer as string | null;
        const subscriptionId = session.subscription as string | null;
        const email = session.customer_details?.email ?? session.metadata?.email ?? null;
        const name = session.customer_details?.name ?? null;
        const plan = session.metadata?.plan ?? "launch";

        console.log("[Webhook] checkout.session.completed", { customerId, plan, email });

        await updateProfileSubscription({
          customerId,
          status: "active",
          plan: plan as PlanType,
          email,
          name,
          includeAddress: true,
        });

        // Sync via subscription object to confirm plan from price ID
        if (subscriptionId) {
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          const priceId = sub.items.data[0]?.price?.id;
          if (priceId) {
            const mappedPlan = planForPrice(priceId);
            const subStatus: SubscriptionStatus =
              sub.status === "active" ? "active" : sub.status as SubscriptionStatus;

            await updateProfileSubscription({
              customerId,
              status: subStatus,
              plan: mappedPlan,
              email,
              name,
              includeAddress: false,
            });
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = object as Stripe.Subscription;
        const priceId = subscription.items?.data?.[0]?.price?.id;
        const plan = planForPrice(priceId);
        const status: SubscriptionStatus =
          subscription.status === "active"
            ? "active"
            : subscription.status as SubscriptionStatus;

        await updateProfileSubscription({
          customerId: subscription.customer as string,
          status,
          plan,
          email: null,
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = object as Stripe.Subscription;
        await updateProfileSubscription({
          customerId: subscription.customer as string,
          status: "canceled",
          plan: "launch",
          email: null,
        });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = object as Stripe.Invoice;
        await updateProfileSubscription({
          customerId: invoice.customer as string,
          status: "past_due",
          plan: "launch",
          email: null,
        });
        break;
      }

      default:
        console.log("[Webhook] unhandled event:", type);
        break;
    }
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[Webhook] processing error:", error);
    return NextResponse.json(
      { message: "Processing error", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
