import { useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return;
  const allMovies = {};
  movieNames?.map((movieName, index) => {
    if (movieName) allMovies[movieName] = movieResults[index];
  });
  return (
    <div className="md:p-4 m-4 bg-black opacity-90 text-white">
      <MovieListContainer allMovies={allMovies} />
    </div>
  );
};

export default GptMovieSuggestions;
