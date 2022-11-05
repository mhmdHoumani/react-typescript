import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: context.primary.main,
        color: context.primary.text,
      }}
    >
      Theme Context
    </div>
  );
};

export default Box;
