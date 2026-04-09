/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  { name: "Launch", price: "$0", subtitle: "Per video" },
  { name: "Core", price: "$79", subtitle: "Per video" },
  { name: "Creator", price: "$112", subtitle: "Per video", highlight: true },
  { name: "Studio", price: "$158", subtitle: "Per video" },
];

const rows = [
  {
    label: "Per video",
    type: "price",
  },
  {
    label: "Unlimited Videos",
    values: [false, true, true, true],
  },
  {
    label: "Professional Editing",
    values: [true, true, true, true],
  },
  {
    label: "Branding Included",
    values: [true, true, true, true],
  },
  {
    label: "Custom Thumbnails",
    values: [false, true, true, true],
  },
  {
    label: "SEO Optimization",
    values: ["21 days", "21 days", "21 days", "21 days"],
    last: true,
  },
];

export default function ComparePlans() {
  return (
    <section className='relative overflow-hidden py-10'>
      {/* 🔹 Background Gradient */}
      <div
        className='pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[800px] z-0'
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 30.29%, #57b2fc 66.53%, #D6E1EA 88.26%, #FFFFFF 100%)",
        }}
      />

      {/* Optional Blur Image */}
      {/* <Image
        src='/images/compareblur.png'
        alt='compare blur'
        height={400}
        width={1200}
        className='absolute w-full h-[100px] object-cover opacity-80 pointer-events-none z-0'
      /> */}

      <div className='relative z-20'>
        {/* Title */}
        <h2 className='text-center text-4xl font-semibold mb-16'>
          Compare Plans
        </h2>

        {/* Table Wrapper */}
        <div className='relative container mx-auto rounded-3xl bg-[#89cceb]/25 backdrop-blur overflow-hidden p-4 lg:p-16'>
          {/* ✅ TABLE GRID */}
          <div className='w-full overflow-x-auto'>
            <div className='min-w-[950px]'>
              {/* ✅ Header Row */}
              <div className='grid grid-cols-5 gap-[15px] border-b border-white/30'>
                <div />

                {plans.map((p) => (
                  <div
                    key={p.name}
                    className={`py-6 text-center font-medium rounded-t-2xl bg-white/30`}>
                    {p.name}
                  </div>
                ))}
              </div>

              {/* ✅ Body Rows */}
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-5 gap-[15px] text-center
                  ${row.last ? "" : "border-b border-white/30"}`}>
                  {/* Left Label Cell */}
                  <div className='py-6 px-4 flex items-center bg-white/20 rounded-'>
                    <p
                      className={`${
                        rowIndex === 0 ?
                          "text-black/60 font-normal"
                        : "text-black font-semibold"
                      }`}>
                      {row.label}
                    </p>
                  </div>

                  {/* Right Plan Cells */}
                  {plans.map((plan, colIndex) => {
                    const highlight = plan.highlight;

                    // ✅ PRICE ROW
                    if (row.type === "price") {
                      return (
                        <div
                          key={plan.name}
                          className={`py-6 px-3 flex items-center justify-center bg-white/10  relative overflow-hidden`}>
                          {/* Highlight blur for Creator */}
                          {highlight && (
                            <div className='absolute inset-0 bg-gradient-to-b from-purple-400/30 via-white/10 to-pink-400/30 blur-2xl' />
                          )}

                          <div className='relative text-center'>
                            <p className='text-base md:text-lg lg:text-3xl font-normal lg:font-semibold'>
                              {plan.price}
                            </p>
                            <span className='text-sm text-gray-500'>
                              {plan.subtitle}
                            </span>
                          </div>
                        </div>
                      );
                    }

                    // ✅ NORMAL ROW VALUES
                    const value = row.values?.[colIndex];

                    return (
                      <div
                        key={plan.name}
                        className={`py-6 px-3 flex items-center justify-center bg-white/10  relative overflow-hidden`}>
                        {/* Highlight blur for Creator */}
                        {highlight && (
                          <div className='absolute inset-0 bg-gradient-to-b from-purple-400/30 via-white/10 to-pink-400/30 blur-2xl' />
                        )}

                        <div className='relative'>
                          {typeof value === "boolean" ?
                            value ?
                              <Check className='text-blue-600' size={22} />
                            : <span className='text-gray-400 text-xl'>—</span>
                          : <span className='font-medium'>{value}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <p className='text-base font-medium pt-[44px] text-black/80'>
            *Launch includes 1 video per month, footage limited to 5 minutes or
            less. Watermark applied. Plans billed monthly, annually, or
            annually. Unlimited = No cap policy applies
          </p>
        </div>
      </div>
    </section>
  );
}
