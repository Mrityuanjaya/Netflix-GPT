export const NETFLIX_BACKGROUNG_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const NETFLIX_LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_PROFILE_URL =
  "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env["REACT_APP_TMDB_API_KEY"],
  },
};

export const ROUTES = {
  HOMEPAGE: "/",
  BROWSEPAGE: "/browse",
  ERRORPAGE: "/error",
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const TMDB_V3_BASE_URL = "https://api.themoviedb.org/3/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const PROMPT_CHARACTER_LIMIT = 100;
