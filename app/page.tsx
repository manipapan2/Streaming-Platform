import HomePage from "./home-page";

async function getMoviesData() {
  const API_ENDPOINT = process.env.API_ENDPOINT;

  const [ fantasy, comedy, scifi ] = await Promise.all([
    fetch(
      `${API_ENDPOINT}/api/v1/genres/7/movies?page=1`,
    ).then((res) => res.json()),
    fetch(
      `${API_ENDPOINT}/api/v1/genres/9/movies?page=1`,
    ).then((res) => res.json()),
    fetch(
      `${API_ENDPOINT}/api/v1/genres/10/movies?page=1`,
    ).then((res) => res.json())
]);

  const res = {
    fantasy: fantasy.data,
    comedy: comedy.data,
    scifi: scifi.data,
  };

  return res;
}

export default async function GetHomePage() {
  const getData = await getMoviesData();

  return <HomePage data={getData} />;
}
