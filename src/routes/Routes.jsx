import React from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard } from "../views/layout/Dashboard";
import { homeRoutes } from "./route/home";
import { Favoritos } from "../views/layout/Favoritos";

export default function Rutas() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <Favoritos />,
        },
      ],
    },

    // { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
