import React from "react";
import { Header } from "../../composents/Header";
import {Stack} from "@mui/material";
import {Presentation} from "../../composents/Presentation";

export const PageAccueil = () => {
    return (
        <Stack>
            <Header />
            <Presentation />
        </Stack>
    )
};