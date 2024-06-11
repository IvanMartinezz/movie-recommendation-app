"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { RootState } from "@/store/store";
import { Text } from "@/components/Text";
import useMovies from "@/hooks/useFetchMovies";
import MovieCard from "./components/MovieCard";

export default function Movies() {
  const filteredMovies = useSelector(
    (state: RootState) => state.search.filteredMovies
  );

  const router = useRouter();
  useMovies();

  const handleMovieClick = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="1.5rem"
      maxWidth="100%"
      height={{ xs: "100%", md: "calc(260px * 2)" }}
      overflow="auto"
      padding="0.5rem"
    >
      {filteredMovies.length ? (
        filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          />
        ))
      ) : (
        <Text textType="text">No movies found...</Text>
      )}
    </Box>
  );
}
