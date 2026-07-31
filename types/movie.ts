export default interface MovieProps {
  id: number;
  title: string;
  poster: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  awards: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  genres: string[];
  images: string[];
}

export interface MoviesSearchedByGenres {
  id: string;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: string[];
  images: string[];
}
