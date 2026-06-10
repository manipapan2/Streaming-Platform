"use client";
import Button from "@/components/common/button";
import Pagination from "@/components/slider/pagination";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "motion/react";
import EmblaCarousel from "embla-carousel";
import { useEffect, useRef } from "react";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ active: true, loop: true });
  // const emblaApi = EmblaCarousel(emblaRef, { loop: true })

  useEffect(() => {
    console.log(emblaApi?.selectedScrollSnap())
  }, [])
  

  return (
    <div className="embla max-w-full overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container max-w-full flex">
          <Slide
            title="The movie name"
            description="
          Lorem ipsum dolor ipit maxime inventore dolorum, architecto quod amet, voluptas eveniet, officiis perspiciatis
          "
          />
          <Slide
            title="The movie name2"
            description="
          Lorem ipsum dolor ipit maxime inventore dolorum, architecto quod amet, voluptas eveniet, officiis perspiciatis
          "
          />
          <Slide
            title="The movie name3"
            description="
          Lorem ipsum dolor ipit maxime inventore dolorum, architecto quod amet, voluptas eveniet, officiis perspiciatis
          "
          />
        </div>
      </div>

      <div className="flex justify-between w-fit m-auto absolute left-1/2 bottom-6 -translate-x-1/2">
        {[1, 2, 3].map((number: number, index: number) => (
          <Pagination isActive={index == emblaApi?.selectedScrollSnap()} />
        ))}
      </div>
    </div>
  );
}

interface SlideProps {
  title: string;
  description: string;
  id: string;
}

const Slide = ({ title, description, id }: SlideProps) => {
  // Optimize: remove embla__slide className
  return (
    <div className="embla__slide min-w-full aspect-16/5 flex items-center p-6">
      {/* <Image className="absolute w-full aspect-16/5" src={"#"} /> */}

      {/* Here */}
      <div className="flex flex-col max-w-1/2">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          className="w-fit"
          // viewport={{ amount: 0 }}
        >
          <span className="text-2xl font-bold">{title}</span>
        </motion.div>
        <p className="mt-2">{description}</p>
        <div className="flex mt-5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
            }}
            // className="w-fit"
            // viewport={{ amount: 0 }}
          >
            <Button>Watch now</Button>
          </motion.div>
          <button>heart</button>
        </div>
      </div>
    </div>
  );
};
