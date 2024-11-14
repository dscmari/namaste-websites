import Link from "next/link";
import React from "react";

export default function Angebote() {
  return (
    <div>
      <div className="text-center">
      <Link href="/Websites-fuer-Psychotherapeuten" className="block px-4 py-24 text-white text-2xl bg-namasteGreen">
          Webseiten für Psychotherapeut:innen
        </Link>
        <Link href="/Websites-fuer-Heilpraktiker" className="block px-4 py-24 text-white text-2xl bg-namasteDarkgreen ">
          Webseiten für Heilpraktiker:innen
        </Link>
        <Link href="/#" className="block px-4 py-24 text-white text-2xl bg-namasteGreen ">
          Webseiten für Option3
        </Link>
      </div>
    </div>
  );
}
