import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { truncateDecimals } from "@/utils/functions";
import { Text } from "@/components/Text";

interface Props {
  movie: Movie;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

import { useState } from "react";

export default function MovieCard({ movie, onClick }: Props) {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const truncatedTitle =
    movie.title.length > 20 ? movie.title.slice(0, 20) + "..." : movie.title;

  return (
    <Card
      sx={{
        maxWidth: { xs: 200, sm: 280 },
        minWidth: { xs: 200, sm: 280 },
        minHeight: { xs: 140, sm: 238 },
        maxHeight: { xs: 140, sm: 238 },
        borderRadius: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        boxShadow:
          "0px 2px 4px -1px rgba(255, 255, 255, 0.2), 0px 4px 5px 0px rgba(255, 255, 255, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            maxHeight: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: 1,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Text
            sx={{ color: "white", textAlign: "center", lineHeight: 1 }}
            component="div"
            textType="title"
          >
            {isHovered ? movie.title : truncatedTitle}
          </Text>
        </Box>
        <CardMedia
          sx={{
            height: { xs: 140, sm: 238, backgroundColor: "transparent" },
          }}
          component="img"
          image={`${imageUrlBase}${movie.backdrop_path}`}
        />
        <Box
          display="flex"
          justifyContent="space-evenly"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            maxHeight: "fit-content",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Text
            textType="overline"
            component="div"
            display="flex"
            variant="overline"
            color="white"
          >
            Rating: {truncateDecimals(movie.vote_average, 1)}
          </Text>
          <Text
            textType="overline"
            variant="overline"
            color="white"
            component="div"
          >
            Language: {movie.original_language}
          </Text>
        </Box>
      </CardActionArea>
    </Card>
  );
}
