import React from "react";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
