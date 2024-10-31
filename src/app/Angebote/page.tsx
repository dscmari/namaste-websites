import Link from "next/link";
import React from "react";

export default function Angebote() {
  return (
    <div>
      <div className="text-center">
        <Link href="/Websites-fuer-Heilpraktiker" className="block px-4 py-24 text-white text-2xl bg-namasteGreen ">
          Websites für Heilpraktiker*innen
        </Link>
        <Link href="/#" className="block px-4 py-24 text-white text-2xl bg-namasteDarkgreen">
          Websites für Option2
        </Link>
        <Link href="/#" className="block px-4 py-24 text-white text-2xl bg-namasteGreen ">
          Websites für Option3
        </Link>
      </div>
    </div>
  );
}
