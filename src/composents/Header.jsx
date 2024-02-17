import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BoutonLangue } from "./BoutonLangue";
import {Button, Stack, styled, Typography} from "@mui/material";

export const Header = () => {
    const { t} = useTranslation();

    const BoutonProjets = styled(Button)({
        color: 'white',
    })

    return (
        <header>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={3}
                backgroundColor="#3F51D7"
            >
                <Typography variant="h4" color="white">
                    Lemarchand Lucas
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    mr={2}
                >
                    <BoutonProjets
                        component={Link}
                        to="/projets"
                    >
                        {t('header.projets')}
                    </BoutonProjets>
                    <BoutonLangue />
                </Stack>
            </Stack>
        </header>
    )
};
/**
 * <header className='header'>
 *             <h1>Lemarchand Lucas</h1>
 *             <div className='header-droite'>
 *                 <Button component={Link} to="/projets">
 *                     {t('header.projets')}
 *                 </Button>
 *                 <BoutonLangue />
 *             </div>
 *         </header>
 */