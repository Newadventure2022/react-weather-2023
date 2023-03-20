import React from "react";

export default function WeatherTemp(props) {
  if (props.unit === "metric") {
    return (
      <div className="TempConversion">
        <div className="temp-display">{props.temp}</div>
      </div>
    );
  } else {
    let fahrenheit = Math.round(props.temp * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <div className="temp-display">{Math.round(fahrenheit)}</div>
      </div>
    );
  }
}
