import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data.daily[0].temperature.maximum);
    console.log(response.data.city);
  }

  console.log(props.coords);
  let lon = props.coords.longitude;
  let lat = props.coords.latitude;
  let apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row Forecast">
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wed</h5>
            <WeatherIcon iconInfo={props.iconInfo} alt={props.alt} size={42} />
            <div className="forecast-temps">
              <span class="forecast-temp-max">14°</span>
              <span class="forecast-temp-min">9°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
