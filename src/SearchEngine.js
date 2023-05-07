import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [weather, setWeather] = useState({});

  function displayTemp(response) {
    setSearched(true);
    setWeather({
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

    let apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  let form = (
    <div className="SearchEngine">
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

  if (searched) {
    return (
      <div className="Weather">
        {form}
        <Current
          temp={weather.temp}
          city={weather.city}
          hum={weather.hum}
          wind={weather.wind}
          desc={weather.desc}
          date="Sat 17:35"
          icon={weather.icon}
        />
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
