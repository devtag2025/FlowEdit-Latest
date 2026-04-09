"use client";

import PriceCard, { FeatureType } from "./PriceCard";

interface PriceCaroselProps {
  planType: "monthly" | "semiannual" | "annual";
}

interface PriceDataType {
  id: number;
  title: string;
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
    title: "CORE",
    prices: { monthly: 409, semiannual: 627, annual: 865 },
    desc: "$65 Per video",
    packageType: "MONTHLY",
    monthlyPakage: "$629 Monthly",
    glow: false,
    features: [
      { text: "Parturient sed nunc neque", type: "minus" },
      { text: "Vel enim ultrices et ornare", type: "minus" },
      { text: "Aenean cursus nec amet", type: "minus" },
      { text: "Adipiscing accumsan ut", type: "minus" },
      { text: "Parturient imperdiet id urna", type: "minus" },
      { text: "Mollis porta bibendum", type: "minus" },
      { text: "Vel nec dapibus sem feugiat", type: "check" },
      { text: "Elementum pretium sed", type: "check" },
      { text: "Ridiculus urna habitasse", type: "check" },
    ],
  },
  {
    id: 2,
    title: "GROWTH",
    prices: { monthly: 582, semiannual: 765, annual: 978 },
    desc: "Per video",
    packageType: "MONTHLY",
    monthlyPakage: "$629 Monthly",
    glow: true,
    isPopular: true,
    features: [
      { text: "Ipsum eu mauris in ut massa", type: "check" },
      { text: "At id vel sit aliquet venenatis", type: "check" },
      { text: "Non at sit faucibus sed", type: "check" },
      { text: "Aliquet amet donec pulvinar", type: "check" },
      { text: "Justo et in interdum a nulla", type: "check" },
      { text: "Sit molestie libero in dui", type: "check" },
      { text: "Ultricies gravida tempus orci", type: "check" },
      { text: "Eu eget cras nunc facilisis", type: "check" },
      { text: "Gravida auctor sed donec", type: "check" },
    ],
  },
  {
    id: 3,
    title: "PLUS",
    prices: { monthly: 820, semiannual: 956, annual: 980 },
    desc: "Per video",
    packageType: "MONTHLY",
    monthlyPakage: "$629 Monthly",
    glow: false,
    features: [
      { text: "Morbi diam eros scelerisque", type: "check" },
      { text: "Urna facilisis mattis mi nulla", type: "check" },
      { text: "Volutpat odio nunc non vel", type: "check" },
      { text: "Lorem at in aliquam tellus", type: "check" },
      { text: "Molestie a vel in sed enim", type: "check" },
      { text: "Interdum lectus lorem ipsum", type: "check" },
      { text: "Nunc quis aliquet ornare", type: "check" },
      { text: "Ut bibendum mauris nisl", type: "check" },
      { text: "Dapibus at eget diam vitae", type: "check" },
    ],
  },
];

const PriceCarosel = ({ planType }: PriceCaroselProps) => {
  const discountedPriceData = priceData.map((card) => ({
    ...card,
    price: card.prices[planType],
    discount: planType !== "monthly",
    packageType: planType,
  }));

  return (
    <div className="relative py-0 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {discountedPriceData.map((card) => (
          <PriceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PriceCarosel;




// "use client";

// import PriceCard, { FeatureType } from "./PriceCard";
// import Image from "next/image";

// interface PriceCaroselProps {
//   planType: "monthly" | "semiannual" | "annual";
// }

// interface PriceDataType {
//   id: number;
//   title: string;
//   prices: {
//     monthly: number;
//     semiannual: number;
//     annual: number;
//   };
//   desc: string;
//   packageType: string;
//   monthlyPakage: string;
//   glow: boolean;
//   isPopular?: boolean;
//   features: { text: string; type: FeatureType }[];
// }

// const priceData: PriceDataType[] = [
//   {
//     id: 1,
//     title: "CORE",
//     prices: { monthly: 409, semiannual: 627, annual: 865 },
//     desc: "$65 Per video",
//     packageType: "MONTHLY",
//     monthlyPakage: "$629 Monthly",
//     glow: false,
//     features: [
//       { text: "Parturient sed nunc neque", type: "minus" },
//       { text: "Vel enim ultrices et ornare", type: "minus" },
//       { text: "Aenean cursus nec amet", type: "minus" },
//       { text: "Adipiscing accumsan ut", type: "minus" },
//       { text: "Parturient imperdiet id urna", type: "minus" },
//       { text: "Mollis porta bibendum", type: "minus" },
//       { text: "Vel nec dapibus sem feugiat", type: "check" },
//       { text: "Elementum pretium sed", type: "check" },
//       { text: "Ridiculus urna habitasse", type: "check" },
//     ],
//   },
//   {
//     id: 2,
//     title: "GROWTH",
//     prices: { monthly: 582, semiannual: 765, annual: 978 },
//     desc: "Per video",
//     packageType: "MONTHLY",
//     monthlyPakage: "$629 Monthly",
//     glow: true,
//     isPopular: true,
//     features: [
//       { text: "Ipsum eu mauris in ut massa", type: "check" },
//       { text: "At id vel sit aliquet venenatis", type: "check" },
//       { text: "Non at sit faucibus sed", type: "check" },
//       { text: "Aliquet amet donec pulvinar", type: "check" },
//       { text: "Justo et in interdum a nulla", type: "check" },
//       { text: "Sit molestie libero in dui", type: "check" },
//       { text: "Ultricies gravida tempus orci", type: "check" },
//       { text: "Eu eget cras nunc facilisis", type: "check" },
//       { text: "Gravida auctor sed donec", type: "check" },
//     ],
//   },
//   {
//     id: 3,
//     title: "PLUS",
//     prices: { monthly: 820, semiannual: 956, annual:980 },
//     desc: "Per video",
//     packageType: "MONTHLY",
//     monthlyPakage: "$629 Monthly",
//     glow: false,
//     features: [
//       { text: "Morbi diam eros scelerisque", type: "check" },
//       { text: "Urna facilisis mattis mi nulla", type: "check" },
//       { text: "Volutpat odio nunc non vel", type: "check" },
//       { text: "Lorem at in aliquam tellus", type: "check" },
//       { text: "Molestie a vel in sed enim", type: "check" },
//       { text: "Interdum lectus lorem ipsum", type: "check" },
//       { text: "Nunc quis aliquet ornare", type: "check" },
//       { text: "Ut bibendum mauris nisl", type: "check" },
//       { text: "Dapibus at eget diam vitae", type: "check" },
//     ],
//   },
// ];

// const PriceCarosel = ({ planType }: PriceCaroselProps) => {
// const discountedPriceData = priceData.map((card) => ({
//   ...card,
//   price: card.prices[planType],
//   discount: card.title === "GROWTH" || card.title === "PLUS",

// }));


//   return (
//     <div className='relative py-0 container'>
//       <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 mb-20'>
//         {discountedPriceData.map((card) => (
//           <PriceCard key={card.id} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PriceCarosel;



