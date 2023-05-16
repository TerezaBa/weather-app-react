import React, { useState } from "react";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";
import "./Forecast.css";

export default function Forecast(props) {
  console.log(props.coords);
  const [searched, setSearched] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setSearched(true);
  }

  if (searched) {
    return (
      <div className="row Forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index} className="col-2">
                <OneDayForecast data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let lon = props.coords.longitude;
    let lat = props.coords.latitude;
    let apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return "Loading...";
  }
}
