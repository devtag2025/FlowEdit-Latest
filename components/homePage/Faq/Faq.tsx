/** @format */

"use client";

import FaqAccordion from "@/components/sections/FaqAccordion";
import PageHeaderButton from "@/components/shared/PageHeaderButton";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import GetStarted from "../GetStarted/Getstarted";

const Faq = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className='w-full relative overflow-hidden '>
      {/* Background Image */}
      <div
        className='pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[700px] z-0'
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 30.29%, #57b2fc 50.53%, #D6E1EA 88.26%, #FFFFFF 100%) ",
        }}
      />
      <Image
        src='/images/faqbg.png'
        alt='faq'
        height={400}
        width={500}
        className='absolute w-full h-full bg-[] opacity-40'></Image>
      <div
        className={`mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex flex-col items-center text-center relative z-10 h-full lg:justify-center ${
          pathname === "/portfolio" ? "" : "pt-1 "
        }`}>
        <div className='w-full flex flex-col items-center '>
          <div className='flex flex-col items-center text-center gap-8 sm:gap-10'>
            <div className='flex flex-col items-center gap-4 sm:gap-5 max-w-2xl'>
              <PageHeaderButton text='FAQs' className='mb-4' />

              <h1 className='font-semibold text-3xl sm:text-4xl md:text-[54px] -tracking-[0.04em] text-black'>
                Frequently asked questions
              </h1>

              <p className='text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)] max-w-md sm:max-w-lg md:max-w-xl'>
                Find quick answers to common questions and make the most of Maps
                Explore&apos;s key features, from traffic updates to emergency
                alerts
              </p>
            </div>

            <FaqAccordion />
          </div>

          <div
            className={`w-full overflow-hidden rounded-2xl mt-20 ${
              pathname === "/portfolio" ?
                "mt-10 lg:mt-0 pt-[57px] lg:py-10"
              : "mt-10 lg:mt-0 pt-[57px] lg:py-10"
            }`}></div>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Faq;
