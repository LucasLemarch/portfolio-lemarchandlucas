import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PageAccueil} from "./pages/Accueil";
import {PageProjets} from "./pages/Projets";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageAccueil />,
    },
    {
        path: "/projets",
        element: <PageProjets />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);