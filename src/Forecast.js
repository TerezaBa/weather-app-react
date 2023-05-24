import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";
import { UnitSwitchContext } from "./UnitSwitchContext";

import "./Forecast.css";

export default function Forecast(props) {
  const [searched, setSearched] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const { value, setValue } = useContext(UnitSwitchContext);

  useEffect(() => {
    setSearched(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setSearched(true);
    setValue("fahr");
  }

  function search() {
    let lon = props.coords.longitude;
    let lat = props.coords.latitude;
    let apiKey = "b36tedd42903o5c6c68a4a10b4b1953f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (searched) {
    return (
      <div className="row Forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6 && value === "metric") {
            return (
              <div key={index} className="col-2">
                <OneDayForecast
                  time={dailyForecast.time}
                  max={Math.round(dailyForecast.temperature.maximum)}
                  min={Math.round(dailyForecast.temperature.minimum)}
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="col-2">
                <OneDayForecast
                  time={dailyForecast.time}
                  max={Math.round(dailyForecast.temperature.maximum)}
                  min={Math.round(dailyForecast.temperature.minimum)}
                />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    search();
    return null;
  }
}
