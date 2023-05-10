import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="row">
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wed</h5>
            <WeatherIcon iconInfo={props.iconInfo} alt={props.alt} />
            <span class="forecast-temp-max">14°</span>
            <span class="forecast-temp-min">9°</span>
          </div>
        </div>
      </div>
    </div>
  );
}