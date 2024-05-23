import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import {
  API_OPTIONS,
  PROMPT_CHARACTER_LIMIT,
  TMDB_V3_BASE_URL,
} from "../utils/constants";
import { lang } from "../utils/languageConstants";
import openai, { getGptQuery } from "../utils/openai";

const GptSearchBar = () => {
  const [errorMessage, setErrorMessage] = useState(null);
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
    if (searchText.current.value.length > PROMPT_CHARACTER_LIMIT) {
      setErrorMessage("The Prompt is too long. Please shorten it.");
      return;
    } else if (searchText.current.value.length === 0) {
      setErrorMessage(
        "The Prompt is empty. Please enter what would you like to watch today."
      );
      return;
    }
    setErrorMessage(null);
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
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-11/12 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        {errorMessage && (
          <p className="text-red-700 m-3 col-span-12 text-lg font-bold">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
