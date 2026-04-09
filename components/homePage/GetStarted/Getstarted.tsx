/** @format */

import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className='container'>
      <div className=' relative w-full max-w-[1056px] mx-auto rounded-2xl overflow-hidden backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] -auto py-10 sm:py-14 shadow-md mb-9'>
        <Image
          src='/images/home-page/glow.png'
          alt='glow'
          fill
          className='object-fill'
        />

        <div className=' absolute inset-0 bg-white/10 pointer-events-none ' />

        <div className='relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 px-6 sm:px-10 md:px-12 text-center md:text-left'>
          <h1 className='font-semibold text-black -tracking-[0.04em] text-[36px] sm:text-4xl md:text-[52px] max-w-[20rem] sm:max-w-none'>
            Ready to get started?
          </h1>

          <div className='w-fit'>
            <SiteButton className='bg-[#B6C7F5]/30 hover:bg-[#B6C7F5]/30'>
              Start for Free
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
