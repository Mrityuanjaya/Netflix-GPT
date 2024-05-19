import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({title, posterPath}) => {
    console.log(IMG_CDN_URL+posterPath);
  return (
    <div className="w-48 pr-4">
        <img src={IMG_CDN_URL + posterPath } alt={title + " Poster"}/>
    </div>
  )
}

export default MovieCard