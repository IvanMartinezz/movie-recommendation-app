import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setMovies, setFilteredMovies } from "@/store/moviesSlice";
import { getMovies } from "@/api/MoviesApi";
import { searchMovies } from "@/utils/functions";

const useMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.search.movies);
  const query = useSelector((state: RootState) => state.search.query);

  const fetchMovies = async () => {
    const moviesData = await getMovies();
    dispatch(setMovies(moviesData));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const filterMovies = async () => {
      const newFilteredMovies = await searchMovies(movies, query);
      dispatch(setFilteredMovies(newFilteredMovies));
    };
    filterMovies();
  }, [query, movies]);
};

export default useMovies;
