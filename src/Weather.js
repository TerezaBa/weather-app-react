import React, { useState } from "react";
import axios from "axios";
import FormateDate from "./FormateDate";
import "./Weather.css";

export default function SearchEngine(props) {
  const [query, setQuery] = useState("");
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

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
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
        {form}
        <div className="row">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <h3>
              <FormateDate date={weatherData.date} />
            </h3>
            <h4>{weatherData.desc}</h4>
            <ul>
              <li>Humidity: {weatherData.hum}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div className="col-8 align-self-center">
            <span>
              <h2>
                <img src={weatherData.icon} alt={weatherData.desc} />{" "}
                {weatherData.temp}
              </h2>
            </span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}

        <div className="row">
          <div className="col-4">
            <h1>Prague</h1>
            <h3>Sat 17:35</h3>
            <h4>mostly cloudy</h4>
            <ul>
              <li>Humidity: 76%</li>
              <li>Wind: 5 m/s</li>
            </ul>
          </div>
          <div className="col-8 align-self-center">
            <span>
              <h2>
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="cloudy"
                />{" "}
                10
              </h2>
            </span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
    );
  }
}
