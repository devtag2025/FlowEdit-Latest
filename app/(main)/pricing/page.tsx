"use client";

import { useState } from "react";
import ComparePlans from "./components/Editing/ComparePlans/ComparePlans";
import { PlanType } from "@/components/shared/ToggleSwitch";
import PriceBanner from "./components/PriceCarosel/PriceBanner";

const PricingPage = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");

  return (
    <div className='w-full relative lg:pb-24 overflow-hidden'>
      <div className='relative z-10 flex flex-col space-y-12 lg:space-y-0'>
        <PriceBanner value={planType} onToggleChange={setPlanType} />
        <ComparePlans />
      </div>
    </div>
  );
};

export default PricingPage;

// /** @format */

// "use client";

// import PriceBanner from "./components/PriceBanner";
// import PriceCarosel from "./components/PriceCarosel/PriceCarosel";
// import Footer from "@/components/shared/Footer/Footer";
// import Navbar from "@/components/shared/Navbar/Navbar";
// import { useState, useEffect } from "react";
// import ComparePlans from "./components/Editing/ComparePlans/ComparePlans";
// import { PlanType } from "@/components/shared/ToggleSwitch";

// const PricingPage = () => {
//   const [discountApplied, setDiscountApplied] = useState(true);
//   const [planType, setPlanType] = useState<PlanType>("yearly");
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // useEffect(() => {
//   //   const img = new window.Image();
//   //   img.src = "/homepage/pricingbg.svg";
//   //   img.onload = () => setImageLoaded(true);
//   // }, []);

//   // useEffect(() => {
//   //   const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//   //   checkMobile();
//   //   window.addEventListener("resize", checkMobile);
//   //   return () => window.removeEventListener("resize", checkMobile);
//   // }, []);

//   return (
//     <div className='w-full relative min-h-screen lg:pb-24 overflow-hidden'>
//       {/* <Navbar /> */}
//       {/* Gradient Background - Shows before image loads */}
//       {/* <div
//         className={`absolute inset-0 bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] -z-20 transition-opacity duration-300 ${
//           imageLoaded ? "opacity-0" : "opacity-100"
//         }`}></div> */}

//       {/* <div
//         className='absolute top-0 block lg:hidden left-0 right-0 bottom-0 w-full h-screen z-30  bg-contain'
//         style={{
//           backgroundImage: "url('/images/smallBg.png')",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           maskImage:
//             "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
//         }}
//       /> */}

//       <div className='relative z-10 flex flex-col space-y-12 lg:space-y-0'>
//         <PriceBanner onToggleChange={setDiscountApplied} />
//         <ComparePlans />
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// };

// export default PricingPage;
