"use client";
import Button from "@/components/common/button";
import Pagination from "@/components/slider/pagination";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useDotButton } from "../../components/slider/pagination";
import Autoplay from "embla-carousel-autoplay";
import HeartButton from "@/components/common/heart-button";

export default function Slider() {
  const [emblaRef, emblaApi]: any = useEmblaCarousel(
    { active: true, loop: true },
    [Autoplay()],
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla max-w-full overflow-hidden h-full relative">
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

      <div className="flex justify-between w-fit m-auto absolute left-1/2 bottom-2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          {scrollSnaps.map((number: number, index: number) => (
            <Pagination
              key={`main pagination ${index}`}
              onClick={() => onDotButtonClick(index)}
              isActive={index == emblaApi?.selectedScrollSnap()}
            />
          ))}
        </motion.div>
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
    <div className="embla__slide min-w-full aspect-video lg:aspect-16/5 flex items-center p-6 pb-10">
      {/* <Image className="absolute w-full aspect-16/5" src={"#"} /> */}

      <div className="flex flex-col w-full lg:max-w-1/2">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          className="w-fit"
          // viewport={{ amount: 0 }}
        >
          <span className="text-2xl font-bold">{title}</span>
        </motion.div>

        <motion.div
          initial={{ translateX: -10, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
        >
          <p className="mt-2 hidden lg:block">{description}</p>
        </motion.div>

        <div className="flex mt-5">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Button>Watch now</Button>
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <HeartButton className="ml-2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
