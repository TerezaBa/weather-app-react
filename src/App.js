import React from "react";
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
        <div className="row">
          <div className="col-4">
            <h1>{weatherData.cityName}</h1>
            <h3>{weatherData.date}</h3>
            <h4>{weatherData.description}</h4>
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.windSpeed} km/h</li>
            </ul>
          </div>
          <div className="col-8 align-self-center">
            <span>
              <h2>
                <span role="img" aria-label="cloudy">
                  ⛅
                </span>{" "}
                {weatherData.currentTemperature}
              </h2>
            </span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <p>Open-source code, by TerezaBa</p>
    </div>
  );
}

export default App;
