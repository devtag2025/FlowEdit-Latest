/** @format */
// "use client";

// import PageHeaderButton from "@/components/shared/PageHeaderButton";
// import ToggleSwitch, { PlanType } from "@/components/shared/ToggleSwitch";
// import PriceCarosel from "./PriceCarosel/PriceCarosel";
// import Image from "next/image";

// const PriceBanner = ({
//   value,
//   onToggleChange,
// }: {
//   value: PlanType;
//   onToggleChange: (value: PlanType) => void;
// }) => {
//   const discountApplied = value === "annual" || value === "semiannual";

//   const getDiscountMultiplier = (plan: PlanType) => {
//     switch (plan) {
//       case "monthly":
//         return 1;
//       case "semiannual":
//         return 0.8; // 20% off
//       case "annual":
//         return 0.65; // 35% off
//       default:
//         return 1;
//     }
//   };

//   return (
//     <div
//       className='relative overflow-hidden inset-0
//       bg-gradient-to-b from-[#6386f1] to-[#feffff] z-0'>
//       {/* Mobile BG */}
//       <div
//         className='absolute top-0 block lg:hidden h-screen left-0 right-0 bottom-0 z-20'
//         style={{
//           backgroundImage: "url('/images/smallBg.png')",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       {/* Desktop BG */}
//       <div
//         className='absolute top-0 hidden lg:block left-0 right-0 bottom-0 w-full z-0'
//         style={{
//           backgroundImage: "url('/images/back/border.svg')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       <div
//         className='absolute top-0 hidden lg:block left-0 right-0 bottom-0 w-full mt-90 z-0'
//         style={{
//           backgroundImage: "url('/images/back/dhew.png')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       />
//       <div className='absolute inset-0 pointer-events-none -top-10 z-10 opacity-20 hidden lg:block'>
//         <Image
//           src='/images/back/Wallpaper Blur.png'
//           alt='card glow bg'
//           fill
//           className='object-cover'
//         />
//       </div>

//       {/* CONTENT */}
//       <div className='container mx-auto flex flex-col gap-5 items-center mt-[100px] lg:mt-[185px] relative z-20'>
//         <PageHeaderButton text='Pricing' />

//         <h1 className='font-semibold text-[44px] lg:text-[73px] -tracking-[0.04em] text-white text-center'>
//           Stop Editing. <br className='block lg:hidden' /> Start growing
//         </h1>

//         <p className='text-base lg:text-xl leading-[150%] text-white max-w-2xl text-center'>
//           As we grow our library of UI components, we’re introducing a
//           limited-time pricing that’s not only 50% off but also significantly
//           cheaper than what’s on the market
//         </p>

//         <div className='pb-[77px]'>
//           <ToggleSwitch value={value} onChange={onToggleChange} />
//         </div>
//       </div>

//       <PriceCarosel discountMultiplier={getDiscountMultiplier(value)} />
//     </div>
//   );
// };

// export default PriceBanner; 

// /** @format */
// "use client";

// import React, { useState } from "react";

// type BillingCycle = "monthly" | "semiannual" | "annual";

// type Plan = {
//   id: string;
//   name: string;
//   price: number;
//   features: string[];
//   popular?: boolean;
// };

// const PLANS: Record<BillingCycle, Plan[]> = {
//   monthly: [
//     {
//       id: "m1",
//       name: "Starter",
//       price: 19,
//       features: ["1 Project", "Basic Support", "Email Access"],
//     },
//     {
//       id: "m2",
//       name: "Pro",
//       price: 39,
//       popular: true,
//       features: ["5 Projects", "Priority Support", "Analytics"],
//     },
//     {
//       id: "m3",
//       name: "Enterprise",
//       price: 79,
//       features: ["Unlimited Projects", "Dedicated Support", "Reports"],
//     },
//   ],
//   semiannual: [
//     {
//       id: "s1",
//       name: "Starter",
//       price: 99,
//       features: ["1 Project", "Basic Support", "Email Access"],
//     },
//     {
//       id: "s2",
//       name: "Pro",
//       price: 199,
//       popular: true,
//       features: ["5 Projects", "Priority Support", "Analytics"],
//     },
//     {
//       id: "s3",
//       name: "Enterprise",
//       price: 399,
//       features: ["Unlimited Projects", "Dedicated Support", "Reports"],
//     },
//   ],
//   annual: [
//     {
//       id: "a1",
//       name: "Starter",
//       price: 179,
//       features: ["1 Project", "Basic Support", "Email Access"],
//     },
//     {
//       id: "a2",
//       name: "Pro",
//       price: 349,
//       popular: true,
//       features: ["5 Projects", "Priority Support", "Analytics"],
//     },
//     {
//       id: "a3",
//       name: "Enterprise",
//       price: 699,
//       features: ["Unlimited Projects", "Dedicated Support", "Reports"],
//     },
//   ],
// };

// const cycles: BillingCycle[] = ["monthly", "semiannual", "annual"];

// export default function PriceBanner() {
//   const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

//   return (
//     <section className='relative overflow-hidden py-20 mt-90'>
//       {/* 🔹 BACKGROUND / GRADIENT (click block করবে না) */}
//       <div
//         className='absolute inset-0 pointer-events-none'
//         style={{
//           background:
//             "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 37%, #57B2FC 67%, #FFFFFF 100%)",
//         }}
//       />

//       {/* 🔹 CONTENT */}
//       <div className='relative z-10 max-w-7xl mx-auto px-4'>
//         {/* 🔘 TOGGLE BUTTONS */}
//         <div className='flex justify-center mb-12'>
//           <div className='flex bg-white/70 backdrop-blur p-1 rounded-full shadow'>
//             {cycles.map((cycle) => {
//               const active = billingCycle === cycle;

//               return (
//                 <button
//                   key={cycle}
//                   aria-pressed={active}
//                   onClick={() => setBillingCycle(cycle)}
//                   className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
//                     ${
//                       active ?
//                         "bg-blue-600 text-white shadow"
//                       : "text-gray-700 hover:text-gray-900"
//                     }`}>
//                   {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* 📦 PRICING CARDS */}
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
//           {PLANS[billingCycle].map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative z-10 p-6 rounded-xl border flex flex-col transition-all duration-300
//                 ${
//                   plan.popular ?
//                     "border-blue-600 scale-105 shadow-xl bg-white"
//                   : "border-gray-300 bg-white"
//                 }`}>
//               {plan.popular && (
//                 <span className='mb-2 text-sm text-blue-600 font-semibold'>
//                   Most Popular
//                 </span>
//               )}

//               <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>

//               <p className='text-3xl font-extrabold mb-4'>
//                 ${plan.price}
//                 <span className='text-sm text-gray-500'> / {billingCycle}</span>
//               </p>

//               <ul className='space-y-2 mb-6 flex-grow'>
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className='flex items-center gap-2'>
//                     <span className='text-green-500'>✔</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <button className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
//                 Select Plan
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
