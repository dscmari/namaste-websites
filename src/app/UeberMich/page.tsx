import React from "react";
import Image from "next/image";
import portrait_0 from "/public/images/portraits/portrait_0.webp";
import Link from "next/link";

export default function UeberMich() {
  return (
    <div className="mx-4 lg:mx-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 py-4">
          <h1 className="text-2xl lg:py-4">Über mich</h1>
          <p className="lg:py-2">
            Namaste! - Ich bin Marian Nökel, MSc. Psychologie, 33 Jahre alt und
            arbeite hauptberuflich als Psychologe. Aus diesem Grund kann ich
            mich gut in die Arbeit mit Menschen hineinversetzen und weiß, wie es
            ist, mit Patient:innen und Klient:innen zu arbeiten.
          </p>
          <p className="lg:py-2">
            Seit mehreren Jahren beschäftige ich mich außerdem mit Informatk und
            habe mich schließlich nebenberuflich als Web-Entwickler
            weitergebildet. Nun unterstütze ich Menschen in Gesundheitsberufen
            dabei ihre Onlinepräsenz aufzubauen.
          </p>
          <p className="lg:py-2">
            Ich bin der festen Überzeugung, dass jede Webseite individuell ist
            und dass man als guter Web-Entwickler seinen Kund:innen zuhören
            muss, um zu verstehen, was sie wirklich benötigen. Und wenn ich
            eines gut kann als Psychologe, dann ist es das. Zuhören. Lass uns
            also ins Gespräch kommen und herausfinden, wie Deine optimale
            Webseite aussehen muss.
          </p>
          <p className="lg:py-2">Ich freue mich darauf, dich kennenzulernen!</p>
          <p>
            Bis bald, <br />
            Marian
          </p>
        </div>
        <div className="m-4 lg:mt-8 mx-auto">
          <Image
            src={portrait_0}
            alt="Logo"
            width={400}
            height={200}
            className="shadow-md shadow-black"
          />
        </div>
      </div>
      <div className="p-4">
        <h1>Jetzt unverbindlich anfragen</h1>
        <p className="pb-4">
          Das klingt spannend für dich? Sprich mich gerne an und lass uns ein
          unverbindliches Gespräch führen. Schreibe mir gerne eine Email unter{" "}
          <a
            href="mailto:noekel@namaste-websites.de"
            className="border-b-2 border-namasteGreen"
          >
            noekel@namaste-websites.de
          </a>{" "}
          oder fülle das{" "}
          <Link href="/Kontakt" className="border-b-2 border-namasteGreen">
            Kontakt-Formular
          </Link>{" "}
          aus, sodass ich mich bei dir melden kann.
        </p>
      </div>
    </div>
  );
}
