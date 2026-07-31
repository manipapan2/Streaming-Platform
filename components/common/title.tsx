interface TItleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TItleProps) {
  return <h2 className={`my-4 font-bold ${className}`}>{children}</h2>;
}
