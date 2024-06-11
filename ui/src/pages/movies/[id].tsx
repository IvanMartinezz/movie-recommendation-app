import { useParams, useRouter } from "next/navigation";
import { Box } from "@mui/material";
import styles from "@/app/page.module.css";
import "@/app/globals.css";
import Loading from "@/app/loading";
import { Text } from "@/components/Text";
import useFetchMovie from "@/hooks/useFetchMovie";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieDetailsContainer from "./components/MovieDetailsContainer";

const MovieDetailsPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id.toString();

  const { loading, movie, similarMovies } = useFetchMovie(parseInt(id || ""));

  const goToHome = () => {
    router.push("/");
  };

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <Box
      gap={{ xs: ".5rem", sm: "2.5rem" }}
      padding={{ xs: ".5rem" }}
      className={styles.main}
      style={{
        background: 'url("/background2.jpeg") no-repeat',
        backgroundSize: "cover",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header logoOnClick={goToHome} showSearchBar={false}>
            <Text textType="subtitle">Palomitalandia</Text>
          </Header>
          <MovieDetailsContainer movie={movie} similarMovies={similarMovies} />
          <Footer />
        </>
      )}
    </Box>
  );
};

export default MovieDetailsPage;
