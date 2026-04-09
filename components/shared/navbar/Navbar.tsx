/** @format */
"use client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import SiteButton from "../SiteButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { logOut } from "@/redux/features/auth/authSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const role = useAppSelector((state) => state.auth.role);

  const router = useRouter();
  const dispatch = useAppDispatch();
  // const isAdmin = role === "ADMIN";
  // console.log(isAdmin)

  const token = Cookies.get("token") ?? null;


  console.log("token", token);

  const handleLogout = () => {
    console.log("Logout");

    // remove cookie
    Cookies.remove("token");

    // clear redux state
    dispatch(logOut());

    // refresh page
    router.refresh();

    // optional redirect
    router.push("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      {/* ${isScrolled ? "bg-[#1E32A4]/5 backdrop-blur-sm" : "bg-transparent"} */}
      <div
        className={`fixed top-0 left-0 z-30 w-full px-6 md:px-10 lg:px-20.5 py-6 transition-all duration-300
 ${isScrolled ? "bg-white/80 backdrop-blur-md text-black shadow-md" : "bg-transparent text-white"}
`}>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            {" "}
            <p className='text-xl font-medium'>Flow Edit</p>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center lg:gap-30 xl:gap-40 2xl:gap-96 text-base font-medium '>

            <div className=" lg:flex items-center gap-12 text-base font-medium">
              <Link href='/'>
                <p>Home</p>
              </Link>
              <Link href='/pricing'>
                <p>Pricing</p>
              </Link>
              <Link href='/portfolio'>
                <p>Portfolio</p>
              </Link>

            </div>

            <div className="flex gap-8">
              {
                token ? <div className="flex items-center justify-center border rounded-full w-10 h-10"><User /> </div> : <Link href='/login'>
                  {" "}
                  <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
                    Sign In
                  </SiteButton>
                </Link>
              }
            {
                token ? <button onClick={handleLogout} className="px-4  py-2 rounded-md border bg-white text-black "> Logout</button> : <div className='w-full sm:w-fit shadow-2xl'>
                  <SiteButton className='bg-[#B6C7F5]/30 w-full hover:bg-[#B6C7F5]/30'>
                    Start for Free
                  </SiteButton>
                </div>
            }
            </div>

          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setOpen(true)} className='lg:hidden'>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div
          className='fixed inset-0 z-40 bg-blue-400 text-white'
          style={{
            backgroundImage: "url(/images/MobileaMenu.png)",
            backgroundSize: "cover",
          }}>
          {/* Top bar */}
          <div className='flex items-center justify-between px-6 py-6'>
            <Link href='/'>
              <p className='text-xl font-semibold'>Flow Edit</p>
            </Link>
            <button onClick={() => setOpen(false)} className='cursor-pointer'>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex h-full flex-col items-center justify-center gap-10 text-2xl px-12.5'>
            <Link href='/' onClick={() => setOpen(false)}>
              <p>Home</p>
            </Link>
            <hr className='w-full' />

            <Link href='/pricing' onClick={() => setOpen(false)}>
              <p>Pricing</p>
            </Link>
            <hr className='w-full' />

            <Link href='/portfolio' onClick={() => setOpen(false)}>
              <p>Portfolio</p>
            </Link>
            <hr className='w-full' />

            <button
              // onClick={() => setOpen(false)}
              className='mt-6 rounded-xl bg-white text-xl font-medium px-10 py-3 text-black w-full'>
              Start for Free
            </button>
            <Link href='/signup' className='w-full'>
              <button
                onClick={() => setOpen(false)}
                className=' rounded-xl w-full bg-white text-xl font-medium px-6 py-2.5 text-black'>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
