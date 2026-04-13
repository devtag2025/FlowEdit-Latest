import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey);

export async function GET(request: NextRequest) {
  const customerId = request.nextUrl.searchParams.get("customer_id");

  if (!customerId) {
    return NextResponse.json({ message: "customer_id required" }, { status: 400 });
  }

  try {
    const invoices = await stripe.invoices.list({
      customer: customerId,
      limit: 20,
    });
    return NextResponse.json(invoices.data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch invoices";
    return NextResponse.json({ message }, { status: 500 });
  }
}
