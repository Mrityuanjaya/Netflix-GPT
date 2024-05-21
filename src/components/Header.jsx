import React, { useEffect } from "react";
import {
  NETFLIX_LOGO_URL,
  NETFLIX_PROFILE_URL,
  ROUTES,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { lang } from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const langKey = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate(ROUTES.BROWSEPAGE);
      } else {
        dispatch(removeUser());
        navigate(ROUTES.HOMEPAGE);
      }
    });
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Signed Out
      })
      .catch((error) => {
        // An error happened
        navigate(ROUTES.ERRORPAGE);
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black text-white z-10">
      <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          <h1 className="text-xl font-semibold my-3 mx-5">
            {lang[langKey].welcome + ", " + user.displayName}
          </h1>
          {showGptSearch && (
            <select
              className="my-2 mx-4 px-4 py-2 bg-black bg-opacity-30"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-black"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="w-14 h-14"
            src={NETFLIX_PROFILE_URL}
            alt="user-logo"
          />
          <button
            className={`ml-4 my-2 p-3 ${
              showGptSearch ? "bg-red-600" : "bg-purple-800"
            } rounded-lg`}
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Back to Home" : "GPT Search"}
          </button>
          <button
            className="bg-red-600 font-bol ml-4 mr-2 my-2 p-3 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
