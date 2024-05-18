import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL, ROUTES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate(ROUTES.BROWSEPAGE);
      } else {
        dispatch(removeUser());
        navigate(ROUTES.HOMEPAGE);
      }
    });
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
