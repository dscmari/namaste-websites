import Image from "next/image";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Link from "next/link";
import monkey from "../../public/images/monkey.jpg"



export default function Home() {
  return (
    <div className="flex flex-col gap-12 mx-4 lg:mx-16">
      {/* Part 1 */}
      <div className="md:flex md:justify-center md:items-center">
        <div className="p-4">
          <h1>
            Websites für Heilberufe: <br /> Damit Du schnell für deine Kunden
            online bist! Test
          </h1>
          <p className="mb-4">
            Ich erstelle Webseiten für Coaches, Psychotherapeuten, Apotheker,
            Heilpraktiker und weitere Gesundheitsberufe ab 999 Euro pro Website.
          </p>
          <p>Website-Projekt unverbindlich anfragen:</p>
          <p>
            <a href="mailto:noekel@namaste-websites.de" className="underline">
              noekel@namaste-websites.de
            </a>
            oder
            <Link href="/Kontakt" className="underline">
              Kontakt
            </Link>
          </p>
        </div>
        <div className="m-4">
          <Image src={monkey} alt="Logo" width={600} height={600} className="mx-auto" />
        </div>
      </div>
      {/* Part 2 */}
      <div className="md:flex md:justify-around">
        <div className="p-4">
          <h1>Ich bin studierter Psychologe und kenne die Fachgebiete</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            soluta voluptate porro suscipit repellat tenetur laboriosam, sit
            doloribus quisquam omnis? Ex tempore animi earum optio quidem nobis
            ad iure quos?
          </p>
        </div>
        <div className="p-4">
          <h1>Ich erstelle Deine individuelle Website zu fairen Preisen.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            facilis, rerum cupiditate quia beatae quas sed magni ex a, numquam,
            consectetur asperiores animi quis ad nobis nostrum fugiat natus.
            Recusandae?
          </p>
        </div>
      </div>
      {/* Part 3 */}
      <div className="md:flex md:justify-center md:items-center">
        <div className="m-4">
          <Image src={monkey} alt="Logo" width={600} height={600} className="mx-auto" />
        </div>
        <div className="p-4">
          <p className="pb-4">
            Ich arbeite selbst als Psychologe und weiß, wie es ist, Patienten
            und Klienten zu haben. Ich kann mich also perfekt in Deine Welt
            hineinversetzen und Dir eine nutzerfreundliche Website bauen.
          </p>
          <p>Unverbindlich anfragen:</p>
          <p>
            <a href="mailto:noekel@namaste-websites.de" className="underline">
              noekel@namaste-websites.de
            </a>
            oder
            <Link href="/Kontakt" className="underline">
              Kontakt
            </Link>
          </p>
        </div>
      </div>
      {/* Part 4 */}
      {/* Trennbild */}
      <div className="m-4">
        <p>Trennbild</p>
        <Image
          src={monkey}
          alt=""
          width={800}
          height={200}
          className="mx-auto"
        />
      </div>
      {/* Part 5 */}
      <div className="lg:flex lg:justify-around">
        <div className="p-4">
          <h1>
            Warum ich mich auf die Website-Erstellung für Heilberufe wie
            Therapeuten, Ärzte und Ernährungsberater spezialisiert habe?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            minima saepe nesciunt voluptatibus omnis vitae asperiores corporis
            consequuntur quae laborum unde iure corrupti culpa, dolor ratione
            provident minus dolore excepturi?
          </p>
        </div>
        <div className="m-4">
          <Image
            src={monkey}
            alt="Abbildung therapeutischer Arbeit"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
      {/* Part 6 */}
      <div className="flex flex-col items-center">
        <h1 className="text-center">Für diese Berufsgruppe arbeite ich:</h1>
        <div className=" sm:p-4 sm:flex sm:justify-center">
          <ul className="flex flex-col gap-2 mt-4 sm:mx-16 sm:gap-4">
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Heilpraktiker*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Ärzt*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Physiotherapeut*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Psyotherapeut*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Kunsttherapeut*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Osteopath*innen</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 mt-2 sm:mx-16 sm:mt-4 sm:gap-4">
          <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Ernährungsberater*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Psycholog*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Coaches</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Masseur*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Fitnesstrainer*innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Gesundheitshotels</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Part 7 */}
      <div className="md:flex md:justify-around md:items-center">
      <div className="m-4">
          <Image
            src={monkey}
            alt="Abbildung therapeutischer Arbeit"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h1>Das sind Deine Vorteile, wenn Du mit mir zusammenarbeitest</h1>
          <ol className="list-decimal m-4 mb-0 flex flex-col gap-2">
            <li>Ich kenne deine Zielgruppe</li>
            <li>Deine Seite ist SEO-optimiert</li>
            <li>Ich setze das um, was zu Dir passt</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
