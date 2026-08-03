import { Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageURL: string;
  id: string;
  name: string;
  rate: string | number;
  genre: string[];
  year: string;
}

export default function Card({
  imageURL,
  id,
  name,
  rate,
  genre,
  year,
}: CardProps) {
  return (
    <Link href={`/movies/${id}`} className="mx-2 cursor-pointer">
      <div className="aspect-9/14 group rounded-md bg-gray-600 w-40 relative">
        <Image
          alt={`${name} poster`}
          src={imageURL}
          fill
          className="w-full h-full rounded-md"
        />
        <div className="group-hover:bg-black/70 absolute w-full flex flex-col justify-center p-2 rounded-md h-full bg-black/0 transition-[50ms]">
        <div className="mx-auto mt-auto p-3 bg-accent rounded-full  scale-0 group-hover:scale-100 transition-[50ms]"><Play size={16}/></div>
          <div className="flex mt-auto justify-between w-full opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-[50ms]">
            <div className="flex items-center gap-1 backdrop-blur-sm px-1.5 py-0.5 bg-secondary/70 rounded-full ">
              <i className="text-yellow-500">
                <Star fill="#f0b100" size={17} />
              </i>
              <span className="ml-1 text-[0.9rem]">{rate}</span>
            </div>

            <span className="backdrop-blur-sm bg-secondary/70 text-sm px-1.5 py-0.5 rounded-full">
              📅 {year}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <span className="mt-4 line-clamp-1">{name}</span>
        <span className="opacity-50 text-sm max-w-full line-clamp-1 text-foreground">
          {genre?.map((text, index) => (
            <span key={index} className="group">
              {text}
              <span className="group-last:hidden">, </span>
            </span>
          ))}
        </span>
      </div>
    </Link>
  );
}
