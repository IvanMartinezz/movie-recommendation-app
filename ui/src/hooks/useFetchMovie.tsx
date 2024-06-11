import { useState, useEffect } from "react";
import { getMovie, getSimilarMovies } from "@/api/MoviesApi";

const useFetchMovie = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  const fetchSimilarMovies = async (movieId: number) => {
    try {
      const similarMoviesResponse = await getSimilarMovies(movieId);
      setSimilarMovies(similarMoviesResponse.results);
    } catch (err) {
      console.log("Failed to fetch similar movies.");
    }
  };

  const fetchMovie = async () => {
    if (!id) return;
    try {
      setLoading(true);
      const response = await getMovie(id);
      setMovie(response);
      await fetchSimilarMovies(id);
    } catch (err) {
      console.log("Failed to fetch movie details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return { loading, movie, similarMovies };
};

export default useFetchMovie;
