/** @format */

"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import SiteButton from "@/components/shared/SiteButton";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import SplitType from "split-type";
import Image from "next/image";

const Banner = () => {
  const pathname = usePathname();

  useEffect(() => {
    const split = new SplitType(".hero-title", {
      types: "words",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(split.words, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        stagger: 0.05,
      })
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.9 }, "-=0.4")
        .from(
          ".hero-button",
          { opacity: 0, scale: 0.9, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".hero-bottom-text",
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.4",
        );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [pathname]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(".floating-laptop", {
      x: () => gsap.utils.random(-15, 15),
      y: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(-3, 3),
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className='w-full  z-10 bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] relative overflow-hidden'>
      {/* Top Banner Image */}
      <div
        className='absolute top-0 block lg:hidden left-0 right-0 bottom-0 w-full h-screen z-90  bg-contain'
        style={{
          backgroundImage: "url('/images/smallBg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // maskImage:
          //   "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
          // WebkitMaskImage:
          //   "linear-gradient(to bottom, black 0%, black 50%, black 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.1) 95%, transparent 100%)",
        }}
      />
      <div className='absolute top-0 left-0 right-0 w-full z-10 pointer-events-none'>
        <Image
          src='/banner/bannertop.svg'
          alt='banner top decoration'
          width={1920}
          height={200}
          className='w-full h-auto object-contain absolute top-0'
          priority
        />

        <Image
          src='/images/back/Wallpaper Blur.png'
          alt='banner top decoration'
          width={1920}
          height={200}
          className='w-full h-[700px] opacity-70 absolute mt-90'
          priority
        />
      </div>
      <Image
        src='/images/back/dhew.png'
        alt='sdf'
        height={500}
        width={500}
        className='h-full hidden lg:block w-full absolute top-50 '></Image>
      {/* Bottom Banner Image Holla */}

      <div className='w-full relative z-20 mt-[220px] md:mt-[180px]'>
        <div className='mx-auto w-full px-2.5 md:px-0 max-w-[1216px] flex justify-center '>
          <div className='w-full container '>
            <div className='flex flex-col items-center   justify-center mx-auto text-center gap-11 sm:gap-6 md:gap-7 lg:gap[25px] w-full'>
              <PageHeaderButton
                className='mt-10 md:mt-0'
                text='Loved by 4.5 out of 5 Creators'
                icons={[
                  <IoMdStar key='1' />,
                  <IoMdStar key='2' />,
                  <IoMdStar key='3' />,
                  <IoMdStar key='4' />,
                  <IoMdStarHalf key='5' />,
                ]}
              />

              <div className='flex flex-col gap-6 z-40 items-center'>
                <h1 className='hero-title font-semibold text-white md:max-w-5xl text-[44px] sm:text-4xl md:text-5xl lg:text-7xl leading-[120%] tracking-[-2.92px]'>
                  Post Better Videos—Faster. Skip the Editing.
                </h1>

                <p className='hero-subtitle text-white leading-[150%] max-w-[20rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl'>
                  We’ll edit anything, fast-optimized for any platform. Just
                  drop your footage, and we’ll turn it into content that gets
                  views and drives growth-with zero effort on your part.
                </p>

                <div className='w-full sm:w-fit shadow-2xl'>
                  <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
                    Start for Free
                  </SiteButton>
                </div>

                <p className='hero-bottom-text text-white max-w-60 sm:max-w-sm md:max-w-md text-xs sm:text-sm md:text-base leading-[150%] '>
                  14-Day free access to professional <br /> video editing team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='relative w-full'>
        <div className='relative z-10 w-full'>
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            {/* TEXT CONTENT */}
            <div className='flex flex-col gap-4 text-center lg:text-left w-full order-2 lg:order-1'>
              <h1 className='font-semibold text-black -tracking-[0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-[54px]'>
                Effortless Video
              </h1>

              <h4 className='font-semibold text-black -tracking-[0.04em] max-w-md mx-auto lg:mx-0 text-lg sm:text-xl md:text-[24px] lg:text-[28px]'>
                The perfect tool for your creative mind
              </h4>

              <p className='text-[#000000B2] leading-[133%] max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg mx-auto lg:mx-0 font-normal'>
                Regular video posts equals more reach. With FlowEdit, you get a
                steady stream of high-quality, platform-optimized videos that
                keep your audience engaged and your brand top-of-mind. Our team
                handles the edits, thumbnails, and even posting—so your channels
                never go quiet and you stay focused on creating.
              </p>
            </div>

            {/* IMAGE */}
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] flex justify-center order-1 lg:order-2'>
              <Image
                src='/images/home-page/laptop.png'
                alt='laptop image'
                fill
                priority
                className='object-contain lg:object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
