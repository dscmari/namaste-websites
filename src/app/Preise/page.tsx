import React from "react";
import Prices from "../components/Prices";
import Link from "next/link";

export default function Preise() {
  return (
    <div className="m-8 lg:mx-16">
      <div className="pb-4 lg:pb-8">
        <h1>Ich erstelle Deine individuelle Website zu fairen Preisen.</h1>
        <p>
          Die Kosten für den Aufbau deiner Webseite hängen vom Umfang und deinen
          individuellen Anforderungen ab. Hinzu kommen Themen, wie die
          Instandhaltung der Webseite oder wie häufig Änderungen und Updates
          vorgenommen werden sollen. Mir ist es wichtig, alle eventuellen Kosten
          transparent aufzuschlüsseln, sodass du Planungssicherheit hast und dir
          überlegen kannst, was für deine Bedürfnisse am besten passt.
        </p>
      </div>
      <Prices />
      <div className="sm:mx-4">
        <p className="pt-2 text-sm">
          <span>&#42;</span> Bei den genannten Preisen handelt es sich um die
          Kosten für die Entwicklung exklusive Fremdkosten wie Hosting- und
          Domainkosten. Diese liegen in der Regel zusammen bei unter 100 Euro im
          ersten Jahr.
        </p>
        <p className="py-4">
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
