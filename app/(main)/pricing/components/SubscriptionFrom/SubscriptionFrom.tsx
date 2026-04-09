/** @format */

/** @format */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cookies from "js-cookie";
import { FormEvent, useMemo, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

type Plan = "CORE" | "GROWTH" | "PLUS";
type Interval = "MONTHLY" | "SEMIANNUAL" | "ANNUAL";

interface BackendResponse {
  client_secret: string;
  subscription_id: string;
}

export default function SubscriptionForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [plan, setPlan] = useState<Plan>("CORE");
  const [interval, setInterval] = useState<Interval>("MONTHLY");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUrl = useMemo(
    () => `${process.env.NEXT_PUBLIC_BACKEND_BASE}/payment/stripe/subscription`,
    [],
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe loading...");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setMessage("Card element not found");
      return;
    }

    try {
      setLoading(true);
      setMessage("Creating payment...");

      const token = Cookies.get("token");

      const res = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan, interval }),
      });

      const data: BackendResponse = await res.json();

      if (!res.ok) {
        setMessage("Failed to create payment");
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        data.client_secret,
        {
          payment_method: {
            card,
            billing_details: {
              address: { postal_code: postalCode },
            },
          },
        },
      );

      if (error) {
        setMessage(error.message ?? "Payment failed");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        setMessage("✅ Payment successful! Subscription active.");
      }
    } catch {
      setMessage("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full mb-10'>
      <div className='min-h-screen bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-200 flex items-center justify-center px-4'>
        <div className='w-full max-w-xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Subscription Payment
          </h2>
          <p className='text-sm text-gray-600 mt-1'>
            Enter your details to activate subscription
          </p>

          {message && (
            <div className='mt-4 rounded-lg bg-blue-100 text-blue-700 px-4 py-2 text-sm'>
              {message}
            </div>
          )}

          <form onSubmit={onSubmit} className='mt-6 space-y-4'>
            {/* Plan */}
            <div className=''>
              <label className='text-sm font-semibold text-gray-700'>
                Select Plan
              </label>
              <Select value={plan} onValueChange={(v) => setPlan(v as Plan)}>
                <SelectTrigger className='mt-2 w-full bg-gray-100 px-4 py-3 border focus:bg-white'>
                  <SelectValue placeholder='Choose plan' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='CORE'>Core</SelectItem>
                  <SelectItem value='GROWTH'>Growth</SelectItem>
                  <SelectItem value='PLUS'>Plus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Interval */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Billing Interval
              </label>
              <Select
                value={interval}
                onValueChange={(v) => setInterval(v as Interval)}>
                <SelectTrigger className='mt-2 w-full bg-gray-100 px-4 py-3 border focus:bg-white'>
                  <SelectValue placeholder='Choose interval' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='MONTHLY'>Monthly</SelectItem>
                  <SelectItem value='SEMIANNUAL'>6 Months</SelectItem>
                  <SelectItem value='ANNUAL'>Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Postal Code */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Postal Code
              </label>
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder='Postal Code'
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </div>

            {/* Card */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Card Details
              </label>
              <div className='mt-2 rounded-xl bg-gray-100 px-4 py-3 border'>
                <CardElement />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading || !stripe}
              className='w-full rounded-xl bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition disabled:opacity-60'>
              {loading ? "Processing..." : "Subscribe Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// interface SubscriptionFormProps {
//   price: number;
//   plan: string | null;
// }

// const SubscriptionForm = ({ price, plan }: SubscriptionFormProps) => {
//   return (
//     <div>
//       <h2>Checkout</h2>
//       <p>Plan: {plan}</p>
//       <p>Amount: ${price}</p>

//       {/* Stripe CardElement / PaymentElement here */}
//     </div>
//   );
// };

// export default SubscriptionForm;
