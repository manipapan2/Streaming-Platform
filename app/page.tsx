
import HomePage from "./home-page";

async function getMoviesData() {
  const API_ENDPOINT = process.env.API_ENDPOINT
  const getFantasyMovies = await fetch(`${API_ENDPOINT}/api/v1/genres/7/movies?page=1`)
  const getComedyMovies = await fetch(`${API_ENDPOINT}/api/v1/genres/9/movies?page=1`)
  const getScifiMovies = await fetch(`${API_ENDPOINT}/api/v1/genres/10/movies?page=1`)

  const fantasyMoviesJsonified = await getFantasyMovies.json()
  const comedyMoviesJsonified = await getComedyMovies.json()
  const scifiMoviesJsonified = await getScifiMovies.json()

  

  const res = {fantasy: fantasyMoviesJsonified.data, comedy: comedyMoviesJsonified.data, scifi:scifiMoviesJsonified.data}
  

  return res
}

export default async function GetHomePage() {
  const getData = await getMoviesData()


  return <HomePage data={getData}/>
}

