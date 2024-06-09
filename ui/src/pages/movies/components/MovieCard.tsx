import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { truncateDecimals } from "@/utils/functions";

interface Props {
  movie: Movie;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function MovieCard({ movie, onClick }: Props) {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";

  return (
    <Card
      sx={{ maxWidth: 280, minWidth: 280, borderRadius: 1 }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${imageUrlBase}${movie.backdrop_path}`}
        />
        <CardContent sx={{ maxHeight: 120, minHeight: 120 }}>
          <Typography gutterBottom variant="h6" component="div" height="60px">
            {movie.title}
          </Typography>
          <Box display="flex" justifyContent="space-evenly">
            <Typography
              component="div"
              display="flex"
              variant="overline"
              color="text.secondary"
            >
              Rating: {truncateDecimals(movie.vote_average, 1)}
            </Typography>
            <Typography
              variant="overline"
              color="text.secondary"
              component="div"
            >
              Languaje: {movie.original_language}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
