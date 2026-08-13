import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className, ...restProps } = props;

  return (
    <button
      className={cn(
        `h-10 bg-primary p-3 flex justify-center items-center text-black rounded-md hover:bg-transparent hover:text-foreground border-2 border-primary select-none transition-all`,
        className,
        restProps.disabled ? "pointer-events-none! opacity-30" : "",
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
