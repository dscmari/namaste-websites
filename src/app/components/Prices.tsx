import React from "react";

function Prices() {
  //cheap trick: biggest box in flow with lg:h-full
  // and shorter boxes orient to that boxs' height as it defines the containers height
  // so shorter boxes are able to use absolute positioning
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="p-4 text-center text-lg">Angebote</h1>
      <div className="flex flex-col lg:flex-row lg:mx-16">
        {/* Paket 1 */}
        <div className="flex flex-col items-center my-4 lg:w-1/3 lg:items-around">
          <h2 className="font-semibold">Paket 1</h2>
          <p className="font-semibold mb-4">&quot;Schnell online sein&quot;</p>
          <div className="mx-8 lg:mx-4  p-4 border-2 border-cadedBlue rounded lg:h-full">
            <p>
              Du hast eine neue Praxis oder bist dabei, Dich gerade selbständig
              zu machen? Dann ist die Web-Präsenz wichtig, damit Du gefunden
              werden kannst. Das &quot;Schnell-online-sein&quot;-Paket ist ideal, wenn Du
              wenig Budget hast und schnell eine gute Website benötigst.
            </p>
            <p className="mt-2">Das Paket beinhaltet:</p>
            <ul className="offer-list">
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Konzeption und Erstellung Deiner Website
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Startseite, Datenschutz und Impressum
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">SEO-Optimierung der Startseite</span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Vorstellung des Layouts vor der Entwicklung
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">Eine Korrektur-Schleife</span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  In der Regel erstellen wir die Website innerhalb weniger
                  Werktage (sobald wir Bilder, Logo und Texte von Dir erhalten
                  haben)
                </span>
              </li>
              <li className="hidden lg:block flex items-start opacity-0 p-0 m-0">
                <span className="checkmark"></span>
                <span className="ml-2">
                  cheap trick: opacity-0 to stretch boxes
                </span>
              </li>
            </ul>
            <div className="p-4 m-4 border-2 border-black rounded font-semibold w-1/2 mx-auto text-center">
              <p>999 Euro</p>
            </div>
          </div>
        </div>
        {/* Paket 2 */}
        <div className="flex flex-col items-center my-4 lg:w-1/3">
          <h2 className="font-semibold">Paket 2</h2>
          <p className="font-semibold mb-4">&quot;Das kleine Paket&quot;</p>
          <div className="mx-8 lg:mx-4 p-4 border-2 border-cadedBlue rounded lg:h-full relative">
            <p>
              Du möchtest neben der Startseite auch ein paar Unterseiten haben,
              um Deine Leistungen und Deine Person vorzustellen? Dann eignet
              sich &quot;Das kleine Paket&quot; ideal für Dich.
            </p>
            <p className="mt-2">Das Paket beinhaltet:</p>
            <ul className="offer-list">
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Konzeption und Erstellung Deiner Website
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Startseite,{" "}
                  <span className="font-semibold">bis zu fünf Unterseiten</span>
                  , Datenschutz und Impressum
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">SEO-Optimierung der Startseite</span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Vorstellung des Layouts vor der Entwicklung
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Zwei Korrektur-Schleifen - damit alles passt
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  In der Regel erstellen wir die Website innerhalb weniger
                  Werktage (sobald wir Bilder, Logo und Texte von Dir erhalten
                  haben)
                </span>
              </li>
            </ul>
            <div className="p-4 m-4 border-2 border-black rounded font-semibold w-2/3 mx-auto text-center lg:absolute lg:left-1/2 lg:bottom-0 lg:transform lg:-translate-x-1/2 lg:mb-8">
              <div className="flex flex-col items-center xl:flex-row xl:justify-center">
                <p>1000 Euro -</p>
                <p>
                  &nbsp;2999 Euro <span className="opacity-0"> -</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Paket 3 */}
        <div className="flex flex-col items-center my-4 lg:w-1/3">
          <h2 className="font-semibold">Paket 2</h2>
          <p className="font-semibold mb-4">&quot;Die klassische Website&quot;</p>
          <div className="mx-8 lg:mx-4 p-4 border-2 border-cadedBlue rounded lg:h-full relative">
            <p className="text-red-500">
              TODO Janosch überlegt sich Text für Paket 3
              <br />
              Entweder Paket 2 oder Paket 3 Calendly Schnittstelle
              
            </p>
            <p className="mt-2">Das Paket beinhaltet:</p>
            <ul className="offer-list">
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Konzeption und Erstellung Deiner Website
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Startseite,{" "}
                  <span className="font-semibold">bis zu zehn Unterseiten</span>
                  , Datenschutz und Impressum
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">SEO-Optimierung der Startseite</span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Vorstellung des Layouts vor der Entwicklung
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Drei Korrektur-Schleifen - damit alles passt
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  In der Regel erstellen wir die Website innerhalb weniger
                  Werktage (sobald wir Bilder, Logo und Texte von Dir erhalten
                  haben)
                </span>
              </li>
            </ul>
            <div className="p-4 m-4 border-2 border-black rounded font-semibold w-2/3 mx-auto text-center lg:absolute lg:left-1/2 lg:bottom-0 lg:transform lg:-translate-x-1/2 lg:mb-8">
              <div className="flex flex-col items-center xl:flex-row xl:justify-center">
                <p>3000 Euro -</p>
                <p>
                  &nbsp;5999 Euro <span className="opacity-0"> -</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
