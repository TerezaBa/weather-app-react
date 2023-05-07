import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
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
      <p>{query}</p>
    </div>
  );
}
