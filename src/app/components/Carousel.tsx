"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "../css/carousel.css";
import left from "/public/images/icons/arrow-left.svg";
import right from "/public/images/icons/arrow-right.svg";

type TextItem = {
  title: string;
  description: string;
}

type CarouselProps = {
  text: TextItem[];
  profession: string;
};

export default function Carousel({ text, profession }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    console.log("Prev button clicked");
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    console.log("Next button clicked");
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div className = {`embla mt-8 mb-16 lg:mt-16 lg:mb-24 flex flex-col items-center ${profession}`}>
      <div className="embla_viewport text-[#FFFAEC] w-full" ref={emblaRef}>
        <div className="embla__container w-full">
        {text.map((item, index) => (
          <div key={index} className="embla__slide p-4 flex flex-col justify-center items-center ">
            <h2 className="text-center lg:text-3xl pt-4 mb-4 font-serif font-thin">{item.title}</h2>
            <p className="text-center lg:text-xl m-0 font-serif font-thin max-w-screen-sm">{item.description}</p>
          </div>
        ))}
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
