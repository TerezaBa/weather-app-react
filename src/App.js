import React, { useState } from "react";
import DataSearch from "./DataSearch";
import { UnitSwitchContext } from "./UnitSwitchContext";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("metric");

  return (
    <div className="container">
      <div className="App">
        <UnitSwitchContext.Provider value={{ value, setValue }}>
          <DataSearch defaultCity="Prague" />
        </UnitSwitchContext.Provider>
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/TerezaBa/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>
          , by TerezaBa
        </small>
      </footer>
    </div>
  );
}
