import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-transparent text-white">
      <h1 className="text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex mb-4">
          {movies?.map((movie) => (
            <MovieCard title={movie?.title} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
