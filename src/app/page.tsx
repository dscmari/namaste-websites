import Image from "next/image";
import Link from "next/link";
import portrait_2 from "../../public/images/portraits/portrait_2.webp";
import computer_6 from "../../public/images/portraits/computer_6.webp";
import path from "../../public/images/path.jpg";

export default function Home() {
  return (
    <div className="flex flex-col mx-4 lg:mx-16 gap-6 lg:mt-6">
      {/* Part 1 */}
      <div className="lg:flex items-center gap-4">
        <div className="p-4 lg:w-2/3">
          <h1 className="text-2xl py-4">
            Webseiten mit Herz und Verstand - für Menschen, die mit Menschen
            arbeiten.
          </h1>
          <p className="mb-4">
            Was haben Psycholog:innen, Therapeut:innen, Heilpraktiker:innen,
            Ernährungsberater:innen, Fitnesstrainer:innen, Physiotherapeut:innen
            und Yogalehrer:innen gemeinsam? Sie alle arbeiten mit Menschen. Und
            genau für solche Menschen erstelle ich Webseiten. Warum? Damit sie
            sich auf das konzentrieren können, was wirklich wichtig ist.
          </p>
          <p className="text-center md:text-left">
            Unverbindlich anfragen unter:
          </p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:noekel@namaste-websites.de"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
               hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              E-Mail
            </a>
            <p className="text-cente">oder</p>
            <Link
              href="/Kontakt"
              className="text-xl block border-2 border-slate-300 shadow-md rounded p-4 lg:px-0 my-4 text-center min-w-52 max-w-72
              hover:border-namasteGreen hover:bg-namasteGreen hover:text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className="m-4 md:flex items-center gap-4">
          <div className="hidden md:block lg:hidden p-4 lg:w-1/2">
            <h1>Nutzerfreundlich für Patient:innen und Klient:innen</h1>
            <p>
              Ich arbeite selbst als Psychologe und weiß, wie es ist, mit
              Patient:innen und Klient:innen zu arbeiten. Deshalb weiß ich auch,
              dass die Nutzerfreundlichkeit einer solchen Webseite im Zentrum
              stehen muss.
            </p>
          </div>
          <Image
            src={portrait_2}
            alt="Logo"
            width={300}
            height={600}
            className="mx-auto shadow-md shadow-black"
          />
        </div>
      </div>
      {/* Part 2 */}
      <div className="lg:flex gap-4">
        <div className="p-4 lg:w-1/2">
          <h1>Mehr Zeit für das wirklich Wichtige haben</h1>
          <p>
            Du möchtest Deine Onlinepräsenz aufbauen, aber du hast weder Zeit
            noch Lust dich mit einer Toolbox herumzuschlagen? Dann bist du bei
            mir genau an der richtigen Adresse! Ich erstelle Dir schnell und
            unkompliziert Deine Webseite. Und ich lasse den Stift nicht fallen,
            sobald die Webseite das Licht der Welt erblickt, sondern helfe dir
            auch dabei, sie auf dem neusten Stand zu halten. So kannst du deine
            Zeit voll und ganz deinen Klient:innen widmen. Den Rest erledige
            ich!
          </p>
        </div>
        <div className="md:hidden lg:block p-4 lg:w-1/2">
          <h1>Nutzerfreundlich für Patient:innen und Klient:innen</h1>
          <p>
            Ich arbeite selbst als Psychologe und weiß, wie es ist, mit
            Patient:innen und Klient:innen zu arbeiten. Deshalb weiß ich auch,
            dass die Nutzerfreundlichkeit einer solchen Webseite im Zentrum
            stehen muss. Um deinen Klient:innen und dir Zeit zu sparen, sollte
            beispielsweise schnell ersichtlich werden, inwiefern deine Leistung über die
            Krankenkasse abgerechnet werden kann.
          </p>
        </div>
      </div>
      {/* Part 3 */}
      {/* Trennbild */}
      <div className="m-4">
        <Image
          src={path}
          alt=""
          width={1000}
          height={100}
          className="mx-auto shadow-md shadow-black"
        />
      </div>
      <div className="lg:flex lg:justify-around">
        <div className="p-4">
          <h1>Ich höre zu und verstehe, was du brauchst</h1>
          <p>
            Ich kann mich in Deine Welt hineinversetzen und weiß, wie
            individuell unterschiedlichste Behandlungsansätze sein können. Und
            genauso individuell sind auch Klient:innen und deren Bedürfnisse.
            Ich verkaufe dir deshalb kein “One-Size-Fits-All-”Angebot, sondern
            erstelle Dir eine individuelle Webseite, basierend auf Deinen
            Bedürfnissen. Und dafür mache ich das, was ich als Psychologe am
            allerbesten kann: Zuhören, um zu verstehen, was du brauchst.
          </p>
        </div>
      </div>
      {/* Part 4 */}
      <div className="py-4 flex flex-col m-4 bg-namasteDarkgreen bg-opacity-40">
        <h1 className="text-center">Für diese Berufsgruppen arbeite ich</h1>
        <div className=" sm:p-4 sm:flex sm:justify-center text-xl mx-4">
          <ul className="flex flex-col gap-2 mt-4 sm:mx-16 sm:gap-4">
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Heilpraktiker:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Ärzt:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Physiotherapeut:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Psychotherapeut:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Kunsttherapeut:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Yogalehrer:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Osteopath:innen</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 mt-2 sm:mx-16 sm:mt-4 sm:gap-4">
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Ernährungsberater:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Psycholog:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Coaches</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Masseur:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Ergotherapeut:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Fitnesstrainer:innen</span>
            </li>
            <li className="flex items-start">
              <span className="checkmark"></span>
              <span className="ml-2">Gesundheitshotels</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Part 5 */}
      <div className="lg:flex gap-4 my-4">
        <div className="p-4 lg:w-1/2">
          <h1>Ich baue deine Seite so, dass du gefunden wirst</h1>
          <p>
            Die SEO-Optimierung von Webseiten ist entscheidend, um in
            Suchmaschinen wie Google besser gefunden zu werden. Eine gut
            optimierte Webseite erscheint höher in den Suchergebnissen, was mehr
            potenzielle Interessent:innen anzieht. Auch das denke ich von Anfang
            an mit!
          </p>
        </div>
        <div className="p-4 lg:w-1/2">
          <h1>Faire Preise und keine Überraschungen</h1>
          <p>
            Für jede Webseite erstelle ich ein individuelles Angebot. Damit
            stelle ich sicher, dass alle Kosten transparent vorliegen und es
            keine Überraschungen gibt.
          </p>
        </div>
      </div>
      {/* Part 6 */}
      <div className="md:flex md:justify-center md:items-center my-4">
        <div className="m-4">
          <Image
            src={computer_6}
            alt="Logo"
            width={600}
            height={600}
            className="mx-auto shadow-md shadow-black"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h1>Das sind Deine Vorteile, wenn Du mit mir zusammenarbeitest</h1>
          <ol className="list-decimal m-4 mb-0 flex flex-col gap-2">
            <li>Ich kenne deine Zielgruppe</li>
            <li>Deine Seite ist SEO-optimiert</li>
            <li>Ich setze das um, was zu Dir passt</li>
            <li>Meine Preise sind fair und von Anfang an transparent</li>
          </ol>
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
