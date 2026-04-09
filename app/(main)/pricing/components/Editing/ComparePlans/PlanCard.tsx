// /** @format */

// import React from "react";

// type PlanCardProps = {
//   title: string;
//   price: string;
//   checks: (boolean | string)[];
//   highlight?: boolean;
// };

// export default function PlanCard({
//   title,
//   price,
//   checks,
//   highlight = false,
// }: PlanCardProps) {
//   return (
//     <div
//       className={`rounded-2xl text-center overflow-hidden 
//       ${
//         highlight ?
//           "bg-gradient-to-b from-blue-400/30 via-white/40 to-purple-400/30 border-2 border-blue-500 shadow-xl "
//         : "bg-white/40"
//       }`}>
//       {/* Header */}
//       <div className='py-10 space-y-3 border-b border-white/40 '>
//         <h3 className='font-medium'>{title}</h3>
//         <p className='text-3xl font-semibold'>{price}</p>
//         <p className='text-sm text-gray-500'>Per video</p>
//       </div>

//       {/* Rows */}
//       {checks.map((item, i) => (
//         <div key={i} className='py-4 border-b border-white/40 last:border-b-0 '>
//           {typeof item === "string" ?
//             <span className='font-medium'>{item}</span>
//           : item ?
//             <span className='text-blue-600 font-bold'>✓</span>
//           : <span className='text-gray-400'>—</span>}
//         </div>
//       ))}
//     </div>
//   );
// }
