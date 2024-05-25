import { useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const allMovies = { ...movies };
  if (allMovies["trailerVideo"]) delete allMovies["trailerVideo"];
  return (
    <div className="bg-black">
      <div className="md:-mt-52 relative z-20 pl-4 md:pl-10">
        <MovieListContainer allMovies={allMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
