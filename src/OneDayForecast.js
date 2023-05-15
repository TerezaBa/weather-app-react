import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function OneDayForecast(props) {
  function forecastDay() {
    let time = new Date(props.data[0].time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[time.getDay()];
    return day;
  }

  function roundMax() {
    let maxTemp = Math.round(props.data[0].temperature.maximum);
    return `${maxTemp}°`;
  }

  function roundMin() {
    let minTemp = Math.round(props.data[0].temperature.minimum);
    return `${minTemp}°`;
  }

  return (
    <div>
      <div className="row Forecast">
        <div class="col-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{forecastDay()}</h5>
              <WeatherIcon
                iconInfo={props.data[0].condition.icon}
                alt={props.data[0].condition.description}
                size={42}
              />
              <div className="forecast-temps">
                <span class="forecast-temp-max">{roundMax()}</span>
                <span class="forecast-temp-min">{roundMin()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
