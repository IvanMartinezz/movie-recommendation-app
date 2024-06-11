type Genre_ids = [number, number];

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genre_ids;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: Genre[];
};
