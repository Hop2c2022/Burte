
import React, { useContext } from "react";
import { ThemeContext } from "../context/Context";

export const  Container = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode ? "container-dark" : "container-light"
      }
    >
      {/* <button onClick={() => setDarkMode(!darkMode)}> Darkmode </button> */}
    </div>
  );
}
