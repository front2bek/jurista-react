import i18n from "i18next";

import Backend from "i18next-xhr-backend";

import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationSR from "./locales/sr/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  sr: {
    translation: translationSR,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", //default language
    fallbackLng: "en", //when specified language translations not present
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "./locales/en/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
