import React from "react";
import Contact from "../components/Contact";
export default function Kontakt() {
  return (
    <div className="mx-4 my-8 lg:my-16">
      <div className="lg:p-4 max-w-3xl md:mx-auto">
        <h1 className="md:text-3xl md:font-thin mb-4"> Ich freue mich darauf, von Dir zu hören!</h1>
        <p className="md:text-xl">
          Egal ob du Fragen hast, eine Beratung wünschst oder ein individuelles
          Angebot anfordern möchtst – fülle einfach das Formular aus und ich
          melde mich schnellstmöglich bei Dir.
        </p>
      </div>
      <Contact />
    </div>
  );
}
