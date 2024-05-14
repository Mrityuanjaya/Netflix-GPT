import React from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUNG_IMAGE_URL } from "../utils/constants";

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <img
          src={NETFLIX_BACKGROUNG_IMAGE_URL}
          alt="Netflix Background Image"
        />
      </div>
    </>
  );
};

export default Login;
