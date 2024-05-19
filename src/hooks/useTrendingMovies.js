import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const URL = TMDB_V3_BASE_URL + "trending/movie/day";
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json?.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
