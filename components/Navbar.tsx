"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const manejarRedireccion = () => {
    window.open("https://sudeporte.com/1220-cfs-futsal-ibi", "_blank", "noopener,noreferrer");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1360);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed w-full h-24 bg-gradient-to-r from-blue-500 to-blue-800 navbar bold-24 text-white shadow-xl z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <p className="bold-32 cursor-pointer transition-all hover:font-bold">
            CFS FUTSAL IBI
          </p>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="ml-10 uppercase cursor-pointer transition-all hover:font-bold">
                <Link href={link.key === 'store' ? "#" : link.href} onClick={link.key === 'store' ? manejarRedireccion : () => setMenuOpen(false)} className="transition-all hover:font-bold flex items-center">
                  <link.icon className="inline-block mr-2 transition-all hover:font-bold" />{!isSmallScreen && link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <FaBars color="white" size={32} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500 z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-50"
        }
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-4 text-xl hover:bg-blue-100">
              <Link href={link.key === 'store' ? "#" : link.href} onClick={link.key === 'store' ? manejarRedireccion : () => setMenuOpen(false)} className="block uppercase text-blue-800 transition-all hover:font-bold flex items-center">
                <link.icon className="ml-3 inline-block mr-2 transition-all hover:font-bold" />{link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
