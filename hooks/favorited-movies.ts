import MovieProps from "@/types/movie";
import { create } from "zustand";

interface MovieObjects {
  [key: number]: MovieProps;
}

interface props {
  favoritedMovies: MovieObjects;
  toggleMovieFavorite: (movie: MovieProps) => void;
}

export const useFavoritedMovies = create<props>((set) => ({
  favoritedMovies: {},
  toggleMovieFavorite: (newMovie: MovieProps) =>
    set((state) => {
      if (state.favoritedMovies[newMovie.id]) {
        const newFavoritedMovies = { ...state.favoritedMovies };
        delete newFavoritedMovies[newMovie.id];

        return { favoritedMovies: newFavoritedMovies };
      }

      return {
        favoritedMovies: { ...state.favoritedMovies, [newMovie.id]: newMovie },
      };
    }),
}));
