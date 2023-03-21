import React from "react";
import "./MidSection.css";

export default function MidSection(props) {
  return (
    <div>
      <div className="midSection">
        <div className="row">
          <div className="summary col-sm-6">
            {" "}
            <div className="big-box fs- fw-bold">Daily Summary</div>
            <p>
              Attention: This weather app is a work in progress. I am changing
              the design of my app and it still needed a lot of work. It is
              current ready only for the SheCodes React week five homework: due
              Monday, 20 March.
            </p>
          </div>

          <div className="col-sm-6">
            <div className="weatherElements d-flex">
              <div className="humidity weather-details">
                Humidity:<div className="emoji">💦</div>
                <div>{props.humidiy} </div>
              </div>
              <div className="wind weather-details">
                Wind: <div className="emoji">🌬️</div>
                <div>{props.wind}</div>
              </div>
              <div className="pressure weather-details">
                Pressure: <div className="emoji">🔃</div>{" "}
                <div>{props.pressure} </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
