import Title from "@/components/common/title";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface LinkTItleProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkTitle({ children, href }: LinkTItleProps) {
  return (
    <div className="grow flex m-4 justify-between">
      <Link href={href}>
          <Title>{children}</Title>
        </Link>
      <div>
        <Link
            href={href}
            className="flex font-light text-primary hover:text-primary-disabled"
          >
            <span>See all</span>
            <i>
              <ChevronRight />
            </i>
          </Link>
      </div>
    </div>
  );
}
