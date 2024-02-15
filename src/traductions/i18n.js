import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                translation: require('./traduction_fr.json'),
            },
            en: {
                translation: require('./traduction_en.json'),
            },
        },
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;