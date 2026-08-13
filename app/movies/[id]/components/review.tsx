import Button from "@/components/common/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useReviews } from "@/hooks/reviews";
import { EllipsisVertical, Trash2, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ReviewProps {
  image?: StaticImageData;
  username: string;
  text: string;
  movieId?: number | string;
  id?: number | string;
}

export default function Review({
  image,
  username,
  text,
  movieId,
  id,
}: ReviewProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          <>
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
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Trash2 /> Remove
                </DropdownMenuItem>
                {/* </DropdownMenuGroup> */}
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle>Remove review</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete your review?
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      onClick={() => setIsDialogOpen(false)}
                      className="w-fit bg-transparent border-gray-100 text-gray-100 hover:text-gray-100"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      removeReview(movieId, id);
                      setIsDialogOpen(false);
                    }}
                    className="bg-red-500 hover:bg-red-500 hover:text-black border-red-500"
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
      {/* <p className="ml-12">{text}</p> */}
      <p>{text}</p>
    </div>
  );
}
