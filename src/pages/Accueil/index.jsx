import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PageAccueil = () => {
    const { t} = useTranslation();

    return (
        <div>
            <h1>{t('test')}</h1>
            <Link to="/projets">projets</Link>
        </div>
    )
};