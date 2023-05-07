import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  let weatherData = {
    cityName: "Prague",
    date: "Sat 17:35",
    description: "Mostly cloudy",
    humidity: 76,
    windSpeed: 26,
    currentTemperature: 4,
  };

  return (
    <div className="Weather container">
      <div className="app-container">
        <SearchEngine date="Sat 17:35" />
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

export default App;
