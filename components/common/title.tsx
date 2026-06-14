import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface TItleProps {
  text: string;
  href?: string;
}

export default function Title({ text, href }: TItleProps) {
  return (
    <div className="grow flex m-4 font-bold justify-between">
      {href ? ( 
        <Link href={href}>
          <h3>{text}</h3>
        </Link>
      ) : (
        <h3>{text}</h3>
      )}
      <div>
        {href && (
          <Link
            href={href}
            className="flex font-light text-primary hover:text-primary-disabled"
          >
            <span>See all</span>
            <i>
              <ChevronRight />
            </i>
          </Link>
        )}
      </div>
    </div>
  );
}
