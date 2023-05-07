import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [query, setQuery] = useState("");

  function displayTemp(response) {
    alert(`${response.data.temperature.current}`);
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

  return (
    <div className="Weather">
      {form}
      <div className="row">
        <div className="col-4">
          <h1>City</h1>
          <h3>{props.date}</h3>
          <h4>Description</h4>
          <ul>
            <li>Humidity: </li>
            <li>Wind: km/h</li>
          </ul>
        </div>
        <div className="col-8 align-self-center">
          <span>
            <h2>
              <span role="img" aria-label="cloudy">
                ⛅
              </span>{" "}
              TEMP°C
            </h2>
          </span>
          <span className="units">°C</span>
        </div>
      </div>
      <p>{query}</p>
    </div>
  );
}
