import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./Weather.css";

export default function Weather(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ searched: false });

  function displayTemp(response) {
    setWeatherData({
      date: new Date(response.data.time * 1000),
      searched: true,
      city: response.data.city,
      temp: Math.round(response.data.temperature.current),
      hum: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      desc: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(query);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  let form = (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              autoFocus={true}
              onChange={handleQuery}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-dark" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );

  if (weatherData.searched) {
    return (
      <div className="Weather">
        <div>{form}</div>
        <CurrentWeather info={weatherData} />
      </div>
    );
  } else {
    search(query);
    return <div>Loading...</div>;
  }
}
