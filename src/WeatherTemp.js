import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("metric");
  let [temperature, setTemperature] = useState(props.temp);
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <div className="TempConversion">
        <div id="temp-display">{temperature}</div>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round(props.temp * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <div id="temp-display">{Math.round(fahrenheit)}</div>
        <span className="unit">
          <a href="/" onClick={convertCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
