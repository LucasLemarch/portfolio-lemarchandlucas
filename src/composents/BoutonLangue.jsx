import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import {MenuItem, Select, Stack, styled} from "@mui/material";

export const BoutonLangue = () => {
    const { i18n} = useTranslation();
    const [langueChoisie, setLangueChoisie] = useState('fr');

    const handleChange = (event) => {
        const nouvelleLangue = event.target.value;
        setLangueChoisie(nouvelleLangue);
        i18n.changeLanguage(nouvelleLangue);
    }

    const SelectLangue = styled(Select)({
        color: "white",
    })

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <SelectLangue
                value={langueChoisie}
                onChange={handleChange}
            >
                <MenuItem value="fr">Français</MenuItem>
                <MenuItem value="en">English</MenuItem>
            </SelectLangue>
        </Stack>
    )
};