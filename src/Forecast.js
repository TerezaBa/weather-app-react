import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import OneDayForecast from "./OneDayForecast";

export default function Forecast(props) {
  const [searched, setSearched] = useState(false);
  const [forecastData, setForecastData] = useState("");

  function handleResponse(response) {
    setSearched(true);
    setForecastData(response.data.daily);
  }

  if (searched) {
    return <OneDayForecast data={forecastData} />;
  } else {
    let lon = props.coords.longitude;
    let lat = props.coords.latitude;
    let apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
