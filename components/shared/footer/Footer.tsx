/** @format */

import { SquarePlay } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";

const footerMenu = [
  {
    title: "SITE MAP",
    links: [
      { label: "Product", to: "#t" },
      { label: "Pricing", to: "/pricing" },
      { label: "Changelog", to: "#" },
      { label: "Sign in", to: "#" },
    ],
  },
  {
    title: "MADE BY US",
    links: [
      { label: "Courses", to: "#" },
      { label: "UI Templates", to: "#" },
      { label: "Icons", to: "#" },
      { label: "Mockups", to: "#" },
    ],
  },
  {
    title: "TOOLS WE USE",
    links: [
      { label: "Figma", to: "#" },
      { label: "Framer", to: "#" },
      { label: "Spline", to: "#" },
      { label: "Screen Studio", to: "#" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className='w-full bg-gradient-to-b from-white via-blue-50/0 to-white pb-[96px]'>
      <div className='container '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14'>
          {/* Left Brand / Social */}
          <div className='flex flex-col lg:items-center items-start'>
            <div className='flex gap-4 mb-6'>
              <div className='h-8 w-8 rounded bg-white/40 backdrop-blur flex items-center justify-center'>
                <FaXTwitter className='text-lg' />
              </div>
              <div className='h-8 w-8 rounded bg-white/40 backdrop-blur flex items-center justify-center'>
                <SquarePlay size={18} />
              </div>
            </div>

            <p className='text-sm text-black/70'>
              © 2025.{" "}
              <Link href='#' className='hover:underline'>
                PRIVACY
              </Link>{" "}
              ·{" "}
              <Link href='#' className='hover:underline'>
                TERMS
              </Link>
            </p>
          </div>

          {/* Footer Menus */}
          {footerMenu.map((menu, i) => (
            <div key={i} className='text-start  sm:text-left z-0'>
              <h4 className='mb-4 text-sm font-semibold tracking-widest text-black/60'>
                {menu.title}
              </h4>

              <ul className='space-y-3'>
                {menu.links.map((link, idx) => (
                  <li key={idx} className=''>
                    <Link
                      href={link.to}
                      className='relative text-black/90 text-sm font-medium px-0 lg:px-3 py-1.5 block w-2/3 hover:border-l-2 hover:border-l-[#2670e9] border-transparent border-l-2 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-[#2670e9] before:blur-[10px] before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:opacity-100 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(38,112,233,0.3)_0%,rgba(38,112,233,0.15)_60%,rgba(38,112,233,0)_100%)] after:opacity-0 after:transition-all after:duration-500 after:ease-out hover:after:opacity-100 cursor-pointer text-start'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
