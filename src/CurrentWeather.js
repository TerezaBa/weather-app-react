import React from "react";
import FormateDate from "./FormateDate";
import Temperature from "./Temperature";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-6">
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
      <div className="col-6 align-self-center">
        <img src={props.info.icon} alt={props.info.desc} />
        <Temperature metric={props.info.temp} />
      </div>
    </div>
  );
}
