import React, { createContext, useState } from "react";

const LightTheme = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "black",
  titleColor: "white",
  tagLineColor: "white",
};

export const themes = {
  dark: DarkTheme,
  light: LightTheme,
};

export const ThemeContext = createContext({
  toggle: () => {},
  theme: themes.light,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggle = () => {
    setTheme(theme === theme.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
