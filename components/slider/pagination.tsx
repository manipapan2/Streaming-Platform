export default function Pagination ({ isActive }: { isActive?: boolean }) {
  return (
    <button
      className={`h-1.5 rounded-full mx-1 ${isActive ? "w-8 bg-primary" : "w-3 bg-gray-200"}`}
    />
  );
};