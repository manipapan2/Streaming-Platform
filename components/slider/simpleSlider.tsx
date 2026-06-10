"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

export default function SimpleSlider(children: any) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla max-w-full overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container max-w-full flex">
            {children}
        </div>
      </div>
    </div>
  );
}
