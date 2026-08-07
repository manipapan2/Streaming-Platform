import { create } from "zustand";

interface ReviewProps {
  [key: string]: {
    [key: string]: string;
  };
}

interface props {
  reviews: ReviewProps;
  createReview: (movieId: number | string, text: string) => void;
  removeReview: (movieId: number | string, id: number | string) => void;
}

let primaryKey: number = 0;

export const useReviews = create<props>((set) => ({
  reviews: {},
  createReview: (movieId: number | string, text: string) =>
    set((state) => {
      primaryKey++;
      let clonedReviews = { ...state.reviews };

      if(!state.reviews[movieId]) {
        clonedReviews = {...state.reviews, [`${movieId}`]: {}}
      }

      clonedReviews[movieId][primaryKey] = text

      return {
        reviews: clonedReviews,
      };
    }),
  removeReview: (movieId: number | string, id: number | string) =>
    set((state) => {
      const clonedReviews = { ...state.reviews };
      delete clonedReviews[movieId][id];

      return { reviews: clonedReviews };
    }),
}));
