/** @format */

import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

// app/components/PortfolioSection.jsx
// or pages/components/PortfolioSection.jsx

const portfolioItems = [
  {
    id: 1,
    title: "Project Name",
    desc: "Share your footage and any relevant media assets via the upload portal",
    bg: "/images/upload (2).png",
  },
  {
    id: 2,
    title: "Project Name",
    desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    bg: "/images/home-page/workflow-3.png",
  },
  {
    id: 3,
    title: "Project Name",
    desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process. ",
    bg: "/images/home-page/workflow-2.png",
  },
  {
    id: 4,
    title: "Project Name",
    desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    bg: "/images/home-page/workflow-3.png",
  },
  {
    id: 5,
    title: "Project Name",
    desc: "Share your footage and any relevant media assets via the upload portal",
    bg: "/images/upload (2).png",
  },
  {
    id: 6,
    title: "Project Name",
    desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process. ",
    bg: "/images/home-page/workflow-2.png",
  },
];

export default function PortfolioBanner() {
  return (
    <section className='relative w-full  pt-24 pb-6'>
      <div
        className='
        absolute inset-0
        bg-gradient-to-b from-[#6386f1] to-[rgba(255,255,255,0)]
        z-0
      '
      />
      <div
        className='absolute -top-20 block lg:hidden left-0 right-0 bottom-0 w-full h-screen z-0  bg-contain'
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
      <Image
        src='/images/back/border.svg'
        alt='fdf'
        height={500}
        width={500}
        className='absolute w-full h-full lg:-top-20'></Image>
      <Image
        src='/images/back/dhew.png'
        alt='fdf'
        height={500}
        width={500}
        className='absolute hidden lg:block w-full h-full'></Image>
      <Image
        src='/images/back/Wallpaper Blur.png'
        alt='fdf'
        height={500}
        width={500}
        className='absolute w-full h-full -top-30'></Image>

      {/* Content */}
      <div className='relative z-10 container mx-auto  px-6 text-center pt-25 lg:pt-20'>
        {/* Header */}
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
          Check out our portfolio
        </h2>

        <p className='max-w-2xl mx-auto text-white/80 mb-8 text-sm md:text-base'>
          Nullam egestas et in tristique faucibus. Mauris quis posuere lorem
          tincidunt phasellus auctor tortor. Sit id neque tincidunt ac nibh
          varius aliquam tincidunt. Habitant egestas donec diam scelerisque
          donec aenean odio mattis. Lacus tempus est congue ultricies in
          vestibulum aenean. Enim aliquet nunc hac eget.
        </p>

        <div className='w-full  lg:flex justify-center items-center mx-auto mb-[128px]'>
          <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
            Start for Free
          </SiteButton>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left '>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className='bg-[#e9e8f6] rounded-xl shadow-md overflow-hidden p-2.5'>
              {/* Image Placeholder */}
              <Image
                src={item.bg}
                alt='dsafads'
                height={241}
                width={369}
                className='w-full'
              />

              {/* Card Content */}
              <div className='p-5'>
                <h3 className='font-semibold text-2xl md:text-3xl mb-2.5 leading-100%'>
                  {item.title}
                </h3>
                <p className='text-[#000000B2] text-base font-normal'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** @format */

// /** @format */

// "use client";

// import SiteButton from "@/components/shared/SiteButton";
// import { IProject } from "@/types/portfolio";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const PortfolioBanner = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const img = new window.Image();
//     img.src = "/homepage/projectsbg.svg";
//     img.onload = () => setImageLoaded(true);
//   }, []);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);
//   const allProjects: IProject[] = [
//     {
//       img: "/images/home-page/workflow-2.png",
//       title: "project name",
//       desc: "Share your footage and any relevant media assets via the upload portal",
//     },
//     {
//       img: "/images/home-page/workflow-3.png",
//       title: "project name",
//       desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
//     },
//     {
//       img: "/images/home-page/workflow-2.png",
//       title: "project name",
//       desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
//     },
//     {
//       img: "/images/home-page/workflow-3.png",
//       title: "project name",
//       desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
//     },
//     {
//       img: "/images/home-page/workflow-2.png",
//       title: "project name",
//       desc: "Share your footage and any relevant media assets via the upload portal",
//     },
//     {
//       img: "/images/home-page/workflow-3.png",
//       title: "project name",
//       desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
//     },
//   ];

//   return (
//     <div className='relative w-full'>
//       <div className='w-full relative'>
//         {/* Background Image */}
//         <Image
//           src='/homepage/projectsbg.svg'
//           alt='projects background'
//           fill
//           priority
//           fetchPriority='high'
//           className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 pointer-events-none'
//           sizes='100vw'
//           style={{
//             objectFit: isMobile ? "cover" : "contain",
//             objectPosition: "top left",
//           }}
//         />

//         {/* Background Color - shows until image loads */}
//         <div
//           className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-linear-to-b from-[#4069E4] to-[rgba(255,255,255,0)] z-0 transition-opacity duration-300 ${
//             imageLoaded ? "opacity-0" : "opacity-100"
//           }`}
//         />

//         <div className='relative z-10 mx-auto w-full  md:px-0 max-w-[1216px]'>
//           <div className='flex flex-col items-center justify-center gap-6 pt-40 lg:pt-[190px] '>
//             <h1 className='font-semibold text-[44px] lg:text-[73px] leading-[118%] -tracking-[0.04em] text-white text-center lg:text-left'>
//               Check out our <br className='block lg:hidden' /> portfolio
//             </h1>
//             <p className='font-normal text-lg lg:text-xl leading-[150%] text-white max-w-5xl text-center'>
//               Nullam egestas et in tristique faucibus. Mauris quis posuere lorem
//               tincidunt phasellus auctor tortor. Sit id neque tincidunt ac nibh
//               varius aliquam tincidunt. Habitant egestas donec diam scelerisque
//               donec aenean odio mattis. Lacus tempus est congue ultricies in
//               vestibulum aenean. Enim aliquet nunc hac eget.
//             </p>
//             <div className='w-fit'>
//               <SiteButton>View Projects</SiteButton>
//             </div>
//           </div>

//           <div className='relative pt-15 lg:pt-[128px] pb-[75px] lg:pb-32 '>
//             <div className=''>
//               <div className=''>
//                 <div className=' w-full  md:px-0 max-w-[1216px]'>
//                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//                     {allProjects?.map((project, i) => (
//                       <div
//                         key={i}
//                         className='p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full min-h-[400px]'>
//                         <div className='relative w-full h-[220px] sm:h-[241px]'>
//                           <Image
//                             src={project.img}
//                             alt={project.title}
//                             fill
//                             className='object-cover rounded-md'
//                             priority={i < 3}
//                           />
//                         </div>

//                         <div className='flex flex-col gap-1.5 px-2.5'>
//                           <h2 className='font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize'>
//                             {project.title}
//                           </h2>
//                           <p className='text-base leading-[150%] text-black/70'>
//                             {project.desc}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioBanner;
