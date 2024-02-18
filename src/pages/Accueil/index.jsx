import React from "react";
import { Header } from "../../composents/Header";
import {Stack} from "@mui/material";
import {Presentation} from "../../composents/Presentation";
import {Timeline} from "../../composents/Timeline";
import {listEvenementEtudes} from "../../datas/listEvenementEtudes";

export const PageAccueil = () => {
    return (
        <Stack>
            <Header />
            <Presentation />
            <Timeline
                titre="etudes.titre"
                lstEvenements={listEvenementEtudes}
            />
        </Stack>
    )
};