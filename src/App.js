import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Prague" />
      </div>
      <footer>
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
      </footer>
    </div>
  );
}
