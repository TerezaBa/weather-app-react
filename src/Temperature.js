import React, { useContext } from "react";
import { UnitSwitchContext } from "./UnitSwitchContext";
import Metric from "./Metric";
import Imperial from "./Imperial";

import "./Temperature.css";

export default function Temperature(props) {
  const { value, setValue } = useContext(UnitSwitchContext);

  function showCels(event) {
    event.preventDefault();
    setValue(`metric`);
  }

  function showFahr(event) {
    event.preventDefault();
    setValue();
  }

  if (value === `metric`) {
    return (
      <span className="Temperature">
        <span className="temp">
          <Metric temp={props.metric} />
        </span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="temp">
          <Imperial temp={props.metric} />
        </span>
        <span className="units">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
