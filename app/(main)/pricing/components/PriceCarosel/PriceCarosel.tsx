"use client";

import { useState } from "react";
import { toast } from "sonner";
import PriceCard, { FeatureType } from "./PriceCard";
import { createCheckoutSession } from "@/lib/queries/billing";

interface PriceCaroselProps {
  planType: "monthly" | "semiannual" | "annual";
}

interface PriceDataType {
  id: number;
  title: string;
  planKey: string; // ✅ what gets sent to Stripe — "starter" | "pro" | "agency"
  prices: {
    monthly: number;
    semiannual: number;
    annual: number;
  };
  desc: string;
  packageType: string;
  monthlyPakage: string;
  glow: boolean;
  isPopular?: boolean;
  features: { text: string; type: FeatureType }[];
}

const priceData: PriceDataType[] = [
  {
    id: 1,
    title: "Starter",
    planKey: "starter",
    prices: { monthly: 499, semiannual: 399, annual: 324 },
    desc: "Perfect for individuals",
    packageType: "MONTHLY",
    monthlyPakage: "$499 Monthly",
    glow: false,
    features: [
      { text: "2 videos per month", type: "check" },
      { text: "48h Turnaround", type: "check" },
      { text: "Stock Footage included", type: "check" },
      { text: "1 Revision round", type: "check" },
      { text: "Dedicated Editor", type: "minus" },
      { text: "Priority Support", type: "minus" },
      { text: "Custom Motion Graphics", type: "minus" },
      { text: "White-labeling", type: "minus" },
      { text: "Stack Integration", type: "minus" },
    ],
  },
  {
    id: 2,
    title: "Pro",
    planKey: "pro",
    prices: { monthly: 999, semiannual: 799, annual: 649 },
    desc: "Great for growing brands",
    packageType: "MONTHLY",
    monthlyPakage: "$999 Monthly",
    glow: true,
    isPopular: true,
    features: [
      { text: "8 videos per month", type: "check" },
      { text: "24h Turnaround", type: "check" },
      { text: "Premium Stock Assets", type: "check" },
      { text: "Unlimited Revisions", type: "check" },
      { text: "Dedicated Editor", type: "check" },
      { text: "Priority Support", type: "check" },
      { text: "Custom Motion Graphics", type: "minus" },
      { text: "White-labeling", type: "minus" },
      { text: "Stack Integration", type: "minus" },
    ],
  },
  {
    id: 3,
    title: "Agency",
    planKey: "agency",
    prices: { monthly: 2499, semiannual: 1999, annual: 1624 },
    desc: "For high-volume teams",
    packageType: "MONTHLY",
    monthlyPakage: "$2499 Monthly",
    glow: false,
    features: [
      { text: "20 videos per month", type: "check" },
      { text: "Priority Support", type: "check" },
      { text: "Custom Motion Graphics", type: "check" },
      { text: "Stack Integration", type: "check" },
      { text: "White-labeling", type: "check" },
      { text: "Dedicated Editor", type: "check" },
      { text: "Unlimited Revisions", type: "check" },
      { text: "Premium Stock Assets", type: "check" },
      { text: "24h Turnaround", type: "check" },
    ],
  },
];

const PriceCarosel = ({ planType }: PriceCaroselProps) => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleSubscribe = async (planKey: string) => {
    setLoadingPlan(planKey);
    try {
      const { url } = await createCheckoutSession(planKey);
      if (url) window.location.href = url;
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error(err?.message || "Failed to start checkout. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  const discountedPriceData = priceData.map((card) => ({
    ...card,
    price: card.prices[planType],
    discount: planType !== "monthly",
    packageType: planType,
    onSubscribe: () => handleSubscribe(card.planKey), // ✅ sends "starter" | "pro" | "agency"
    isLoading: loadingPlan === card.planKey,
  }));

  return (
    <div className='relative py-0 container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
        {discountedPriceData.map((card) => (
          <PriceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PriceCarosel;
