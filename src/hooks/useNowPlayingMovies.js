import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const URL = TMDB_V3_BASE_URL + "movie/now_playing?page=1";
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
