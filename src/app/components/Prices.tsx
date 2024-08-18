import React from "react";

function Prices() {
  //cheap trick: biggest box in flow with lg:h-full
  // and shorter boxes orient to that boxs' height as it defines the containers height
  // so shorter boxes are able to use absolute positioning
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="p-4 text-center mb-4"><span className="border-b-4 border-namasteGreen">Das biete ich dir an</span></h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Paket 1 */}
        <div className="flex flex-col items-center lg:items-around">
          <h2 className="font-semibold w-full text-center">Paket 1</h2>
          <p className="font-semibold mb-4 w-full text-center">
            &quot;Schnell online sein&quot;
          </p>
          <div className="p-4 border-2 border-namasteDarkgreen rounded lg:h-full">
            <p className="price-box-text">
              Du hast eine neue Praxis oder bist dabei, Dich gerade selbständig
              zu machen? Dann ist die Web-Präsenz wichtig, damit Du gefunden
              werden kannst. Das &quot;Schnell-online-sein&quot;-Paket ist
              ideal, wenn Du wenig Budget hast und schnell eine gute Website
              benötigst.
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
                  Wir erstellen die Website innerhalb weniger
                  Werktage (sobald wir Bilder, Logo und Texte von Dir erhalten
                  haben)
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                 Website-Hosting in Deutschland
                </span>
              </li>
              <li className="hidden lg:block flex items-start opacity-0 p-0 m-0">
                <span className="checkmark"></span>
                <span className="ml-2">
                  cheap trick: opacity-0 to stretch boxes
                </span>
              </li>
            </ul>
            <div className="p-4 mt-12 lg:mt-4 mx-auto mb-4 border-2 border-black rounded font-semibold w-2/3 md:w-1/2 lg:min-w-40 lg:max-w-44 text-center">
              <p>999 Euro</p>
            </div>
          </div>
        </div>
        {/* Paket 2 */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold w-full text-center">Paket 2</h2>
          <p className="font-semibold mb-4 w-full text-center">
            &quot;Die digitale Visitenkarte&quot;
          </p>
          <div className="p-4 border-2 border-namasteDarkgreen rounded lg:h-full relative">
            <p className="price-box-text">
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
                  <span className="font-semibold">bis zu drei Unterseiten</span>
                  , Datenschutz und Impressum
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  SEO-Optimierung der Startseite und der 3 Unterseiten
                </span>
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
                  Wir erstellen die Website innerhalb weniger
                  Werktage (sobald wir Bilder, Logo und Texte von Dir erhalten
                  haben)
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                 Website-Hosting in Deutschland
                </span>
              </li>
            </ul>
            <div className="p-4 mt-12 lg:mt-4 mb-4 mx-auto border-2 border-black rounded font-semibold w-2/3 md:w-1/2 lg:min-w-40 lg:max-w-44 text-center lg:absolute lg:left-1/2 lg:bottom-0 lg:transform lg:-translate-x-1/2 lg:mb-8">
              <p>1999 Euro</p>
            </div>
          </div>
        </div>
        {/* Paket 3 */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold w-full text-center">Paket 3</h2>
          <p className="font-semibold mb-4 w-full text-center">
            &quot;Digitaler Spitzenreiter&quot;
          </p>
          <div className="p-4 border-2 border-namasteDarkgreen rounded lg:h-full relative">
            <p className="price-box-text">
              Du willst nicht nur &quot;online&quot; sein, sondern auch digital gut
              gefunden werden und Deinen potentiellen Patienten informativen
              Content bieten? Mit diesem Paket trittst Du in Deiner Branche als
              digitaler Spitzenreiter auf und wirst zu vielen Suchbegriffen auch
              gefunden.
            </p>
            <p className="mt-2">Das Paket beinhaltet:</p>
            <ul className="offer-list">
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Konzeption, Erstellung und Wartung Deiner Website
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                  Startseite,{" "}
                  <span className="font-semibold">bis zu zwölf Unterseiten</span>
                  , Datenschutz und Impressum
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">SEO-Optimierung aller Seiten</span>
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
                  Vier Korrektur-Schleifen - für ein perfektes Ergebnis
                </span>
              </li>
              <li className="flex items-start">
                <span className="checkmark"></span>
                <span className="ml-2">
                 Website-Hosting in Deutschland
                </span>
              </li>
            </ul>
            <div className="p-4 mt-12 lg:mt-4 mb-4 mx-auto border-2 border-black rounded font-semibold w-2/3 md:w-1/2 lg:min-w-40 lg:max-w-44 text-center lg:absolute lg:left-1/2 lg:bottom-0 lg:transform lg:-translate-x-1/2 lg:mb-8">
              <div className="flex flex-col items-center xl:flex-row xl:justify-center">
                <p>5999 Euro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
