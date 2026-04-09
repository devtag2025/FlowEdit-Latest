/** @format */

"use client";

import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";
import { useEffect, useState } from "react";

const PortfolioShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 1024);
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  return (
    <div className='relative overflow-hidden lg:h-[1452px] w-full lg:mt-[-700px] lg:-mb-24'>
      {/* Background Image */}
      <Image
        src='/homepage/duisbg.svg'
        alt='showcase background'
        fill
        priority
        fetchPriority='high'
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 pointer-events-none'
        sizes='100vw'
        style={{
          objectFit: isMobile ? "cover" : "contain",
          objectPosition: "top left",
        }}
      />

      <div className='w-full h-full relative z-50 flex lg:items-end pt-10 pb-10 lg:pt-0 lg:pb-0 lg:bottom-24'>
        <div className='w-full'>
          <div className='mx-auto w-full container pb-10 lg:pb-20'>
            <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 max-w-full'>
              <div className='w-full lg:w-1/2 rounded-2xl'>
                <div className='relative w-full aspect-4/3 lg:h-full'>
                  <Image
                    src='/images/home-page/workflow-2.png'
                    alt='showcase image big'
                    fill
                    className='object-cover rounded-2xl'
                    priority
                  />
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] border border-[rgba(255,255,255,0.33)] rounded-2xl'>
                    <Image
                      src='/images/home-page/workflow-2.png'
                      alt='showcase image big'
                      fill
                      className='object-cover rounded-2xl'
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className='w-full lg:w-1/2 flex flex-col gap-6 relative'>
                <h1 className='font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl'>
                  Duis convallis elit blandit turpis
                </h1>
                <p className='font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] md:max-w-2xl lg:max-w-lg'>
                  Tellus fermentum laoreet dignissim risus scelerisque pretium
                  ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
                  Varius dui sed vestibulum quis tellus egestas dolor eget
                  magna. Dui imperdiet interdum parturient vitae. Nunc gravida
                  lobortis ut ut in nisl facilisis amet. Aenean feugiat ultrices
                  mauris gravida iaculis. Amet sem.
                </p>

                <div className='w-full lg:w-fit'>
                  <SiteButton className='w-full bg-[#B6C7F5]/30 hover:bg-[#B6C7F5]/30'>
                    Start for Free
                  </SiteButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
