import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async (movieId) => {
    const URL = `${TMDB_V3_BASE_URL}movie/${movieId}/videos`;
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};
export default useMovieTrailer;
