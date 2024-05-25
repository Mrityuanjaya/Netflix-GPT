import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="md:-mt-52 relative z-20 pl-4 md:pl-10">
        {movies?.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies?.trendingMovies && (
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies?.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
