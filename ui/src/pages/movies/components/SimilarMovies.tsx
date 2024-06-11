import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { Text } from "@/components/Text";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const SimilarMovies = ({ movies }: Props) => {
  const router = useRouter();

  const chooseMovie = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <section>
      <Text textType="subtitle">Similar movies</Text>
      <Box
        display="flex"
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
        flexDirection={{ xs: "column", sm: "row" }}
        width={{ xs: "100%", sm: "calc(298px * 3)" }}
        height={{ xs: "180px", sm: "240px" }}
        gap="20px"
        justifyContent={{ xs: "center", sm: "flex-start" }}
        sx={{
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={() => {
                chooseMovie(movie);
              }}
            />
          ))
        ) : (
          <Text textType="text">No movies found...</Text>
        )}
      </Box>
    </section>
  );
};

export default SimilarMovies;
