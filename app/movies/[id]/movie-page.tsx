"use client";
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";
import Cast from "./components/cast";
import Review from "./components/review";
import Button from "@/components/common/button";
import MovieProps from "@/types/movie";
import Image from "next/image";
import { Play } from "lucide-react";
import AddFavorite from "@/components/common/favorite-button";
import FixedSlider from "./components/fixed-slider";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useReviews } from "@/hooks/reviews";
import myImage from "@/public/images/Avatar.png";
import { movieDurationConvertor } from "@/utils/movie-duration-convertor";

const reviewFromSchema = z.object({
  review: z
    .string()
    .min(3, "Review should be at least 3 chareters")
    .max(200, "Review should not be more than 200 chareters"),
});

export default function MoviePage({ movieData }: { movieData: MovieProps }) {
  const [isFixedSliderHidden, setIsFixedSliderHidden] = useState(true);
  const [selectedSliderIndex, setSelectedSliderIndex] = useState(0);
  const reviews = useReviews((state) => state.reviews);
  const createReview = useReviews((state) => state.createReview);

  const form = useForm<z.infer<typeof reviewFromSchema>>({
    resolver: zodResolver(reviewFromSchema),
    defaultValues: {
      review: "",
    },
    mode: "onChange",
  });

  return (
    <div className="flex flex-col gap-7">
      <div className="lg:flex lg:justify-around lg:p-4">
        <div className="relative w-full -z-10 aspect-square flex lg:aspect-9/14 lg:w-60 lg:min-w-60 lg:rounded-md">
        <Image
          alt={`${movieData.title} image`}
          src={movieData.poster}
          fill
          className="object-cover object-top rounded-md"
        />
      </div>
      <div className="-mt-40 p-3 bg-linear-0 from-background from-20% to-transparent lg:mt-0 lg:w-full lg:ml-10 lg:flex lg:flex-col lg:justify-end">
        <h1 className="mb-2 text-2xl">{movieData.title}</h1>

        <div className="mb-3">
          <span className="text-lg">
            ⭐ {movieData.imdb_rating} | {movieData.rated} | ⏱️{" "}
            {movieDurationConvertor(
              parseInt(movieData.runtime.split(" min")[0]),
            )}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* <Tag>⭐ 2.3</Tag>
          <Tag><span className="text-gray-400">PG </span>{movieData.rated}</Tag> */}
          {movieData.genres.map((text) => (
            <Tag key={text}>{text}</Tag>
          ))}
        </div>

        <div className="w-full flex gap-4 z-10 mt-5">
          <Button className="w-full">
            <i className="mr-2">
              <Play />
            </i>
            Watch Now
          </Button>
          {/* <Button className="w-full">Favorite</Button> */}
          <AddFavorite className="w-full" movie={movieData} />
        </div>
      </div>
      </div>

      <div className="p-4">
        <Title>Plot</Title>
        <p>{movieData.plot}</p>
      </div>

      <div>
        <Title className="ml-4">Cast</Title>
        <SimpleSlider>
          <Cast imageUrl="" position="Director" name={movieData.director} />
          {movieData.actors.split(", ").map((name: string) => (
            <Cast key={name} imageUrl="" position="Actor" name={name} />
          ))}
        </SimpleSlider>
      </div>

      {movieData.images.length > 0 && (
        <>
          <div>
            <Title className="ml-4">Pictures</Title>
            <SimpleSlider>
              {movieData.images.map((url: string, index: number) => (
                <div
                  key={`image slider ${url}`}
                  onClick={() => {
                    setSelectedSliderIndex(index);
                    setIsFixedSliderHidden(false);
                  }}
                  className="aspect-video min-w-2/3 lg:min-w-sm relative m-3 cursor-pointer"
                >
                  <Image
                    alt=""
                    src={url}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </SimpleSlider>
          </div>

          <FixedSlider
            selectedSlideIndex={selectedSliderIndex}
            isHidden={isFixedSliderHidden}
            onClose={() => setIsFixedSliderHidden(true)}
            images={movieData.images}
          />
        </>
      )}

      <div className="m-2 flex flex-col">
        <Title className="ml-2">Reviews</Title>
        <div className="gap-5 flex flex-col">
          <Controller
            name="review"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <Field data-invalid={fieldState.invalid}>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Type your opinion"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
                <Button
                  {...field}
                  onClick={() => {
                    createReview(movieData.id, form.getValues("review"));
                    form.reset();
                  }}
                  className="w-full"
                  disabled={!form.formState.isValid}
                >
                  Submit Review
                </Button>
              </>
            )}
          />
        </div>
        <div className="bg-secondary mt-5 overflow-y-auto flex flex-col gap-5 rounded-sm p-2">
          {Object.hasOwn(reviews, movieData.id) &&
            Object.keys(reviews[movieData.id]).length > 0 &&
            Object.keys(reviews[movieData.id])
              .reverse()
              .map((id: string) => (
                <Review
                  key={`review ${id}`}
                  image={myImage}
                  username="manipapan2"
                  text={reviews[movieData.id][id]}
                  movieId={movieData.id}
                  id={id}
                />
              ))}
          <Review username="Alex" text="This is peak!" />
          <Review
            username="Jimmy"
            text="I guess I just wasted my time one this"
          />
          <Review username="William" text="I watched it over and over" />
        </div>
      </div>
    </div>
  );
}

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="backdrop-blur-2xl text-lg border-secondary border px-2 py-1 rounded-full  w-fit">
      {children}
    </span>
  );
};
