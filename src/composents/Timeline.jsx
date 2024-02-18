import React from "react";
import {Stack} from "@mui/material";
import "../style/Timeline.css"
import {useTranslation} from "react-i18next";

export const Timeline = ({ titre, lstEvenements }) => {
    const { t } = useTranslation();

    return (
        <Stack
            p={4}
        >
            <h3>{t(titre)}</h3>

            <ul id='timeline'>
                {lstEvenements.map(({id, nom, date, description}) => (
                    <li className='work'>
                        <input className='radio' id={id} name='works' type='radio'/>
                        <div className="relative">
                            <label htmlFor={id}>{t(nom)}</label>
                            <span className='date'>{t(date)}</span>
                            <span className='circle'></span>
                        </div>
                        <div className='content'>
                            <p>
                                {t(description)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </Stack>
    )
}