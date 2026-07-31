'use client'
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";
import Cast from "./components/cast";
import Review from "./components/review";
import Button from "@/components/common/button";
import MovieProps from "@/types/movie";

export default function MoviePage({ movieData }: { movieData: MovieProps }) {
  return (
    <div className="">
      <Button>Watch Now</Button>
      <Title>Cast</Title>
      <SimpleSlider>
        
        <Cast imageUrl="" position="Director" name={movieData.director}/>
        {movieData.actors.split(', ').map((name: string) => (
        <Cast key={name} imageUrl="" position="Actor" name={name}/>
        ))}
      </SimpleSlider>

      <div className="m-5 bg-secondary p-4 rounded-md">
        <Title>About</Title>
      <p className="text-lg font-medium">
        {movieData.plot}
      </p>
      </div>
      <div className="m-5 flex flex-col gap-5">
        <Title>Reviews</Title>
        <div>
          <Button disabled>Submit Review</Button>
        </div>
      <div className="bg-secondary overflow-y-auto flex flex-col gap-5 rounded-sm p-2">
        <Review username="alex something" text="asdo;k sad asd as d asdasda sdaokdas asdasdasdas adsdasd asdas d sad asdasdasd asdasd."/>
        <Review username="alex something" text="asdo;k sad asd as d asdasda sdaokdas asdasdasdas adsdasd asdas d sad asdasdasd asdasd."/>
        <Review username="alex something" text="asdo;k sad asd as d asdasda sdaokdas asdasdasdas adsdasd asdas d sad asdasdasd asdasd."/>
        <Review username="alex something" text="asdo;k sad asd as d asdasda sdaokdas asdasdasdas adsdasd asdas d sad asdasdasd asdasd."/>
      </div>
      </div>
    </div>
  );
}
