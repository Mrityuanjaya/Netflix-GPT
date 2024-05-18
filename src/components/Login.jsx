import React, { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { NETFLIX_BACKGROUNG_IMAGE_URL, ROUTES } from "../utils/constants";
import { validateData } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate user
    const message = isSignInForm
      ? validateData(email.current.value, password.current.value)
      : validateData(
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(message);
    if (message) return;

    // Sign Up/ Sign In
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate(ROUTES.BROWSEPAGE);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate(ROUTES.BROWSEPAGE);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BACKGROUNG_IMAGE_URL} alt="Netflix Background" />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col">
          <h1 className="text-3xl my-4 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              autoComplete="off"
              type="text"
              placeholder="Full Name"
              className="my-2 p-2 bg-gray-900 border border-gray-500"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="my-2 p-2 bg-gray-900 border border-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-2 bg-gray-900 border border-gray-500"
          />
          <p className="text-red-700 text-lg font-bold">{errorMessage}</p>
          <button
            className="bg-red-600 p-3 my-8 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <span className="my-2">
              {isSignInForm ? "New to Netflix?" : "Existing user?"}{" "}
            </span>
            <span
              className="my-2 font-semibold cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
