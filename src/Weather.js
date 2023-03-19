import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import City from "./City";
import MidSection from "./MidSection";
import Icon from "./Icon";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
    return (
      <div className="weather">
        <header>
          <div className="row">
            <div className="mainCity col-sm-4">
              <City />
              <div>Day & date</div>
              <div className="temperature">
                21° <span className="description fw-bold">Sunny</span>
              </div>
            </div>
            <div className="middleSection col-sm-4">
              <Search />
              <div className="icon">
                <Icon />
              </div>
            </div>
            <div className="mainSecondary col-sm-4">
              <div className="unit-parent">
                <div className="unit">
                  <span className="celsius">C</span> /{" "}
                  <span className="fahrenheit">F</span>
                </div>
              </div>
              <div className="units">Units</div>
              <ul className="otherCities">
                <li>
                  <div className="cities-element dublin">Dublin</div>
                </li>
                <li>
                  {" "}
                  <div className="cities-element auckland">Auckland</div>
                </li>
                <li>
                  {" "}
                  <div className="cities-element newYork">New York</div>
                </li>
                <li>
                  {" "}
                  <div className="cities-element sanJose">San Jose</div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <MidSection />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
