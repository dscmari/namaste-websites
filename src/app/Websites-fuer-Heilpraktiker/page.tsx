import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import search from "../../../public/images/heilpraktiker/search.jpg";
import beach from "../../../public/images/heilpraktiker/beach.jpg";
import stones from "../../../public/images/heilpraktiker/stones.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites für Heilpraktiker | Deine digitale Visitenkarte",
  description:
    "Spezialisierte Websites für Heilpraktiker | Digitale Visitenkarte.",
};

export default function Heilpraktiker() {
  return (
    <div className="mx-4">
      <h1 className="text-2xl py-4">Webseiten für Heilpraktiker:innen</h1>
      <div className="md:flex">
        <div className="md:w-1/2">
          <p className="mb-4">
            Das Internet ist heutzutage die erste Anlaufstelle für Menschen, die
            eine Krankheit haben und Hilfe suchen. Von der ersten Symptomsuche
            über Suchmaschinen wie Google bis hin zur Recherche nach
            Anlaufstellen und Behandlungsmöglichkeiten.
          </p>
          <p className="hidden md:block mb-4">
            Mittlerweile ist der Onlineauftritt als virtuelle Visitenkarte
            genauso wichtig geworden wie die persönliche Weiterempfehlung. Denn
            obwohl die meisten Heilpraktiker:innen vorwiegend auf
            Mund-zu-Mund-Propaganda setzen, entgeht ihnen zunehmend eine
            wachsende Zahl an potenziellen Klient:innen, die lieber zuerst das
            Internet um Hilfe fragen.{" "}
          </p>
        </div>
        <div className="my-8 md:w-1/2 md:flex items-center">
          <Image
            src={search}
            alt="Sucheleiste"
            width={350}
            height={700}
            className="mx-auto shadow-md shadow-black"
          />
        </div>
        <p className="mb-4 md:hidden">
          Mittlerweile ist der Onlineauftritt als virtuelle Visitenkarte genauso
          wichtig geworden wie die persönliche Weiterempfehlung. Denn obwohl die
          meisten Heilpraktiker:innen vorwiegend auf Mund-zu-Mund-Propaganda
          setzen, entgeht ihnen zunehmend eine wachsende Zahl an potenziellen
          Klient:innen, die lieber zuerst das Internet um Hilfe fragen.{" "}
        </p>
      </div>
      <h2>Die wichtigsten Informationen auf einen Blick</h2>
      <p>
        Als wichtigste Informationsquelle löst das Internet die persönliche
        Weiterempfehlung ab - besonders, wenn es um Krankheiten geht. Denn die
        Hürde, auf Webseiten nach Hilfe zu suchen, ist deutlich niedriger.
        Gerade, wenn es um mögliche Behandlungen für eine Erkrankung geht, fällt
        die Onlinerecherche leichter, als sich einem Bekannten oder einer
        Bekannten mit intimen Details anzuvertrauen.
      </p>
      <p>
        In der Heilkunde steht der Kranke in seiner ganzheitlichen
        Persönlichkeit im Mittelpunkt. Heilpraktiker:innen widmen sich intensiv
        ihren Patientinnen und Patienten, um ein möglichst umfassendes Bild zu
        zeichnen. Ihr Ziel ist es, mit naturheilkundlichen Verfahren ein
        ergänzendes oder alternatives Angebot zur Schulmedizin zu bieten und mit
        ihren Ansätzen das Spektrum der Therapievielfalt zu vergrößern.{" "}
      </p>
      <p>
        Hierfür müssen Heilpraktiker:innen ein Vertrauensverhältnis mit ihren
        Klient:innen schaffen und eng mit den erkrankten Menschen
        zusammenarbeiten.
      </p>
      <p>
        Der Heilpraktiker öffnet sich dem Patienten, nimmt ihn an, hört ihm zu.
        Er verknüpft und strukturiert seine Beobachtungen und das Berichtete mit
        seinen Erfahrungsmustern, um einerseits daraus sein therapeutisches
        Vorgehen abzuleiten und andererseits den Patienten über die
        Zusammenhänge seiner Probleme aufzuklären, sowie für eine aktive und
        mitverantwortliche Unterstützung bei den therapeutischen Bemühungen zu
        gewinnen
      </p>
      <p>
        Eine professionelle Internetpräsenz wird niemals diese essenzielle
        Arbeit ersetzen. Aber eine aufschlussreiche Webseite kann ein erster
        Anlaufpunkt sein, um bereits die wichtigsten Fragen vorab zu klären. Das
        erspart wiederum Zeit, die für die Rahmenbedingungen der Behandlung
        geklärt werden müssen.
      </p>
      <div className="my-8">
        <Image
          src={beach}
          alt="Strand"
          width={2000}
          className="mx-auto shadow-md shadow-black"
        />
      </div>
      <h2>Zeit für das wirklich Wichtige</h2>
      <p>
        Der Aufbau und die Pflege einer professionellen und erfolgreichen
        Webseite benötigen jedoch Zeit sowie Liebe zum Detail. Diese beiden
        Dinge sind extrem kostbar, da Menschen in Heilberufen lieber jede freie
        Minute in die detaillierte Anamnese und Behandlung ihrer Patient:innen
        investieren möchten.
      </p>
      <h2>Mein Angebot für Heilpraktiker:innen </h2>
      <p>
        Und hier kommt Namaste-Websites ins Spiel. Wenn du deine Onlinepräsenz
        aufbauen möchtest, aber weder Zeit noch Lust hast, dich mit einer
        Toolbox herumzuschlagen, dann bist du bei mir genau an der richtigen
        Adresse! Ich erstelle Dir schnell und unkompliziert Deinen
        Online-Auftritt. Und ich lassen den Stift nicht fallen, sobald die
        Internetseite das Licht der Welt erblickt, sondern helfe dir auch dabei,
        sie auf dem neuesten Stand zu halten. So kannst du deine Zeit voll und
        ganz deinen Klient:innen widmen. Den Rest erledige ich!
      </p>
      <h2>Webseiten-Entwicklung verknüpft mit Erfahrung als Psychologe</h2>
      <p>
        Ich bin Psychologe und weiß, wie es ist, mit Patient:innen und
        Klient:innen zu arbeiten. Deshalb weiß ich auch, dass die
        Nutzerfreundlichkeit einer solchen Webseite im Zentrum stehen muss. Um
        deinen Klient:innen und dir Zeit zu sparen, sollte beispielsweise
        schnell ersichtlich werden, inwiefern oder ob Teile deiner Leistungen
        über die Krankenkasse abgerechnet werden können und wie die Behandlung
        abläuft.
      </p>
      <div className="my-8 md:hidden">
        <Image
          src={stones}
          alt="Stapel Steine"
          width={350}
          height={700}
          className="mx-auto shadow-md shadow-black"
        />
      </div>
      <div className="md:flex">
        <div className="md:w-1/2">
          <h2>Ich baue deine Internetseite so, wie du sie brauchst </h2>
          <p>
            Ich verkaufe dir kein “One-Size-Fits-All-”Angebot, sondern erstelle
            Dir eine individuelle Webseite, basierend auf Deinen Bedürfnissen.
            Und dafür mache ich das, was ich als Psychologe am allerbesten kann:
            Zuhören. Verstehen, was du brauchst.
          </p>
          <p>
            Zudem optimiere ich deinen Internetauftritt für Suchmaschinen,
            sodass du gut gefunden wirst.{" "}
          </p>
          <p>
            Vorab erhältst du für alle meine Leistungen ein transparentes
            Angebot ohne versteckte Kosten. Bist du neugierig geworden? Lass uns
            gerne ins Gespräch kommen!
          </p>
        </div>
        <div className="my-8 hidden md:block md:w-1/2 md:flex items-center">
          <Image
            src={stones}
            alt="Stapel Steine"
            width={350}
            height={700}
            className="mx-auto shadow-md shadow-black"
          />
        </div>
      </div>
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
