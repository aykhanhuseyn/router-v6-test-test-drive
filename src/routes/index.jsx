import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Auth, { authLoader, PassLogin, AsanLogin } from "../pages/Auth";

export const mainRoutes = {
  auth: {},
};

export const router = createBrowserRouter([
  {
    path: ":lang/*",
    element: <App />,
    children: [
      {
        path: "login/*",
        element: <Auth />,
        loader: authLoader,
        children: [
          {
            index: true,
            element: <PassLogin />,
          },
          {
            path: "asan",
            element: <AsanLogin />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="az" replace={true} />,
  },
]);
