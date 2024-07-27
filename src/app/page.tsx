import Image from "next/image";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <h1>
            Websites für Heilberufe: <br /> Damit Du schnell für deine Kunden
            online bist
          </h1>
          <p>
            Ich erstelle Webseiten für Coaches, Psychotherapeuten, Apotheker,
            Heilpraktiker und weitere Gesundheitsberufe ab 999 Euro pro Website.
          </p>
          <p>Website-Projekt unverbindlich anfragen:</p>
          <p>noekel@namaste-websites.de oder <Link href="/Kontakt" className="underline">Kontakt</Link></p>
        </div>
        
      </div>
    </div>
  );
}
