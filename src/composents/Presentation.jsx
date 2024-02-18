import React from "react";
import {Stack, styled, Typography, useMediaQuery} from "@mui/material";
import photo from "../res/LucasLemarchand.png"
import {useTranslation} from "react-i18next";

export const Presentation = () => {
    const { t} = useTranslation();
    const estPetitEcran = useMediaQuery('(max-width:900px)');
    const tailleImage = estPetitEcran ? "200px" : "250px";
    const largeurTexte = estPetitEcran ? "75%" : "50%";

    const TypographyPresentation = styled(Typography)({
        textAlign: 'justify',
    })

    return (
        <Stack
            display="flex"
            direction="row"

            justifyContent="center"

            width="100%"
            pt={6}
        >
            <Stack
                width={largeurTexte}
                direction="row"
                alignItems="center"
                gap={5}
            >

                <Stack>
                    <TypographyPresentation variant="h5" color="black" fontWeight="bold">
                        {t('presentation.description.titre')}
                    </TypographyPresentation>
                    <br/>
                    <TypographyPresentation variant="body1" color="black">
                        {t('presentation.description.corps')}
                    </TypographyPresentation>
                </Stack>

                <img
                    src={photo}
                    alt={t('presentation.photo')}
                    width={tailleImage}
                />
            </Stack>
        </Stack>
    )
};