import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import arrow from "../../../public/images/keybord-arrow-down.svg";

export default function DropdownMenu() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (event: { target: any }) => {
      if (isSubmenuOpen && !ref.current?.contains(event.target)) {
        console.log("clicked outside");
        toggleSubmenu();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isSubmenuOpen]);

  return (
    <div className="relative" ref={ref}>
      <button onClick={toggleSubmenu} className="md:flex">
        Angebote{" "}
        <Image
          src={arrow}
          alt="Pfeil nach unten"
          width={30}
          height={30}
          className="hidden md:block mt-1"
        />
      </button>
      <ul
        className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-max text-lg 
          transition-all duration-200 ease-in-out 
          ${
            isSubmenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
      >
        <Link
          onClick={toggleSubmenu}
          href="/Websites-fuer-Psychotherapeuten"
          className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
        >
          Psychotherapeut:innen
        </Link>
        <Link
          onClick={toggleSubmenu}
          href="/Websites-fuer-Heilpraktiker"
          className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
        >
          Heilpraktiker:innen
        </Link>
        <Link
          onClick={toggleSubmenu}
          href="/Websites-fuer-Ernaehrungsberater"
          className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
        >
          Ernährungsberater:innen
        </Link>
      </ul>
    </div>
  );
}
