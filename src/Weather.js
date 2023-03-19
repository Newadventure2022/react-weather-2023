import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import MidSection from "./MidSection";
import Icon from "./Icon";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity("");

    const cityName = event.target[0].value;
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <header>
          <div className="row">
            <div className="mainCity col-sm-4">
              <h1>{weatherData.city}</h1>
              <div>Day & date</div>
              <div className="temperature">
                {Math.round(weatherData.temperature)}{" "}
                <span className="description fw-bold">
                  {weatherData.description}
                </span>
              </div>
            </div>
            <div className="middleSection col-sm-4">
              <Search
                city={city}
                handleSubmit={handleSubmit}
                handleCityChange={handleCityChange}
              />
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
