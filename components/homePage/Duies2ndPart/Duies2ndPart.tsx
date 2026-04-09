/** @format */

import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";
import React from "react";

export default function Duies2ndPart() {
  return (
    <div>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-[108px]'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl lg:text-[54px] font-semibold  pb-5.5'>
            Duis convallis elit blandit turpis
          </h2>
          <p className='text-[#000000B2] font-normal text-lg mb-5.5 leading-relaxed'>
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>
          <div className='w-full sm:w-fit '>
            <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
              Start for Free
            </SiteButton>
          </div>
        </div>
        <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
          <Image
            src='/images/Duis2.png'
            alt='Large project'
            fill
            className=' rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
