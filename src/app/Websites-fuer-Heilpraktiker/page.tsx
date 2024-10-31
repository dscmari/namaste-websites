import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import zweig from "../../../public/images/zweig.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites für Heilpraktiker | Deine digitale Visitenkarte",
  description:
    "Spezialisierte Websites für Heilpraktiker – Ihre digitale Visitenkarte.",
};

export default function Heilpraktiker() {
  return (
    <div className="mx-4">
        <div className="lg:flex items-center gap-4">
        <div className="p-4 lg:w-2/3">
          <h1 className="text-2xl py-4">
          Websites für Heilpraktiker: Deine digitale Visitenkarte
          </h1>
          <p className="mb-4">
            Was haben Psycholog:innen, Therapeut:innen, Heilpraktiker:innen,
            Ernährungsberater:innen, Fitnesstrainer:innen, Physiotherapeut:innen
            und Yogalehrer:innen gemeinsam? Sie alle arbeiten mit Menschen. Und
            genau für solche Menschen erstelle ich Webseiten. Warum? Damit sie
            sich auf das konzentrieren können, was wirklich wichtig ist.
          </p>
          <p className="text-center md:text-left">
            Unverbindlich anfragen unter:
          </p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:noekel@namaste-websites.de"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
               hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              E-Mail
            </a>
            <p className="text-cente">oder</p>
            <Link
              href="/Kontakt"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
              hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className="m-4 md:flex items-center gap-4">
          <div className="hidden md:block lg:hidden p-4 lg:w-1/2">
            <h1>Nutzerfreundlich für Patient:innen und Klient:innen</h1>
            <p>
              Ich arbeite selbst als Psychologe und weiß, wie es ist, mit
              Patient:innen und Klient:innen zu arbeiten. Deshalb weiß ich auch,
              dass die Nutzerfreundlichkeit einer solchen Webseite im Zentrum
              stehen muss.
            </p>
          </div>
          <Image
            src={zweig}
            alt="Grüner Zweig"
            width={300}
            height={600}
            className="mx-auto shadow-md shadow-black"
          />
        </div>
      </div>
    </div>
  );
}
