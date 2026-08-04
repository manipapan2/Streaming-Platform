import { Heart } from "lucide-react";
import { useFavoritedMovies } from "@/hooks/favorited-movies";
import MovieProps from "@/types/movie";

interface props {
  movie: MovieProps;
  className?: string;
}

export default function AddFavorite({ movie, className }: props) {
  const favoritedMovies = useFavoritedMovies((state) => state.favoritedMovies);
  const toggleMovieFavorite = useFavoritedMovies(
    (state) => state.toggleMovieFavorite,
  );

  return (
    <button
      onClick={() => {
        toggleMovieFavorite(movie);
      }}
      className={`bg-gray-600 group flex p-1 h-10 w-30 justify-center items-center rounded-md ${className}`}
    >
      <i className="group-active:scale-75 mr-2 transition-all flex justify-center items-center">
        <Heart
          fill={favoritedMovies[movie.id] ? "red" : "transparent"}
          className="text-black"
        />
      </i>
      Add to favorites
    </button>
  );
}
