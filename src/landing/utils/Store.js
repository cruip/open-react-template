import React, { useState, createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const TFunction = createContext();
export const CurrentLanguage = createContext();

export default function Store({ children }) {
  const { t, i18n } = useTranslation();
  const [currentLn, setCurrentLn] = useState();

  useEffect(() => {
    if (i18n.language === "ar")
      document.getElementById("root").setAttribute("class", "direction");
    else document.getElementById("root").removeAttribute("class", "direction");

    i18n.language === "ar" && setCurrentLn("عَرَبِيّ");
    i18n.language === "en" && setCurrentLn("English");
  }, [i18n.language]);

  return (
    <TFunction.Provider value={t}>
      <CurrentLanguage.Provider value={[currentLn, setCurrentLn]}>
        {children}
      </CurrentLanguage.Provider>
    </TFunction.Provider>
  );
}
