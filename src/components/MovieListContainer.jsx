import React, { useState } from "react";
import MovieList from "./MovieList";

const MovieListContainer = ({ allMovies }) => {
  const [playingListIndex, setPlayingListIndex] = useState(-1);
  return (
    <div>
      {Object.entries(allMovies).map(([key, value], idx) => (
        <MovieList
          title={key}
          movies={value}
          isPlaying={idx === playingListIndex}
          setPlayingListIndex={() => setPlayingListIndex(idx)}
        />
      ))}
    </div>
  );
};

export default MovieListContainer;
