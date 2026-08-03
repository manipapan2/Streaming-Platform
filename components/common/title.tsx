interface TItleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TItleProps) {
  return <span className={`mb-4 flex text-2xl font-bold ${className}`}>{children}</span>;
}
