import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    className?: string
}

export default function Button({children, className}: ButtonProps) {
    return (
        <button className={`w-30 h-10 bg-primary text-black rounded-md ${className}`}>
            {children}
        </button>
    )
}