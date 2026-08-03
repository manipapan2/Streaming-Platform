import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className, ...restProps } = props;

  return (
    <button
      className={`w-30 h-10 bg-primary text-black rounded-md hover:bg-transparent hover:text-foreground outline-2 outline-primary select-none transition-all ${restProps.disabled && "pointer-events-none! opacity-30!"} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
