import React from "react";
import FormateDate from "./FormateDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  function showFahr(event) {
    event.preventDefault();
    alert("This might work.");
  }

  return (
    <div className="row CurrentWeather">
      <div className="col-6">
        <h1>{props.info.city}</h1>
        <h4>
          <FormateDate date={props.info.date} />
        </h4>
        <h4 className="text-capitalize">{props.info.desc}</h4>
        <ul>
          <li>
            <span className="info-text">Humidity:</span> {props.info.hum}%
          </li>
          <li>
            <span className="info-text">Wind:</span> {props.info.wind} m/s
          </li>
        </ul>
      </div>
      <div className="col-6 align-self-center">
        <WeatherIcon
          iconInfo={props.info.icon}
          alt={props.info.desc}
          size={58}
        />
        <Temperature metric={props.info.temp} onFahrClick={showFahr} />
      </div>
    </div>
  );
}
