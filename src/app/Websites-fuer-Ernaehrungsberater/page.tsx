import Link from "next/link";
import React from "react";
import Image from "next/image";
import Carousel from "../components/Carousel";
import onlineResume from "../assets/Ernaehrungsberater/undraw_online-resume.svg";
import browsing from "../assets/Ernaehrungsberater/undraw_browsing.svg";
import text from "../assets/Ernaehrungsberater/text.json";

export default function Ernährungsberater() {
  return (
    <div className="lg:mx-8">
      <div className="lg:flex lg:h-screen items-center lg:-my-24 mx-4 gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="md:text-5xl xl:text-7xl py-4 md:font-thin">
            Websites für Ernährungsberater:innen
          </h1>
          <p className="mb-4 md:text-xl">
            Laut dem Bundeszentrum für Ernährung (BZfE) zeichnet ein klarer
            Digitaltrend im Bereich der ernährungspräventiven und
            ernährungstherapeutischen Beratung ab. Laut dem Trendreport
            Ernährung, der vom BZfE in Kooperation mit NUTRITION HUB,
            Deutschlands größtem Netzwerk für Ernährungsexpert:innen
            veröffentlicht wurde, beobachtet ein Drittel der befragten
            Ernährungsprofis seit 2022 eine massive Zunahme an digitalen
            Angeboten.
          </p>
        </div>
        <div className="my-8 lg:flex-1 flex justify-center my-16 lg:my-0">
          <Image
            src={browsing}
            alt="Website Browsing Illustration"
            className="mx-auto"
          />
        </div>
      </div>
      <Carousel text={text} profession="ernaehrungsberater" />
      <div className="flex flex-col lg:flex-row mx-4 my-8 lg:my-32 gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-center lg:text-center">
          <h2 className="md:text-3xl md:font-thin md:mb-4">
            Angebot für Ernährungsberater:innen
          </h2>
          <p className="md:text-xl">
            Wenn du deine Onlinepräsenz aufbauen möchtest, aber weder Zeit noch
            Lust hast, dich mit einer Toolbox herumzuschlagen, dann bist du bei
            mir genau an der richtigen Adresse! Ich erstelle Dir schnell und
            unkompliziert Deinen Online-Auftritt. Und ich lassen den Stift nicht
            fallen, sobald die Internetseite das Licht der Welt erblickt,
            sondern helfe dir auch dabei, sie auf dem neuesten Stand zu halten.
            So kannst du deine Zeit voll und ganz deinen Klient:innen widmen.
            Den Rest erledige ich!
          </p>
        </div>
        <div className="flex-1">
          <Image src={onlineResume} alt="Website Icon" className="" />
        </div>
      </div>
      <p className="mx-4 md:text-xl">
        Vorab erhältst du für alle meine Leistungen ein transparentes Angebot
        ohne versteckte Kosten. Bist du neugierig geworden? Lass uns gerne ins
        Gespräch kommen!
      </p>
      <div className="">
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
