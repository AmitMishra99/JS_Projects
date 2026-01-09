import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";

const ThemeMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [word, setWord] = useState(true);

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    setWord(!word);
  }
  console.log(theme);
  return (
    <div className="light-dark-mode " datatheme={theme}>
      <div className="container">
        <h1>Hello World !! </h1>
        <button onClick={handleToggleTheme}>
         Change Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeMode;
