import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey);


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get("customer_id");

  if (!customerId) {
    return NextResponse.json({ message: "customer_id required" }, { status: 400 });
  }

  try {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
    return NextResponse.json(paymentMethods.data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch payment methods";
    return NextResponse.json({ message }, { status: 500 });
  }
}
