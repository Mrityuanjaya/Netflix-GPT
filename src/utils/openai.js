import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["REACT_APP_OPENAI_API_KEY"],
  dangerouslyAllowBrowser: true,
});

export const getGptQuery = (userPrompt) => {
  const gptQuery =
    "Act as a Movie Recomendation System and suggest some movies for the query: " +
    userPrompt +
    "Only give names of 5 movies, comma separated, rersult should be like the example result given ahead. Example Result: Jab We Met, Gadar, Kabir Singh, Tiger Zinda hai, Koi Mil Gya";
  return gptQuery;
};

export default openai;
