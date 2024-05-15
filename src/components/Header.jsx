import React from "react";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="px-8 py-2 bg-transparent absolute z-10">
      <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
