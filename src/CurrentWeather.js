import React from "react";
import FormateDate from "./FormateDate";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-4">
        <h1>{props.info.city}</h1>
        <h4>
          <FormateDate date={props.info.date} />
        </h4>
        <h4 className="text-capitalize">{props.info.desc}</h4>
        <ul>
          <li>Humidity: {props.info.hum}%</li>
          <li>Wind: {props.info.wind} m/s</li>
        </ul>
      </div>
      <div className="col-8 align-self-center">
        <span>
          <h2>
            <img src={props.info.icon} alt={props.info.desc} />{" "}
            {props.info.temp}
          </h2>
        </span>
        <span className="units">°C</span>
      </div>
    </div>
  );
}
