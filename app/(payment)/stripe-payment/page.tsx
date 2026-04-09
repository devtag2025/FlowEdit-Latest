/** @format */
"use client";

import { useForm } from "react-hook-form";
import { useCreatePaymentMutation } from "@/redux/features/payment/paymentApi";
import { useState } from "react";

type PaymentFormData = {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

export default function PaymentPage() {
  const amount = 60;
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormData>();

  // ✅ RTK Query mutation
  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const onSubmit = async (_data: PaymentFormData) => {
    setApiMessage(null);

    try {
      // ❗ card data ignore করা হচ্ছে intentionally
      const res = await createPayment({
        plan: "CORE",
        interval: "SEMIANNUAL",
      }).unwrap();

      setApiMessage(res.message || "Payment initiated successfully");

      console.log("Client Secret:", res.client_secret);
      console.log("Subscription ID:", res.subscription_id);
    } catch (err) {
      setApiMessage("Payment request failed");
      console.error(err);
    }
  };

  return (
    <div className='pb-10'>
      <div className='min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4'>
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-b from-blue-400 via-indigo-300 to-blue-100' />

        {/* Card */}
        <div className='relative w-full max-w-md bg-white/92 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
          <h2 className='text-xl font-bold text-gray-900'>Payment Details</h2>
          <p className='text-sm text-gray-600 mt-1'>
            Enter your card information to pay
          </p>

          {apiMessage && (
            <div className='mt-4 rounded-lg bg-blue-100 text-blue-700 px-4 py-2 text-sm'>
              {apiMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
            {/* Card Number */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Card Number
              </label>
              <input
                type='text'
                placeholder='1234 5423 3456 9834'
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border'
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
              />
              {errors.cardNumber && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.cardNumber.message}
                </p>
              )}
            </div>

            {/* Expiry */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>
                Expiration Date
              </label>
              <input
                type='text'
                placeholder='MM/YY'
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border'
                {...register("expiryDate", {
                  required: "Expiry date is required",
                })}
              />
            </div>

            {/* CVC */}
            <div>
              <label className='text-sm font-semibold text-gray-700'>CVC</label>
              <input
                type='text'
                placeholder='CVC'
                className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border'
                {...register("cvc", {
                  required: "CVC is required",
                })}
              />
            </div>

            {/* Pay Button */}
            <button
              type='submit'
              disabled={isSubmitting || isLoading}
              className='w-full rounded-xl bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition disabled:opacity-60 mt-2'>
              {isLoading ? "Processing..." : `Pay Now : $${amount.toFixed(2)}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/** @format */

// /** @format */
// "use client";
// import { useForm } from "react-hook-form";

// type PaymentFormData = {
//   cardNumber: string;
//   expiryDate: string;
//   cvc: string;
// };

// export default function PaymentPage() {
//   const amount = 60;

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<PaymentFormData>();

//   const onSubmit = async (data: PaymentFormData) => {
//     console.log("Payment Data:", data);

//     // ✅ later API integration here
//     // await createPaymentIntent({ amount, ...data })
//   };

//   return (
//     <div className='min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4'>
//       {/* ✅ Full Gradient Background */}
//       <div className='absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-100' />

//       {/* ✅ Soft Rings Lines Effect */}
//       <div className='absolute inset-0 opacity-20'>
//         <div className='w-[1200px] h-[1200px] border border-white/30 rounded-full absolute -top-[650px] left-1/2 -translate-x-1/2' />
//         <div className='w-[950px] h-[950px] border border-white/20 rounded-full absolute -top-[520px] left-1/2 -translate-x-1/2' />
//         <div className='w-[760px] h-[760px] border border-white/15 rounded-full absolute -top-[430px] left-1/2 -translate-x-1/2' />
//       </div>

//       {/* ✅ Bottom White Curved Wave SVG */}
//       <div className='absolute bottom-0 left-0 w-full'>
//         <svg
//           viewBox='0 0 1440 320'
//           className='w-full h-[230px]'
//           preserveAspectRatio='none'>
//           <path
//             fill='white'
//             fillOpacity='0.65'
//             d='M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z'
//           />
//         </svg>
//       </div>

//       {/* ✅ Payment Card */}
//       <div className='relative w-full max-w-md bg-white/92 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
//         <h2 className='text-xl font-bold text-gray-900'>Payment Details</h2>
//         <p className='text-sm text-gray-600 mt-1'>
//           Enter your card information to pay
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
//           {/* Card Number */}
//           <div>
//             <label className='text-sm font-semibold text-gray-700'>
//               Card Number
//             </label>

//             <input
//               type='text'
//               placeholder='1234 5423 3456 9834'
//               className='mt-2 w-full rounded-xl  bg-gray-100 px-4 py-3 border focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//               {...register("cardNumber", {
//                 required: "Card number is required",
//               })}
//             />

//             {errors.cardNumber && (
//               <p className='text-red-500 text-sm mt-1'>
//                 {errors.cardNumber.message}
//               </p>
//             )}
//           </div>

//           {/* Expiration Date */}
//           <div>
//             <label className='text-sm font-semibold text-gray-700'>
//               Expiration Date
//             </label>

//             <input
//               type='text'
//               placeholder='MM/YY'
//               className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border  outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//               {...register("expiryDate", {
//                 required: "Expiry date is required",
//                 pattern: {
//                   value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//                   message: "Format should be MM/YY",
//                 },
//               })}
//             />

//             {errors.expiryDate && (
//               <p className='text-red-500 text-sm mt-1'>
//                 {errors.expiryDate.message}
//               </p>
//             )}
//           </div>

//           {/* CVC */}
//           <div>
//             <label className='text-sm font-semibold text-gray-700'>CVC</label>

//             <input
//               type='text'
//               placeholder='CVC'
//               className='mt-2 w-full rounded-xl bg-gray-100 px-4 py-3 border  outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//               {...register("cvc", {
//                 required: "CVC is required",
//                 minLength: { value: 3, message: "CVC must be 3 digits" },
//                 maxLength: { value: 4, message: "CVC max 4 digits" },
//               })}
//             />

//             {errors.cvc && (
//               <p className='text-red-500 text-sm mt-1'>{errors.cvc.message}</p>
//             )}
//           </div>

//           {/* Pay Button */}
//           <button
//             type='submit'
//             disabled={isSubmitting}
//             className='w-full rounded-xl bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition disabled:opacity-60 mt-2'>
//             {isSubmitting ? "Processing..." : `Pay Now : $${amount.toFixed(2)}`}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
