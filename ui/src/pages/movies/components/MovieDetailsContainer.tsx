import React from "react";
import { Box } from "@mui/material";
import { Text } from "@/components/Text";
import { getYearFromDate, truncateDecimals } from "@/utils/functions";
import SimilarMovies from "./SimilarMovies";

interface Props {
  movie: Movie;
  similarMovies: Movie[];
}

const MovieDetailsContainer = ({ movie, similarMovies }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ xs: "column", sm: "row" }}
      height={{ xs: "auto", sm: "70vh" }}
      width="100%"
      minWidth="100%"
      gap={{ xs: ".5rem", sm: "2.5rem" }}
    >
      <Box height={{ xs: "40%", sm: "95%" }} width={{ xs: "50%", sm: "25vw" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            height: "100%",
            backgroundColor: "black",
            minHeight: "100%",
            minWidth: "100%",
            width: "100%",
            boxShadow:
              "0px 2px 4px -1px rgba(255, 255, 255, 0.2), 0px 4px 5px 0px rgba(255, 255, 255, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)",

            borderRadius: 4,
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: "0", sm: "0" }}
        width={{ xs: "80%", sm: "65vw" }}
        height="95%"
        justifyContent="space-between"
      >
        <Text textType="title">{movie.title}</Text>
        <Box
          flexDirection="row"
          display="flex"
          width={{ xs: "80px", sm: "100px" }}
          justifyContent="space-between"
        >
          <Text textType="text">{getYearFromDate(movie.release_date)}</Text>
          <Text textType="text" style={{ textTransform: "uppercase" }}>
            {movie.original_language}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" gap=".5rem">
          {movie.genres?.map((genre) => (
            <Text key={genre.id} textType="text">
              {genre.name}
            </Text>
          ))}
        </Box>
        <Text textType="text">
          <> Rating: {truncateDecimals(movie.vote_average, 1)}</>
        </Text>
        <Box
          height={{ xs: 0, sm: 50 }}
          overflow={{ xs: "hidden", sm: "auto" }}
          display={{ xs: "none", sm: "flex" }}
        >
          <Text textType="text">{movie.overview}</Text>
        </Box>
        <SimilarMovies movies={similarMovies} />
      </Box>
    </Box>
  );
};

export default MovieDetailsContainer;
