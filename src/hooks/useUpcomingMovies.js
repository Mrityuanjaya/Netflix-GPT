import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const URL = TMDB_V3_BASE_URL + "movie/upcoming";
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => getUpcomingMovies(), []);
};
export default useUpcomingMovies;
