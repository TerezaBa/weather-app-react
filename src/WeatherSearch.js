import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ searched: false });

  function displayTemp(response) {
    setWeatherData({
      searched: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      desc: response.data.condition.description,
      temp: response.data.temperature.current,
      hum: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  let form = (
    <div className="WeatherSearch">
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
      <div className="WeatherSearch">
        <div>{form}</div>
        <CurrentWeather info={weatherData} />
      </div>
    );
  } else {
    search(query);
    return <div>Loading...</div>;
  }
}
