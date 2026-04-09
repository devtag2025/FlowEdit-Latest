/** @format */

/** @format */

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubscriptionForm from "@/app/(main)/pricing/components/SubscriptionFrom/SubscriptionFrom";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

export default function SubscriptionCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <SubscriptionForm />
    </Elements>
  );
}

// "use client";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import SubscriptionForm from "@/app/(main)/pricing/components/SubscriptionFrom/SubscriptionFrom";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

// interface SubscriptionCheckoutProps {
//   price: number;
//   plan: string | null;
// }

// export default function SubscriptionCheckout({
//   price,
//   plan,
// }: SubscriptionCheckoutProps) {
//   return (
//     <Elements stripe={stripePromise}>
//       <SubscriptionForm price={price} plan={plan} />
//     </Elements>
//   );
// }
