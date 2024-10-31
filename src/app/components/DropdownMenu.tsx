import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

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
      <button onClick={toggleSubmenu}>Angebote</button>
      <ul
        className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-max text-lg 
          transition-all duration-200 ease-in-out 
          ${isSubmenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
      >
          <Link
            onClick={toggleSubmenu}
            href="/Websites-fuer-Heilpraktiker"
            className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
          >
            Websites für Heilpraktiker*innen
          </Link>

          <Link
            onClick={toggleSubmenu}
            href="/#"
            className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
          >
            Option 2
          </Link>

          <Link
            onClick={toggleSubmenu}  
            href="/#"
            className="block p-4 hover:bg-namasteGreen hover:text-white hover:no-underline"
          >
            Option 3
          </Link>
        </ul>
      
    </div>
  );
}
