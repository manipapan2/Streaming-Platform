import { House, Laugh, Logs, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserAvatar from "@/public/images/Avatar.png";

export default function Header() {
  return (
    <header className="p-4 flex justify-between absolute top-0 left-0 w-full z-10">
      <nav className="w-fit">
        <ul className="list-none flex ">
          <li>
            <NavLink href="/" text="Home" icon={<House />} />
          </li>
          <li>
            <NavLink
              href="/categorized/movies-and-series"
              text="Categorized"
              icon={<Logs />}
            />
          </li>
          <li>
            <NavLink
              href="/categorized/movies-and-series"
              text="Comedy"
              icon={<Laugh />}
            />
          </li>
        </ul>
      </nav>

      <div>
        <button className="w-10 aspect-square bg-gray-400 rounded-full">
          
          <Image
            alt="user avatar"
            src={UserAvatar.src}
            width={UserAvatar.width}
            height={UserAvatar.height}
            blurDataURL={UserAvatar.blurDataURL}
            className="rounded-full"
          />
        </button>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const NavLink = ({ href, text, icon }: NavLinkProps) => {
  return (
    <a href={href} className="p-2 mx-4 hover:text-primary transition-all flex">
      <i className="mr-2">{icon}</i>
      <span>{text}</span>
    </a>
  );
};
