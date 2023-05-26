import React from "react";
import FormatCurrentDate from "./FormatCurrentDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

import "./styles/CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="row CurrentWeather">
      <div className="col-6">
        <h1>{props.weatherInfo.city}</h1>
        <h4>
          <FormatCurrentDate date={props.weatherInfo.date} />
        </h4>
        <h4 className="text-capitalize">{props.weatherInfo.desc}</h4>
        <ul>
          <li>
            <span className="info-text">Humidity:</span> {props.weatherInfo.hum}
            %
          </li>
          <li>
            <span className="info-text">Wind:</span> {props.weatherInfo.wind}{" "}
            m/s
          </li>
        </ul>
      </div>
      <div className="col-6 align-self-center">
        <WeatherIcon iconInfo={props.weatherInfo.icon} size={58} />
        <Temperature metric={props.weatherInfo.temp} />
      </div>
    </div>
  );
}
