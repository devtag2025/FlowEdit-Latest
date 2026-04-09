/** @format */

"use client";

import SiteButton from "@/components/shared/SiteButton";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "Share your footage and any relevant media assets via the upload portal",
    imageSrc: "/images/upload (2).png",
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    imageSrc: "/images/home-page/workflow-3.png",
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    imageSrc: "/images/home-page/workflow-2.png",
  },
];

export default function WorkFlowSection() {
  return (
    <section
      className='relative py-10 lg:py-16'
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #7EA7CC 37.29%, rgba(255, 255, 255, 0) 100%)",
      }}>
      <Image
        src='/images/back/border.svg'
        alt='sdf'
        height={500}
        width={500}
        className='h-full w-full absolute '></Image>
      <Image
        src='/images/back/dhew.png'
        alt='sdf'
        height={500}
        width={500}
        className='h-full w-full absolute '></Image>
      <p className='text-center text-3xl container md:text-4xl lg:text-[54px] font-semibold  pb-[42px]'>
        A Simple Powerful Workflow
      </p>

      {/* Top cards */}
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        {projects.map(({ id, title, description, imageSrc }) => (
          <div
            key={id}
            className='bg-[#e4ebf4] border bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-2.5 flex flex-col'>
            <div className='relative w-full h-40 rounded-lg overflow-hidden mb-6'>
              <Image
                src={imageSrc}
                alt={title}
                width={369}
                height={241}
                className='object-cover w-full'
              />
            </div>
            <h3 className='font-semibold text-2xl md:text-3xl mb-2.5 leading-100%'>
              {title}
            </h3>
            <p className='text-[#000000B2] text-base font-normal'>
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-[108px]'>
        <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
          <Image
            src='/images/back/glack.png'
            alt='Large project'
            fill
            className=' rounded-xl'
          />
        </div>

        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl lg:text-[54px] font-semibold  mb-5.5 '>
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
          <div className='w-full sm:w-fit shadow-2xl'>
            <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
              Start for Free
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// /** @format */

// "use client";

// import Image from "next/image";

// const projects = [
//   {
//     id: 1,
//     title: "Project Name",
//     description:
//       "Share your footage and any relevant media assets via the upload portal",
//     imageSrc: "/images/upload (2).png",
//   },
//   {
//     id: 2,
//     title: "Project Name",
//     description:
//       "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
//     imageSrc: "/images/home-page/workflow-3.png",
//   },
//   {
//     id: 3,
//     title: "Project Name",
//     description:
//       "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
//     imageSrc: "/images/home-page/workflow-2.png",
//   },
// ];

// export default function WorkFlowSection() {
//   return (
//     <section
//       className='relative py-16'
//       style={{
//         background:
//           "linear-gradient(180deg, #FFFFFF 0%, #7EA7CC 37.29%, rgba(255, 255, 255, 0) 100%)",
//       }}>
//       <Image
//         src='/images/back/border.svg'
//         alt='sdf'
//         height={5000}
//         width={5000}
//         className='h-full w-full absolute'></Image>
//       <Image
//         src='/images/back/dhew.png'
//         alt='sdf'
//         height={500}
//         width={500}
//         className='h-full w-full absolute'></Image>
//       {/* Top cards */}
//       <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
//         {projects.map(({ id, title, description, imageSrc }) => (
//           <div
//             key={id}
//             className='bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col'>
//             <div className='relative w-full h-40 rounded-lg overflow-hidden mb-4'>
//               <Image src={imageSrc} alt={title} fill className='object-cover' />
//             </div>
//             <h3 className='font-semibold text-lg mb-2'>{title}</h3>
//             <p className='text-gray-700 text-sm'>{description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom section */}
//       <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
//         <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
//           <Image
//             src='/images/Duis2.png'
//             alt='Large project'
//             fill
//             className='object-cover rounded-xl'
//           />
//         </div>

//         <div className='w-full lg:w-1/2'>
//           <h2 className='text-3xl md:text-4xl font-bold mb-6'>
//             Duis convallis elit blandit turpis
//           </h2>
//           <p className='text-gray-700 mb-6 leading-relaxed'>
//             Tellus fermentum laoreet dignissim risus scelerisque pretium
//             ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
//             dui sed vestibulum quis tellus egestas dolor eget magna. Dui
//             imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
//             nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
//             Amet sem.
//           </p>
//           <button className='px-6 py-2 bg-white rounded-md shadow hover:bg-gray-100 transition'>
//             Start for Free
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // /** @format */

// // "use client";

// // import Image from "next/image";
// // import SiteButton from "@/components/shared/SiteButton";
// // import { useEffect, useState } from "react";

// // const workflowData = [
// //   {
// //     id: 1,
// //     title: "Upload your footage",
// //     desc: "Share your footage and any relevant media assets via the upload portal",
// //     img: "/images/upload (2).png",
// //   },
// //   {
// //     id: 2,
// //     title: "Track progress",
// //     desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
// //     img: "/images/home-page/workflow-2.png",
// //   },
// //   {
// //     id: 3,
// //     title: "Experience success",
// //     desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
// //     img: "/images/home-page/workflow-3.png",
// //   },
// // ];

// // const WorkflowSection = () => {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 1024);
// //     };
// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);
// //     return () => window.removeEventListener("resize", checkMobile);
// //   }, []);

// //   return (
// //     <div className='w-full relative overflow-hidden mt-5  lg:-mt-40'>
// //       {/* Background Image */}
// //       <div className='absolute top-24 md:top-0 left-0 right-0 bottom-0 w-full h-full z-0'>
// //         <Image
// //           src='/homepage/workflowbg.png'
// //           alt='workflow background'
// //           fill
// //           className='w-full h-full'
// //           style={{
// //             objectFit: isMobile ? "cover" : "contain",
// //             objectPosition: "top",
// //           }}
// //           sizes='100vw'
// //           priority
// //         />
// //       </div>

// //       {/* Content */}
// //       <div className='container flex flex-col items-center gap-10 relative lg:mb-[50px] z-10 pt-6  pb-10 lg:pb-0'>
// //         <h1 className='font-semibold text-[34px] sm:text-[42px] md:text-[54px] -tracking-[-2.16%] text-center '>
// //           A Simple Powerful Workflow
// //         </h1>

// //         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch lg:-mb-[75px]'>
// //           {workflowData.map((item) => (
// //             <div
// //               key={item.id}
// //               className='p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full h-full'>
// //               <div className='relative w-full h-[220px] sm:h-[241px]'>
// //                 <Image
// //                   src={item.img}
// //                   alt={item.title}
// //                   fill
// //                   className='object-cover rounded-md'
// //                 />
// //               </div>

// //               <div className='flex flex-col gap-1.5 px-2.5'>
// //                 <h2 className='font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize'>
// //                   {item.title}
// //                 </h2>
// //                 <p className='text-base leading-[150%] text-black/70'>
// //                   {item.desc}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* DualShowcase Section */}
// //         <div className=' flex flex-col justify-between gap-16 lg:gap-28 relative z-10 mt-10 lg:mt-[284px] pb-10 lg:pb-0'>
// //           <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10 lg:gap-24 max-w-full'>
// //             <div className='w-full rounded-2xl'>
// //               <div className='relative w-full  lg:h-full'>
// //                 <Image
// //                   src='/images/back/glack.png'
// //                   alt='showcase image big'
// //                   fill
// //                   className='object-cover rounded-2xl'
// //                 />
// //               </div>
// //             </div>

// //             <div className='w-full  flex flex-col gap-6'>
// //               <h1 className='font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl'>
// //                 Duis convallis elit blandit turpis
// //               </h1>
// //               <p className='font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] max-w-lg'>
// //                 Tellus fermentum laoreet dignissim risus scelerisque pretium
// //                 ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
// //                 Varius dui sed vestibulum quis tellus egestas dolor eget magna.
// //                 Dui imperdiet interdum parturient vitae. Nunc gravida lobortis
// //                 ut ut in nisl facilisis amet. Aenean feugiat ultrices mauris
// //                 gravida iaculis. Amet sem.
// //               </p>

// //               <div className='w-full lg:w-fit'>
// //                 <SiteButton className='bg-[#B6C7F5]/15 hover:bg-[#B6C7F5]/15 shadow-lg w-full'>
// //                   Start for Free
// //                 </SiteButton>
// //               </div>
// //             </div>
// //           </div>

// //           <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10 lg:gap-24 max-w-full'>
// //             <div className='w-full flex flex-col gap-6'>
// //               <h1 className='font-semibold text-[36px] lg:text-[54px] -tracking-[0.04em] text-black max-w-xl'>
// //                 Duis convallis elit blandit turpis
// //               </h1>
// //               <p className='font-normal text-lg leading-[133%] text-[rgba(0,0,0,0.7)] max-w-lg'>
// //                 Tellus fermentum laoreet dignissim risus scelerisque pretium
// //                 ullamcorper pretium. Sapien ut tellus ut hendrerit mauris.
// //                 Varius dui sed vestibulum quis tellus egestas dolor eget magna.
// //                 Dui imperdiet interdum parturient vitae. Nunc gravida lobortis
// //                 ut ut in nisl facilisis amet. Aenean feugiat ultrices mauris
// //                 gravida iaculis. Amet sem.
// //               </p>

// //               <div className='w-full lg:w-fit'>
// //                 <SiteButton className='w-full bg-[#B6C7F5]/15 hover:bg-[#B6C7F5]/15 shadow-lg'>
// //                   Start for Free
// //                 </SiteButton>
// //               </div>
// //             </div>
// //             <div className='w-full  rounded-2xl'>
// //               <div className='relative w-full lg:h-full'>
// //                 <Image
// //                   src='/images/Duis2.png'
// //                   alt='showcase image big'
// //                   fill
// //                   className='object-cover rounded-2xl'
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WorkflowSection;
