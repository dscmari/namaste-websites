"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "../css/carousel.css";
import "../css/heilpraktiker.css";
import left from "/public/images/icons/arrow-left.svg";
import right from "/public/images/icons/arrow-right.svg";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mt-8 mb-16 lg:mt-16 lg:mb-24 flex flex-col items-center magicbowls-container">
      <div className="embla_viewport text-[#FFFAEC] w-full" ref={emblaRef}>
        <div className="embla__container w-full">
        <div className="embla__slide p-4 flex flex-col justify-center items-center ">
            <h2 className="text-center mb-4 font-serif font-medium">
              Zeit für das wirklich Wichtige
            </h2>
            <p className="text-center m-0 font-serif max-w-screen-sm">
              Der Aufbau und die Pflege einer professionellen und erfolgreichen
              Webseite benötigen jedoch Zeit sowie Liebe zum Detail. Diese
              beiden Dinge sind extrem kostbar, da Menschen in Heilberufen
              lieber jede freie Minute in die detaillierte Anamnese und
              Behandlung ihrer Patient:innen investieren möchten.
            </p>
          </div>
          <div className="embla__slide p-4 flex flex-col justify-center items-center ">
            <h2 className="text-center pt-4 mb-4 font-serif font-medium">
              Digitale Visitenkarte
            </h2>
            <p className="text-center m-0 font-serif font-thin max-w-screen-sm">
            Mittlerweile ist der Onlineauftritt als virtuelle Visitenkarte
            genauso wichtig geworden wie die persönliche Weiterempfehlung. Denn
            obwohl die meisten Heilpraktiker:innen vorwiegend auf
            Mund-zu-Mund-Propaganda setzen, entgeht ihnen zunehmend eine
            wachsende Zahl an potenziellen Klient:innen, die lieber zuerst das
            Internet um Hilfe fragen.{" "}
            </p>
          </div>
          <div className="embla__slide p-4 flex flex-col justify-center items-center ">
            <h2 className="text-center pt-4 mb-4 font-serif font-medium">
              Mein Angebot für Heilpraktiker:innen
            </h2>
            <p className="text-center m-0 font-serif font-thin max-w-screen-sm">
              Und hier kommt Namaste-Websites ins Spiel. Wenn du deine
              Onlinepräsenz aufbauen möchtest, aber weder Zeit noch Lust hast,
              dich mit einer Toolbox herumzuschlagen, dann bist du bei mir genau
              an der richtigen Adresse! Ich erstelle Dir schnell und
              unkompliziert Deinen Online-Auftritt. Und ich lassen den Stift
              nicht fallen, sobald die Internetseite das Licht der Welt
              erblickt, sondern helfe dir auch dabei, sie auf dem neuesten Stand
              zu halten. So kannst du deine Zeit voll und ganz deinen
              Klient:innen widmen. Den Rest erledige ich!
            </p>
          </div>

          <div className="embla__slide px-4 flex flex-col justify-center items-center">
            <h2 className="text-center mb-4 font-serif font-medium">
              Webseiten-Entwicklung verknüpft mit Erfahrung als Psychologe
            </h2>
            <p className="text-center m-0 font-serif max-w-screen-sm">
              Ich bin Psychologe und weiß, wie es ist, mit Patient:innen und
              Klient:innen zu arbeiten. Deshalb weiß ich auch, dass die
              Nutzerfreundlichkeit einer solchen Webseite im Zentrum stehen
              muss. Um deinen Klient:innen und dir Zeit zu sparen, sollte
              beispielsweise schnell ersichtlich werden, inwiefern oder ob Teile
              deiner Leistungen über die Krankenkasse abgerechnet werden können
              und wie die Behandlung abläuft.
            </p>
          </div>
          <div className="embla__slide px-4 flex flex-col justify-center items-center">
            <h2 className="text-center mb-4 font-serif font-medium">
            Ich baue deine Internetseite so, wie du sie brauchst 
            </h2>
            <p className="text-center m-0 font-serif max-w-screen-sm">
            Ich verkaufe dir kein “One-Size-Fits-All-”Angebot, sondern erstelle
            Dir eine individuelle Webseite, basierend auf Deinen Bedürfnissen.
            Und dafür mache ich das, was ich als Psychologe am allerbesten kann:
            Zuhören. Verstehen, was du brauchst. <br />
            Zudem optimiere ich deinen Internetauftritt für Suchmaschinen,
            sodass du gut gefunden wirst.{" "}
            </p>
          </div>
          <div className="embla__slide px-4 flex flex-col justify-center items-center">
            <h2 className="text-center mb-4 font-serif font-medium">
              Webseiten-Entwicklung verknüpft mit Erfahrung als Psychologe
            </h2>
            <p className="text-center m-0 font-serif max-w-screen-sm">
              Ich bin Psychologe und weiß, wie es ist, mit Patient:innen und
              Klient:innen zu arbeiten. Deshalb weiß ich auch, dass die
              Nutzerfreundlichkeit einer solchen Webseite im Zentrum stehen
              muss. Um deinen Klient:innen und dir Zeit zu sparen, sollte
              beispielsweise schnell ersichtlich werden, inwiefern oder ob Teile
              deiner Leistungen über die Krankenkasse abgerechnet werden können
              und wie die Behandlung abläuft.
            </p>
          </div>
          <div className="embla__slide px-4 flex flex-col justify-center items-center">
            <h2 className="text-center mb-4 font-serif font-medium">
            Im Fokus stehen die Klienten
            </h2>
            <p className="text-center m-0 font-serif max-w-screen-sm">
            Heilpraktiker:innen widmen sich
          intensiv ihren Patientinnen und Patienten, um ein möglichst
          umfassendes, ganzheitliches Bild zu zeichnen. Ihr Ziel ist es, mit naturheilkundlichen
          Verfahren ein ergänzendes oder alternatives Angebot zur Schulmedizin
          zu bieten und mit ihren Ansätzen das Spektrum der Therapievielfalt zu
          vergrößern. Hierfür müssen Heilpraktiker:innen ein
          Vertrauensverhältnis mit ihren Klient:innen schaffen und eng mit den
          erkrankten Menschen zusammenarbeiten.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-8">
        <div>
          <button className="embla__prev px-4" onClick={scrollPrev}>
            <Image src={left} alt="Pfel nach links" className="mx-auto" />
          </button>
          <button className="embla__next px-4" onClick={scrollNext}>
            <Image src={right} alt="Pfeil nach rechts" className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
