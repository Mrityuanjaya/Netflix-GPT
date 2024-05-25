import React, { useEffect, useState } from "react";
import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";

const MoviePlayer = ({ movieId }) => {
  const [youtubeVideoKey, setYoutubeVideoKey] = useState(null);
  const fetchMovieVideo = async () => {
    const URL = `${TMDB_V3_BASE_URL}movie/${movieId}/videos`;
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
    setYoutubeVideoKey(trailer?.key);
  };
  useEffect(() => {
    fetchMovieVideo();
  }, []);
  return (
    <div>
      <iframe
        className="h-full w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          youtubeVideoKey +
          "?autoplay=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MoviePlayer;
