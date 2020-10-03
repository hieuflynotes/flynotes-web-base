import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import messages_en_UK from '../translations/en_UK/messages.json';
import moment from "moment";

i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en_UK',
        lng: "en_UK",
        fallbackNS:"messages",
        ns:["messages"],
        debug: false,
        resources: {
            en_UK: {
                messages: messages_en_UK,
            }
        },
        react: {
            wait: false,
            useSuspense: false
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
export const getCurrentLanguage = ()=>{
    return i18n.language.split("_")[0];
}
i18n.on("initialized",function (options) {
    moment.locale(getCurrentLanguage());
});
i18n.on("languageChanged",function (lng:string) {
    moment.locale(getCurrentLanguage());
});

export default i18n;
