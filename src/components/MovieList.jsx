import { useState } from "react";
import MovieCard from "./MovieCard";
import MoviePlayer from "./MoviePlayer";
const MovieList = ({ title, movies }) => {
  const [showIndex, setShowIndex] = useState(-1);
  return (
    <div className="px-6 bg-transparent text-white">
      <h1 className="text-lg md:text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex mb-4">
          {movies?.map((movie, idx) => {
            return idx !== showIndex ? (
              <MovieCard
                key={movie?.id}
                title={movie?.title}
                posterPath={movie?.poster_path}
                setShowIndex={() => setShowIndex(idx)}
              />
            ) : (
              <MoviePlayer key={movie.id} movieId={movie.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
