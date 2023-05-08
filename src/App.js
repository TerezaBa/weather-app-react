import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="Weather container">
      <div className="app-container">
        <SearchEngine />
      </div>
      <small>
        <a
          href="https://github.com/TerezaBa/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>
        , by TerezaBa
      </small>
    </div>
  );
}
