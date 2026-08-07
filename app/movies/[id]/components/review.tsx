import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useReviews } from "@/hooks/reviews";
import { EllipsisVertical, Trash2, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ReviewProps {
  image?: StaticImageData;
  username: string;
  text: string;
  movieId?: string;
  id?: string;
}

export default function Review({
  image,
  username,
  text,
  movieId,
  id,
}: ReviewProps) {
  const removeReview = useReviews((state) => state.removeReview);

  return (
    <div className="w-full p-4 gap-4 flex flex-col border-b border-black last:border-b-0">
      <div className="flex justify-between items-center">
        <div className="w-full gap-2 flex items-center">
          <div className="w-10 bg-gray-500 aspect-square rounded-full flex justify-center items-center">
            {image ? (
              <Image
                alt="user image"
                src={image.src}
                width={image.width}
                height={image.height}
                className="rounded-full"
              />
            ) : (
              <User size={25} />
            )}
          </div>
          <span>{username}</span>
        </div>

        {movieId && id && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <i>
                <EllipsisVertical />
              </i>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuGroup> */}
              <DropdownMenuItem
                className="text-red-500"
                onClick={() => removeReview(movieId, id)}
              >
                <Trash2 /> Remove
              </DropdownMenuItem>
              {/* </DropdownMenuGroup> */}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {/* <p className="ml-12">{text}</p> */}
      <p>{text}</p>
    </div>
  );
}
