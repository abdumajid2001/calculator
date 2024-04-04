import common_en from './en.json'
import common_ru from './ru.json'
import common_uz from './uz.json'
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: common_en
    },
    ru: {
        translation: common_ru
    },
    uz: {
        translation: common_uz
    },
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'uz',
        keySeparator: 'false',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

