import React from "react";
import Image from "next/image";
import portrait_0 from "/public/images/portraits/portrait_0.webp";


export default function UeberMich() {
  return (
    <div className="flex flex-col lg:flex-row mx-4 lg:items-center gap-4 xl:w-3/4 xl:mx-auto">
      <div className="m-8 lg:w-1/2 lg:ml-16 ">
        <h1>Über mich</h1>
        <p className="py-2">
          Namaste! - Ich bin Marian Nökel, MSc. Psychologie, 33 Jahre alt und arbeite
          hauptberuflich als Psychologe. Aus diesem Grund kann ich mich gut in
          die Arbeit mit Menschen hineinversetzen und weiß, wie es ist, mit
          Patient:innen und Klient:innen zu arbeiten.
        </p>
        <p className="py-2">
          Seit mehreren Jahren beschäftige ich mich außerdem mit Informatk und
          habe mich schließlich nebenberuflich als Web-Entwickler
          weitergebildet. Nun unterstütze ich Menschen in Gesundheitsberufen
          dabei ihre Onlinepräsenz aufzubauen.
        </p>
        <p className="py-2">
          Ich bin der festen Überzeugung, dass jede Webseite individuell ist und
          dass man als guter Web-Entwickler seinen Kund:innen zuhören muss, um
          zu verstehen, was sie wirklich benötigen. Und wenn ich eines gut kann
          als Psychologe, dann ist es das. Zuhören. Lass uns also ins Gespräch
          kommen und herausfinden, wie Deine optimale Webseite aussehen muss.
        </p>
        <p className="py-2">Ich freue mich darauf, dich kennenzulernen!</p>
        <p>
          Bis bald, <br />
          Marian
        </p>
      </div>
      <div className="m-4 lg:mr-16">
        <Image
          src={portrait_0}
          alt="Logo"
          width={400}
          height={200}
          className="mx-auto shadow-md shadow-black"
        />
      </div>
    </div>
  );
}
