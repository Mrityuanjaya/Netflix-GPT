import React from "react";
import { NETFLIX_LOGO_URL, ROUTES } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Signed Out
        navigate(ROUTES.HOMEPAGE);
      })
      .catch((error) => {
        // An error happened
        navigate(ROUTES.ERRORPAGE);
      });
  };
  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b text-white from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          <h1 className="text-xl font-semibold my-3 mx-5">
            Welcome, {user.displayName}
          </h1>
          <img
            className="w-14 h-14"
            src="https://th.bing.com/th/id/OIP.xNVHMQZeGGLge2GkMXbrXwAAAA?pid=ImgDet&w=182&h=182&c=7&dpr=1.3"
            alt="user-logo"
          />
          <button
            className="bg-red-600 font-bol mx-4 my-2 p-3 rounded-md"
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
