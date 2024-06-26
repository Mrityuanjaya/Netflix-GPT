import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovieIdx = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[mainMovieIdx];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
