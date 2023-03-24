import React from "react";
import "./MidSection.css";

export default function MidSection(props) {
  return (
    <div>
      <div className="midSection"></div>

      <div className="weatherElements d-flex">
        <div className="humidity weather-details">
          Humidity<div className="emoji">𓄺</div>
          <div>{props.humidity}%</div>
        </div>
        <div className="wind weather-details">
          Wind<div className="emoji">🌬️</div>
          <div>{props.wind}km/h</div>
        </div>
        <div className="pressure weather-details">
          Pressure<div className="emoji">༄</div> <div>{props.pressure}</div>{" "}
        </div>
      </div>
    </div>
  );
}
