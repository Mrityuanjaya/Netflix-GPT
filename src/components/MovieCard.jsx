import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath, playTrailer }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 mr-4 cursor-pointer" onClick={playTrailer}>
      <img src={IMG_CDN_URL + posterPath} alt={title + " Poster"} />
    </div>
  );
};

export default MovieCard;
