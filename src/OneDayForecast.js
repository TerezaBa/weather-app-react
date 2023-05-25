import React from "react";
import WeatherIcon from "./WeatherIcon";
import Metric from "./Metric";
import Imperial from "./Imperial";

export default function OneDayForecast(props) {
  function forecastDay() {
    let time = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[time.getDay()];
    return day;
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
              <span className="forecast-temp-max">
                <Metric temp={props.data.temperature.maximum} />°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                <Metric temp={props.data.temperature.minimum} />°
              </span>
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
              <span className="forecast-temp-max">
                <Imperial temp={props.data.temperature.maximum} />°
              </span>
              {"   "}
              <span className="forecast-temp-min">
                <Imperial temp={props.data.temperature.minimum} />°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
