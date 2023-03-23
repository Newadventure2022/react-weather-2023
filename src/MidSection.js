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
              My React Weather App was created using HTML, CSS, React
              Javascript, Bootsrap, Flexbox, VS Code, Terminal, NPM, Axios, API,
              and Google Fonts. It is open-sourced on GitHub and hosted on
              Netlify{" "}
            </p>
          </div>

          <div className="col-sm-6 fs-6">
            <div className="weatherElements d-flex">
              <div className="humidity weather-details">
                Humidity<div className="emoji">𓄺</div>
                <div>{props.humidity} </div>
              </div>
              <div className="wind weather-details">
                Wind<div className="emoji">🌬️</div>
                <div>{props.wind}</div>
              </div>
              <div className="pressure weather-details">
                Pressure<div className="emoji">༄</div>{" "}
                <div>{props.pressure} </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
