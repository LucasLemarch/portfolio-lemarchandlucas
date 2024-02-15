import React from "react";
import { Link } from "react-router-dom";

export const PageAccueil = () => {

    return (
        <div>
            <h1>accueil</h1>
            <Link to="/projets">projets</Link>
        </div>
    )
};