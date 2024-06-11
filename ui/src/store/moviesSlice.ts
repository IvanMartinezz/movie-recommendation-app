import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  query: string;
  movies: Movie[];
  filteredMovies: Movie[];
}

const initialState: MoviesState = {
  query: "",
  movies: [],
  filteredMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    setFilteredMovies(state, action: PayloadAction<Movie[]>) {
      state.filteredMovies = action.payload;
    },
    clearMovies(state) {
      state.movies = [];
    },
  },
});

export const { setSearchQuery, setMovies, setFilteredMovies, clearMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
