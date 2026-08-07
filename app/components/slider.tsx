"use client";
import Button from "@/components/common/button";
import Pagination from "@/components/slider/pagination";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useDotButton } from "../../components/slider/pagination";
import Autoplay from "embla-carousel-autoplay";
import HeartButton from "@/components/common/heart-button";
import Link from "next/link";

export default function Slider({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi]: any = useEmblaCarousel(
    { active: true, loop: true },
    [Autoplay()],
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="max-w-full overflow-hidden h-full relative">
      <div ref={emblaRef}>
        <div className="max-w-full flex">{children}</div>
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
  imageURL: string;
  id: string;
}

export const Slide = ({ title, description, imageURL, id }: SlideProps) => {
  return (
    <div className="min-w-full aspect-square lg:aspect-16/6 flex items-center p-6 pb-10">
      <Image alt={`${title} image`} src={imageURL} fill className="absolute z-0 w-full aspect-16/5 object-cover"  />

      <div className="flex flex-col z-10 w-full lg:max-w-1/2">
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
            <Link href={`/movies/${id}`}>
              <Button>Watch now</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <HeartButton className="ml-2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
