import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageURL: string;
  id: string
  name: string;
  rate: string | number;
  genre: string[];
  year: string;
  country: string;
}

export default function Card({ imageURL, id, name, rate, genre, year }: CardProps) {
  return (
    <Link href={`/movies/${id}`} className="mx-4 cursor-pointer">
      <div className="aspect-9/14 group rounded-md bg-gray-600 w-40 relative">
      <Image alt={`${name} poster`} src={imageURL} layout="fill" className="w-full h-full rounded-md"/>
        <div className="group-hover:bg-black/70 absolute w-full flex items-end p-2 rounded-md h-full bg-black/0 transition-[50ms]">
          <div className="flex items-center opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-[50ms] ">
            <i className="text-yellow-500">
              <Star fill="#f0b100" size={20} />
            </i>
            <span className="ml-1">{rate}</span>
          </div>
        </div>
      </div>

      <span className="mt-4 line-clamp-2">{name}</span>
    </Link>
  );
}
