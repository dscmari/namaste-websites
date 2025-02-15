import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Carousel from "../components/Carousel";
import search from "../../../public/images/heilpraktiker/undraw_search-engines.svg";
import Link from "next/link";
import website from "../../../public/images/heilpraktiker/undraw_website.svg";
import text from "../assets/Heilpraktiker/text.json";

export const metadata: Metadata = {
  title: "Websites für Heilpraktiker | Deine digitale Visitenkarte",
  description:
    "Spezialisierte Websites für Heilpraktiker | Digitale Visitenkarte.",
};

export default function Heilpraktiker() {
  return (
    <div className="lg:mx-8">
      <div className="lg:flex lg:h-screen items-center lg:-mt-16 lg:-mb-36 mx-4 gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="md:text-5xl xl:text-7xl py-4 md:font-thin">
            Websites für Heilpraktiker:innen
          </h1>
          <p className="mb-4">
            Das Internet ist heutzutage die erste Anlaufstelle für Menschen, die
            eine Krankheit haben und Hilfe suchen. Von der ersten Symptomsuche
            über Suchmaschinen wie Google bis hin zur Recherche nach
            Anlaufstellen und Behandlungsmöglichkeiten.
          </p>
        </div>
        <div className="my-8 md:flex-1 flex justify-center">
          <Image src={search} alt="Sucheleiste" className="mx-auto" />
        </div>
      </div>
      <Carousel text={text} profession="heilpraktiker"/>
      <div className="flex flex-col lg:flex-row mx-4 my-16 lg:my-32">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="mb-4 md:text-3xl md:font-thin">Ein professineller Auftritt unterstützt</h2>
          <p>
            Eine aufschlussreiche Webseite kann ein erster Anlaufpunkt sein, um
            bereits die wichtigsten Fragen vorab zu klären. Das erspart wiederum
            Zeit, die für die Rahmenbedingungen der Behandlung geklärt werden
            müssen.
          </p>
        </div>
        <div className="flex-1">
          <Image src={website} alt="Website Icon" className="" />
        </div>
      </div>
      <div className="flex flex-col lg:gap-4 lg:flex-row  mx-4 my-16 lg:my-32">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="mb-4 md:text-3xl md:font-thin">Die wichtigsten Infos auf einen Blick</h2>
          <p>
            Als wichtigste Informationsquelle löst das Internet die persönliche
            Weiterempfehlung ab - besonders, wenn es um Krankheiten geht. Denn
            die Hürde, auf Webseiten nach Hilfe zu suchen, ist deutlich
            niedriger.
          </p>
        </div>
        <div className="flex-1 flex flex-col lg:justify-center lg:border-l-4 lg:border-namasteGreen">
          <div className="sm:flex sm:justify-center text-xl lg:py-8">
            <ul className="flex flex-col gap-2 mt-4 sm:gap-4 p-4 italic">
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  &quot;Welche Behandlungsmethoden werden angeboten?&quot;
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  &quot;Welche Kosten kommen auf mich zu?&quot;
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  &quot;Wie sind die Öffnungszeiten?&quot;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-4">
        Vorab erhältst du für alle meine Leistungen ein transparentes Angebot
        ohne versteckte Kosten. Bist du neugierig geworden? Lass uns gerne ins
        Gespräch kommen!
      </p>
      <div className="mb-8 lg:mb-32">
        <div className="p-4">
          <p className="text-center">Unverbindlich anfragen unter:</p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:noekel@namaste-websites.de"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
               hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              E-Mail
            </a>
            <p className="text-center m-0">oder</p>
            <Link
              href="/Kontakt"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
              hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
