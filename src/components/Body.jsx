import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { ROUTES } from "../utils/constants";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.HOMEPAGE,
      element: <Login />,
    },
    {
      path: ROUTES.BROWSEPAGE,
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
