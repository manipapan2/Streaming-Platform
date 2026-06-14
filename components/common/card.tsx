import { Star } from "lucide-react";

interface CardProps {
  name: string;
  rate: string | number;
  genre: string;
}

export default function Card({ name, rate, genre }: CardProps) {
  return (
    <div className="mx-4 cursor-pointer">
      <div className="aspect-9/14 group rounded-md bg-gray-600 w-40">
        <div className="group-hover:bg-black/70 w-full flex items-end p-2 rounded-md h-full bg-black/0 transition-[50ms]">
          <div className="flex items-center opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-[50ms] ">
            <i className="text-yellow-500">
              <Star fill="#f0b100" size={20} />
            </i>
            <span className="ml-1">{rate}</span>
          </div>
        </div>
      </div>

      <span className="mt-4 flex">{name}</span>
    </div>
  );
}
