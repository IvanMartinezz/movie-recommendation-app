"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { getMovies } from "@/utils/functions";
import MovieCard from "./components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  const fetchMovies = async () => {
    const moviesData = await getMovies();
    setMovies(moviesData);
  };

  const handleMovieClick = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="1.5rem"
      maxWidth="100%"
    >
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
        />
      ))}
    </Box>
  );
}
