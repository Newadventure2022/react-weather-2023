import React from "react";
import "./MidSection.css";

export default function MidSection(props) {
  return (
    <div>
      <div className="midSection"></div>

      <div className="weatherElements d-flex">
        <div className="humidity weather-details">
          <div className="emoji">𓄺</div>
          <span className="elementWords">Humidity</span>
          <div className="elementProps">{props.humidity}%</div>
        </div>
        <div className="wind weather-details">
          <div className="emoji">🌬️</div>
          <span className="elementWords">Wind</span>
          <div className="elementProps">{props.wind}km/h</div>
        </div>
        <div className="pressure weather-details">
          <div className="emoji">༄</div>{" "}
          <span className="elementWords">Pressure</span>
          <div className="elementProps">{props.pressure}</div>{" "}
        </div>
      </div>
    </div>
  );
}
