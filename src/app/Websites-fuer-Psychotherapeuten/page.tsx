import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Carousel from "../components/Carousel";
import website from "../../../public/images/psychotherapeuten/undraw_personal-website.svg";
import rain from "../../../public/images/psychotherapeuten/undraw_walking-in-rain.svg";
import text from "../assets/Psychotherapeuten/text.json";

export const metadata: Metadata = {
  title: "Websites für Psychotherapeuten | Website Erstellung",
  description:
    "Spezialisierte Websites für Psychotherapeuten | Digitale Visitenkarte.",
};

export default function Psychotherapeuten() {
  return (
    <div className="lg:mx-8">
      <div className="lg:flex lg:h-screen items-center lg:-my-24 mx-4 gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="md:text-5xl xl:text-7xl py-4 md:font-thin">
            Websites für Psychotherapeut:innen
          </h1>
          <p className="mb-4 md:text-xl">
            Für Patient:innen ist Deine Webseite häufig der erste
            Kontaktpunkt mit Deiner Praxis. Umso wichtiger ist es, dass
            Du Deinen künftigen Patient:innen mit einer professionellen
            Webseite eine schnell auffindbare und zügig erreichbare digitale
            Anlaufstelle bietest. Als Webdesigner und Psychologe weiß ich,
            worauf es ankommt - und verhelfe Dir und Deiner Praxis so zu
            Sichtbarkeit.
          </p>
        </div>
        <div className="my-8 lg:flex-1 flex justify-center my-16 lg:my-0">
          <Image src={website} alt="Website-Illustration" className="mx-auto" />
        </div>
      </div>
      <Carousel text={text} profession="psychotherapeut" />
      <div className="flex flex-col lg:flex-row lg:flex-row-reverse mx-4 my-16 lg:my-32">
        <div className="flex-1 flex flex-col justify-center lg:text-center">
          <h2 className="md:text-3xl md:font-thin lg:mb-4">Ein professineller Auftritt unterstützt</h2>
          <p className="md:text-xl">
            Eine aufschlussreiche Webseite kann ein erster Anlaufpunkt sein, um
            bereits die wichtigsten Fragen vorab zu klären. Das erspart wiederum
            Zeit, die für die Rahmenbedingungen der Behandlung geklärt werden
            müssen.
          </p>
        </div>
        <div className="flex-1">
          <Image src={rain} alt="Website Icon" className="mx-auto" />
        </div>
      </div>
  
      <div className="py-4 my-8 md:my-12 flex flex-col bg-namasteDarkgreen bg-opacity-40">
        <h1 className="text-center">
          Infos, die deine Website bereitstellen sollte
        </h1>
        <div className=" sm:p-4 sm:flex sm:justify-center text-xl mx-4">
          <ul className="flex flex-col gap-2 mt-4 sm:mx-16 sm:gap-4">
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">
                {" "}
                eine leicht verständliche Darstellung über den Ablauf, ideal für
                alle Patienten:innen, die noch nie in psychotherapeutischer
                Behandlung waren
              </span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">
                {" "}
                wichtige Informationen zur Abrechnung, zum Beispiel ob diese
                über die gesetzlichen Krankenkassen erfolgen kann
              </span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">
                Notfallkontaktnummern für eine akute Krise
              </span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">
                Deine erlangten Qualifikationen und etwaige Spezialisierungen
              </span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">
                {" "}
                Deine Adresse, Telefonnummer und die Möglichkeiten für eine
                Einzelsprechstunde, falls Du beispielsweise auch
                Video-Chat-Sprechstunden anbietest
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-4 md:text-xl">
        Vorab erhältst du für alle meine Leistungen ein transparentes Angebot
        ohne versteckte Kosten. Bist du neugierig geworden? Lass uns gerne ins
        Gespräch kommen!
      </p>
      <div className="md:mb-12">
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
