"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";
import { toast } from "sonner";
import DiamondIcon from "@/components/shared/DiamondCheckIcon";
import { useCreateTrileMutation } from "@/redux/features/payment/paymentApi";
import { useAppSelector } from "@/redux/hooks";

export type FeatureType = "check" | "minus";

interface Feature {
  text: string;
  type: FeatureType;
}

interface PriceCardProps {
  id: number;
  title: string;
  price: number;
  features: Feature[];
  glow?: boolean;
  desc?: string;
  packageType: string;
  isPopular?: boolean;
  discount?: boolean;
}

export default function PriceCard({
  title,
  desc,
  price,
  packageType,
  features,
  glow = false,
  isPopular = false,
  discount = false,
}: PriceCardProps) {
  const token = useAppSelector((state) => state.auth.token);
  const [createTrial, { isLoading }] = useCreateTrileMutation();
  const router = useRouter();

  const handleSubscribe = async () => {
    try {
      const response = await createTrial({
        plan: title,
        interval: packageType.toUpperCase(),
      }).unwrap();
 console.log(response.message)
      toast.success( response.message);
      setTimeout(() => router.push("https://flow-edit-one.vercel.app/dashboard"), 2000);

    } catch (error: any) {
      const status = error?.status;

      const message =
        typeof error?.data?.message === "string"
          ? error.data.message
          : error?.data?.message?.message ||
          "Something went wrong.";

      if (status === 400 || status === 409) {
        toast.warning(message || "You already have an active subscription.");
        return; 
      }

      toast.error(message);
    }
  };

  const redirectUrl = !token ? "/signup" : "/subscribe";

  return (
    <div
      className={`relative overflow-hidden px-10 py-8 border rounded-lg bg-white/40 flex flex-col gap-6 ${glow ? "shadow-xl" : ""
        }`}
    >
      
      <Image
        src="/images/price-page/card-glow.png"
        alt="card glow"
        width={350}
        height={300}
        className="absolute -top-5 -right-7 opacity-30 z-0"
      />

      <div className="relative z-10 text-center">
        {isPopular && (
          <div className="absolute rotate-45 translate-x-12 -right-20 bg-blue-500 text-white text-xs font-semibold w-[280px] py-1 shadow-lg z-20">
            MOST POPULAR
          </div>
        )}
        {/*  15% Only for Semiannual & Annual */}
        <div className="mt-2">
          {(title === "GROWTH" || title === "PLUS") && discount && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2  text-red-500 text-lg px-4 py-1 rounded-full font-bold">
              SAVE 15%
            </div>
          )}

        </div>
        <h2 className="text-sm text-gray-600">{title}</h2>

        <div className="flex justify-center items-center gap-1">
          <BsCurrencyDollar />
          <p className="text-5xl font-bold">{price}</p>

          
        
        </div>

        <p className="text-sm text-gray-500">{desc}</p>

        <ul className="space-y-5 mt-5">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3">
              <DiamondIcon type={f.type} />
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        {token ? (
          <button
            onClick={handleSubscribe}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white mt-9 py-2 rounded-xl disabled:opacity-60"
          >
            {isLoading ? "Please wait..." : "Start 14 Days Trial"}
          </button>
        ) : (
          <Link
            href={redirectUrl}
            className="w-full bg-blue-600 text-white mt-9 py-2 rounded block"
          >
            Start 14 Days Trial
          </Link>
        )}
      </div>
    </div>
  );
}




// "use client";

// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { toast } from "sonner";
// import DiamondIcon from "@/components/shared/DiamondCheckIcon";
// import { useCreateTrileMutation } from "@/redux/features/payment/paymentApi";
// import { useAppSelector } from "@/redux/hooks";

// export type FeatureType = "check" | "minus";

// interface Feature {
//   text: string;
//   type: FeatureType;
// }

// interface PriceCardProps {
//   id: number;
//   title: string;
//   price: number;
//   features: Feature[];
//   glow?: boolean;
//   desc?: string;
//   packageType?: string;
//   monthlyPakage?: string;
//   isPopular?: boolean;
//   discount?: boolean;
// }

// export default function PriceCard({
//   title,
//   desc,
//   price,
//   packageType,
//   features,
//   glow = false,
//   isPopular = false,
//   discount = false,
// }: PriceCardProps) {
//   const token = useAppSelector((state) => state.auth.token);
//   const [createTrial, { isLoading }] = useCreateTrileMutation();
//   const router = useRouter();

//   const handleSubscribe = async () => {
//     try {
//       const response = await createTrial({ plan: title, interval: packageType }).unwrap();
//       if (response.success) {
//         toast.success("Trial started successfully");
//         setTimeout(() => router.push("/"), 500);
//         return;
//       }
//       toast.warning("You need to subscribe to continue");
//       setTimeout(() => router.push("/subscribe"), 800);
//     } catch (error: any) {
//       toast.error(error?.data?.message || "Something went wrong. Please subscribe.");
//       setTimeout(() => router.push("/"), 800);
//     }
//   };

//   const redirectUrl = !token ? "/signup" : "/subscribe";

//   return (
//     <div className={`relative overflow-hidden px-10 py-8 border rounded-lg bg-white/40 flex flex-col gap-6 ${glow ? "shadow-xl" : ""}`}>
//       <Image src="/images/price-page/card-glow.png" alt="card glow" width={350} height={300} className="absolute -top-5 -right-7 transform opacity-30 z-0" />
//       <div className="relative z-10 text-center">
//         {isPopular && (
//           <div className="absolute rotate-45 translate-x-12 -right-20 origin-center bg-blue-500 text-white text-xs font-semibold w-[280px] py-1 shadow-lg z-20">
//             MOST POPULAR
//           </div>
//         )}

//         <h2 className="text-sm text-gray-600">{title}</h2>
//    <div className="flex justify-center items-center gap-1">
//   <BsCurrencyDollar />
//   <p className="text-5xl font-bold">{price}</p>
  
//     {(title === "GROWTH" || title === "PLUS") && discount && packageType === "MONTHLY" && (
//     <div className=" px-2 py-1 rounded text-sm inline-block ml-2 font-bold">
//       15% 
//     </div>
//   )}
// </div>

//         <p className="text-sm text-gray-500">{desc}</p>
//         {/* <p className="text-xs">{monthlyPakage}</p> */}

//         <ul className="space-y-5 mt-5">
//           {features.map((f, i) => (
//             <li key={i} className="flex gap-3">
//               <DiamondIcon type={f.type} />
//               <span>{f.text}</span>
//             </li>
//           ))}
//         </ul>

//         {token ? (
//           <button
//             onClick={handleSubscribe}
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white text-center mt-9 py-2 rounded-xl disabled:opacity-60"
//           >
//             {isLoading ? "Please wait..." : "Start 14 Days Trial"}
//           </button>
//         ) : (
//           <Link href={redirectUrl} className="w-full bg-blue-600 text-white text-center mt-9 py-2 rounded block">
//             Start 14 Days Trial
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }


