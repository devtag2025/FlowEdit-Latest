/** @format */

"use client";

import { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";

export default function Preloader() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-white z-50'>
      <LoaderIcon className='w-10 h-10 text-blue-500 animate-spin mb-4' />

      <p className='text-blue-500 text-xl font-semibold'>loading{dots}</p>
    </div>
  );
}
