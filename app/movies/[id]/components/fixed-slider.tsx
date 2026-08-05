"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface props {
  images: string[] | string;
  isHidden: boolean;
  selectedSlideIndex: number;
  onClose: () => void;
}

const options: EmblaOptionsType = {
  align: "center",
  containScroll: false,
  loop: true,
};

export default function FixedSlider({
  images,
  isHidden,
  selectedSlideIndex,
  onClose,
}: props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  useEffect(() => {
    emblaApi?.scrollTo(selectedSlideIndex, true);
  }, [selectedSlideIndex]);

  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={`w-full z-10 h-full top-0 left-0 flex items-center justify-center backdrop-blur-xl overflow-hidden fixed transition-all ${isHidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <SlideButton onClick={e => {e.stopPropagation(); emblaApi?.scrollPrev()}} />
      <SlideButton onClick={e => {e.stopPropagation(); emblaApi?.scrollNext()}} isRight />
      <div
        className={`w-full ${isHidden ? "pointer-events-none" : ""}`}
        ref={emblaRef}
      >
        <div
          className={`max-w-full flex ${isHidden ? "pointer-events-none" : ""}`}
        >
          {Array.isArray(images) &&
            images.map((url) => (
              <div
              onClick={e => e.stopPropagation()}
                className={`min-w-5/6 lg:min-w-2/3 aspect-video rounded-md ${isHidden ? "pointer-events-none!" : ""}`}
              >
                <Image
                  alt=""
                  src={url}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

interface SliderButtonProps {
  isRight?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SlideButton = ({ isRight, onClick }: SliderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-square z-20 absolute group rounded-full p-2 bg-secondary border-2 hover:bg-primary hover:text-primary-foreground transition-all ${isRight ? "right-3 lg:right-20 rotate-180" : "left-3 lg:left-20"}`}
    >
      <i>
        <ChevronLeft className="group-active:scale-0 transition-all" />
      </i>
    </button>
  );
};
