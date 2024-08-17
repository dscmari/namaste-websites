"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images//logo/logo.svg";
import { usePathname } from 'next/navigation'
import useScrollPosition from "../hooks/useScrollPosition";

export default function Navbar() {
  const pathname = usePathname()
  const [burgermenu, setBurgermenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollPositon = useScrollPosition()

  const toggleMenu = () => {
    toggleX();
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    setBurgermenu(window.innerWidth < 1000);
    if (window.innerWidth > 800) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const toggleX = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu?.getElementsByTagName("span");

    if (spans) {
      Array.from(spans).forEach((span) => {
        span.classList.toggle("open");
      });
    }
  };

  if (burgermenu) {
    return (
      <div className="p-4 py-2 border-b-4 sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center sm:pl-12">
            <Link href="/">
              <Image src={logo} alt="Logo" width={80} height={80} />
            </Link>
            <Link href="/">
              <p className="text-namasteGreen font-gagalin text-xl sm:text-4xl">
                Namaste-Websites
              </p>
            </Link>
          </div>
          <div className="burgermenu" id="burger-menu" onClick={toggleMenu}>
            <span className="top bg-namasteGreen"></span>
            <span className="middle bg-namasteGreen"></span>
            <span className="bottom bg-namasteGreen"></span>
          </div>
        </div>
        <div className={showMenu ? "block" : "hidden"} onClick={toggleMenu}>
          <ul className="flex flex-col items-end gap-4 mr-6 text-xl py-4 navbar">
            <li>
              <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li>
              <Link href="/Preise" className={`${pathname === '/Preise' ? 'active' : ''}`}>Preise</Link>
            </li>
            <li>
              <Link href="/UeberMich" className={`${pathname === '/UeberMich' ? 'active' : ''}`}>Über mich</Link>
            </li>
            <li>
              <Link href="/Kontakt" className={`${pathname === '/Kontakt' ? 'active' : ''}`}>Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
        <div className={`border-b-4 flex justify-around items-center bg-white sticky top-0 z-10 transition-all duration-300 
           ${scrollPositon > 0 ? 'py-0' : 'py-6'}`}>
          <div className="flex gap-4 items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
            <Link href="/">
              <p className="text-namasteGreen font-gagalin text-4xl font-thin">Namaste-Websites</p>
            </Link>
          </div>
          <ul className="flex gap-4 lg:text-2xl navbar">
            <li>
              <Link href="/Preise" className={`${pathname === '/Preise' ? 'active' : ''}`}>Preise</Link>
            </li>
            <li>
              <Link href="/UeberMich" className={`${pathname === '/UeberMich' ? 'active' : ''}`}>Über mich</Link>
            </li>
            <li>
              <Link href="/Kontakt" className={`${pathname === '/Kontakt' ? 'active' : ''}`}>Kontakt</Link>
            </li>
          </ul>
        </div>
    );
  }
}
