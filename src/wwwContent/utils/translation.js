import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Arabic Language
import AR_Layout_Translation from "../assets/locale/ar/layout/translate.json";
import AR_Home_Translation from "../assets/locale/ar/home/translate.json";
import AR_HowItWorks_Translation from "../assets/locale/ar/how-works/translate.json";
import AR_Levels_Translation from "../assets/locale/ar/levels/translate.json";
import AR_Certificates_Translation from "../assets/locale/ar/certificates/translate.json";
import AR_Schema_Translation from "../assets/locale/ar/schema/translate.json";
import AR_Efficacy_Translation from "../assets/locale/ar/efficacy/translate.json";

// English Language
import EN_Layout_Translation from "../assets/locale/en/layout/translate.json";
import EN_Home_Translation from "../assets/locale/en/home/translate.json";
import EN_HowItWorks_Translation from "../assets/locale/en/how-works/translate.json";
import EN_Levels_Translation from "../assets/locale/en/levels/translate.json";
import EN_Certificates_Translation from "../assets/locale/en/certificates/translate.json";
import EN_Efficacy_Translation from "../assets/locale/en/efficacy/translate.json";
import EN_Schema_Translation from "../assets/locale/en/schema/translate.json";

const AR_Language_Merge = Object.assign(
  AR_Layout_Translation,
  AR_Home_Translation,
  AR_HowItWorks_Translation,
  AR_Levels_Translation,
  AR_Certificates_Translation,
  AR_Schema_Translation,
  AR_Efficacy_Translation
);
const EN_Language_Merge = Object.assign(
  EN_Layout_Translation,
  EN_Home_Translation,
  EN_HowItWorks_Translation,
  EN_Levels_Translation,
  EN_Certificates_Translation,
  EN_Efficacy_Translation,
  EN_Schema_Translation
);

const fallbackLng = ["ar"];
const availableLanguages = ["ar", "en"];

const resources = {
  ar: {
    translation: AR_Language_Merge,
  },
  en: {
    translation: EN_Language_Merge,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
