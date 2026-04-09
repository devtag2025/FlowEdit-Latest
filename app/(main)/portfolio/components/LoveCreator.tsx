/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

"use client";

import PageHeaderButton from "@/components/shared/PageHeaderButton";
import { BiSolidQuoteLeft } from "react-icons/bi";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  text: string;
  name: string;
  info: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "“The best in town”",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque",
    name: "Emerson Saris",
    info: "58, California, USA",
  },
  {
    quote: "“Finance is now easy!”",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque",
    name: "Emerson Saris",
    info: "58, California, USA",
  },
  {
    quote: "“They made it easy”",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque",
    name: "Emerson Saris",
    info: "58, California, USA",
  },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className='w-full rounded-[20px] px-6 py-8 border border-[rgba(255,255,255,0.14)] backdrop-blur-[25px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.5))] flex flex-col gap-5 items-center lg:items-start text-center lg:text-left'>
    <BiSolidQuoteLeft className='text-6xl opacity-10' />

    <h1 className='font-semibold text-xl sm:text-2xl leading-[150%] text-black'>
      {item.quote}
    </h1>

    <p className='text-base sm:text-lg leading-[150%] text-black/70'>
      {item.text}
    </p>

    <div className='flex flex-col gap-1 mt-auto'>
      <h6 className='text-lg font-semibold text-black'>{item.name}</h6>
      <p className='text-sm text-black/70'>{item.info}</p>
    </div>
  </div>
);

const LovedByCreatorsSection = () => {
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
    <div
      className='relative py-[50px] md:py-[70px] lg:py-[145px] '
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #7EA7CC 37.29%, rgba(255, 255, 255, 0) 100%)",
      }}>
      <Image
        src='/images/back/dhew.png'
        alt='ds'
        height={500}
        width={500}
        className='absolute w-full h-full'></Image>
      <div className='flex justify-center pb-10'>
        <PageHeaderButton text='Testimonials' className='' />
      </div>

      <h1 className='font-semibold text-[36px] sm:text-[44px] md:text-[54px] -tracking-[0.04em] text-black text-center mb-12'>
        Loved by creators
      </h1>

      <div className='w-full container'>
        {/* <div className='block lg:hidden w-full'>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            className='w-full py-4 pl-2'>
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 w-full'>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LovedByCreatorsSection;
