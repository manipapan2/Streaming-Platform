"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode } from "react";

export default function SimpleSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla max-w-full overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container max-w-full flex">{children}</div>
      </div>
    </div>
  );
}
