import MovieProps from "@/types/movie";
import MoviePage from "./movie-page";

async function getData(movieId: string) {
  const API_ENDPOINT = process.env.API_ENDPOINT;
	let requestURL: string = `${API_ENDPOINT}/api/v1/movies/${movieId}`

  const res = await fetch(requestURL, {
	});

	const data: MovieProps = await res.json();
	return data;
}

export default async function GetMoviePage({ params }: { params: { id: string } }) {
  const { id } = await params
  const movieData = await getData(id)

  return <MoviePage movieData={movieData}/>
}