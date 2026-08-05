import Image from "next/image";
import Footer from "./components/footer";
import Card from "@/components/common/card";
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";
import RecentWatchCard from "./components/recent-watch-card";
import Header from "./components/header";
import Slider, { Slide } from "./components/slider";
import LinkTitle from "./components/link-title";
import { MoviesSearchedByGenres } from "@/types/movie";

export default function HomePage({
  data,
}: {
  data: { [key: string]: MoviesSearchedByGenres };
}) {
  return (
    <div className="bg-background">
      <div className="w-full relative">
        <Header />
        {data.sliderMovies && (
          <Slider>
            {Object.keys(data.sliderMovies).map((key) => (
              <Slide
              id={data.sliderMovies[key].id}
                key={`${data.sliderMovies[key].title} slider card`}
                title={data.sliderMovies[key].title}
                imageURL={data.sliderMovies[key].images[0]}
                description="
          Lorem ipsum dolor ipit maxime inventore dolorum, architecto quod amet, voluptas eveniet, officiis perspiciatis
          "
              />
            ))}
          </Slider>
        )}
      </div>
      <main className="mt-5">
        <Title>Recently watched</Title>
        <SimpleSlider>
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
        </SimpleSlider>
        <div className="gap-4 flex flex-col mt-5">
          {data?.scifi && (
            <div>
              <LinkTitle href="/movies?genre=scifi">Sci-FI</LinkTitle>
              <SimpleSlider>
                {Object.keys(data.scifi).map((key) => (
                  <Card
                    key={`${data.scifi[key].title} scifi card`}
                    imageURL={data.scifi[key].poster}
                    id={data.scifi[key].id}
                    name={data.scifi[key].title}
                    rate={data.scifi[key].imdb_rating}
                    genre={data.scifi[key].genres}
                    year={data.scifi[key].year}
                  />
                ))}
              </SimpleSlider>
            </div>
          )}

          {data?.comedy && (
            <div>
              <LinkTitle href="/movies?genre=comedy">Comedy</LinkTitle>
              <SimpleSlider>
                {Object.keys(data.comedy).map((key) => (
                  <Card
                    key={`${data.comedy[key].title} comedy card`}
                    imageURL={data.comedy[key].poster}
                    id={data.comedy[key].id}
                    name={data.comedy[key].title}
                    rate={data.comedy[key].imdb_rating}
                    genre={data.comedy[key].genres}
                    year={data.comedy[key].year}
                  />
                ))}
              </SimpleSlider>
            </div>
          )}

          {data?.fantasy && (
            <div>
              <LinkTitle href="/movies?genre=fantasy">Fantasy</LinkTitle>
              <SimpleSlider>
                {Object.keys(data.fantasy).map((key) => (
                  <Card
                    key={`${data.fantasy[key].title} fantasy card`}
                    imageURL={data.fantasy[key].poster}
                    id={data.fantasy[key].id}
                    name={data.fantasy[key].title}
                    rate={data.fantasy[key].imdb_rating}
                    genre={data.fantasy[key].genres}
                    year={data.fantasy[key].year}
                  />
                ))}
              </SimpleSlider>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
