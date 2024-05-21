import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt={title + " Poster"} />
    </div>
  );
};

export default MovieCard;
