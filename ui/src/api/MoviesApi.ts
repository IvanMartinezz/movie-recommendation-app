import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const apiKey: string = process.env.API_KEY || "";

export async function getMovies(): Promise<Movie[]> {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies.");
  }
}

export async function getMovie(id: number): Promise<Movie> {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details.");
  }
}

export const getSimilarMovies = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch similar movies.");
  }
};
