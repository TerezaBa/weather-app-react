import React from "react";
import "./App.css";

export default function Current(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <h1>{props.city}</h1>
          <h3>Sat 17:35</h3>
          <h4>{props.desc}</h4>
          <ul>
            <li>Humidity: {props.hum}%</li>
            <li>Wind: {props.wind} m/s</li>
          </ul>
        </div>
        <div className="col-8 align-self-center">
          <span>
            <h2>
              <img src={props.icon} alt={props.desc} /> {props.temp}
            </h2>
          </span>
          <span className="units">°C</span>
        </div>
      </div>
    </div>
  );
}
