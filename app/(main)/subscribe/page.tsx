/** @format */

/** @format */

import SubscriptionCheckout from "@/components/homePage/subscribe/Subscription-cehckout";
import { Fullscreen } from "lucide-react";

export default function SubscribePage() {
  return (
    <div>
      {/* <h1>Subscription Payment Portal</h1> */}
      <SubscriptionCheckout />
    </div>
  );
}
// "use client";

// import { useSearchParams } from "next/navigation";
// import SubscriptionCheckout from "@/components/homePage/subscribe/Subscription-cehckout";

// export default function SubscribePage() {
//   const searchParams = useSearchParams();

//   const price = Number(searchParams.get("price"));
//   const plan = searchParams.get("plan");

//   // Optional safety check
//   if (!price || !plan) {
//     return <p className='p-10'>Invalid subscription selection</p>;
//   }

//   return (
//     <div>
//       <SubscriptionCheckout price={price} plan={plan} />
//     </div>
//   );
// }
