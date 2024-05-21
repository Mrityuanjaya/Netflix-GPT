import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { API_OPTIONS, TMDB_V3_BASE_URL } from "../utils/constants";
import { lang } from "../utils/languageConstants";
import openai, { getGptQuery } from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const URL =
      TMDB_V3_BASE_URL +
      "search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1";
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API Call to get movie suggestions
    const gptQuery = getGptQuery(searchText.current.value);
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    // for each movie, search TMDB API
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
