import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function OneDayForecast(props) {
  function forecastDay() {
    let time = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[time.getDay()];
    return day;
  }

  function roundMaxFahr() {
    let maxTempFahr = Math.round(props.data.temperature.maximum * 1.8 + 32);
    return `${maxTempFahr}°`;
  }

  function roundMinFahr() {
    let minTempFahr = Math.round(props.data.temperature.minimum * 1.8 + 32);
    return `${minTempFahr}°`;
  }

  function roundMax() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function roundMin() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  if (props.unit === "metric") {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{forecastDay()}</h5>
            <WeatherIcon
              iconInfo={props.data.condition.icon}
              alt={props.data.condition.description}
              size={42}
            />
            <div className="forecast-temps">
              <span className="forecast-temp-max">{roundMax()}</span>
              {"   "}
              <span className="forecast-temp-min">{roundMin()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{forecastDay()}</h5>
            <WeatherIcon
              iconInfo={props.data.condition.icon}
              alt={props.data.condition.description}
              size={42}
            />
            <div className="forecast-temps">
              <span className="forecast-temp-max">{roundMaxFahr()}</span>
              {"   "}
              <span className="forecast-temp-min">{roundMinFahr()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
