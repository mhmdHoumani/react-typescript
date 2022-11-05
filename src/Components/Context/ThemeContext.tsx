import React from "react";
import { createContext } from "react";
import theme from "./theme";

export const ThemeContext = createContext(theme);

const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
