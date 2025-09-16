"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode(); // ✅ Now from context

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-full max-w-[90%] -z-10">
      <Image 
        src={assets.header_bg_color} 
        alt="background" 
        className="w-full pointer-events-none select-none dark:hidden"
        priority
      />
      </div>


      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-gray-350/50 " : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode? assets.logo_dark:assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          }`}
        >
          <li>
            <a className="font-serif" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-serif" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-serif" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-serif" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-serif" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-serif ${isScroll ? '' : 'bg-white/50 shadow-sm'}`}
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
          {/* Light mode menu icon */}
          <Image 
            src={assets.menu_black} 
            alt="menu light" 
            className="w-6 dark:hidden" 
          />

          {/* Dark mode menu icon */}
          <Image 
            src={assets.menu_white} 
            alt="menu dark" 
            className="w-6 hidden dark:block" 
          />
        </button>

        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a className="font-serif" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
