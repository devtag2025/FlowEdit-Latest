import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_MAP: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_STARTER,
  pro:     process.env.STRIPE_PRICE_PRO,
  agency:  process.env.STRIPE_PRICE_AGENCY,
};

export async function POST(request: Request) {
  try {
    const { plan } = await request.json();

    if (!plan || !PRICE_MAP[plan]) {
      return NextResponse.json({ message: "Invalid plan" }, { status: 400 });
    }

    const priceId = PRICE_MAP[plan];
    if (!priceId) {
      return NextResponse.json(
        { message: `Price ID not configured for plan: ${plan}` },
        { status: 500 }
      );
    }

    const siteUrl      = process.env.NEXT_PUBLIC_SITE_URL;
    const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;

    if (!siteUrl) {
      return NextResponse.json(
        { message: "NEXT_PUBLIC_SITE_URL is not set" },
        { status: 500 }
      );
    }

    if (!dashboardUrl) {
      return NextResponse.json(
        { message: "NEXT_PUBLIC_DASHBOARD_URL is not set" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { plan },
      // ✅ removed customer_creation — not valid in subscription mode
      // Stripe automatically creates a customer for subscriptions
      success_url: `${dashboardUrl}/login?paid=true&plan=${plan}`,
      cancel_url:  `${siteUrl}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("[Checkout] error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
