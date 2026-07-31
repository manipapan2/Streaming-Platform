import { User } from "lucide-react";

interface ReviewProps {
  username: string;
  text: string;
}

export default function Review({ username, text }: ReviewProps) {
  return (
    <div className="w-full p-4 gap-4 flex flex-col odd:bg-blue-950 even:bg-blue-800 rounded-md">
      <div className="w-full gap-2 flex items-center">
        <div className="w-10 bg-gray-500 aspect-square rounded-full flex justify-center items-center">
            <User size={25}/>
        </div>
        <span>{username}</span>
      </div>
      <p className="ml-12">{text}</p>
    </div>
  );
}
