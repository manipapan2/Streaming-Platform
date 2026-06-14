import { Heart } from "lucide-react";
import React from "react";

type ButtonProps = {
  className?: string;
  isSaved: boolean;
  saveId: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function HeartButton(props: ButtonProps) {
  const { className, saveId, isSaved, ...restProps } = props;

  return (
    <button
      className={`h-10 group flex justify-center items-center aspect-square bg-gray-500 text-black rounded-md ${className}`}
      {...restProps}
    >
      <i className="group-active:scale-75 transition-all">
        <Heart fill={isSaved ? 'red': 'transparent'}/>
      </i>
    </button>
  );
}
