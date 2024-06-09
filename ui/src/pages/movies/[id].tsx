interface MovieDetailsProps {
  title: string;
  director: string;
  releaseYear: number;
}

const MovieDetailsPage: React.FC<MovieDetailsProps> = ({
  title,
  director,
  releaseYear,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Director: {director}</p>
      <p>Año de lanzamiento: {releaseYear}</p>
    </div>
  );
};

export default MovieDetailsPage;
