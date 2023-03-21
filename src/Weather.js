import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import MidSection from "./MidSection";

import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
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

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <header>
          <div className="row">
            <div className="mainCity col-sm-4">
              <h1>{weatherData.city}</h1>
              <div className="currentDate">Day & date</div>
              <div className="temp-display">
                <WeatherTemp
                  temp={Math.round(weatherData.temperature)}
                  unit={unit}
                />{" "}
              </div>{" "}
            </div>
            <div className="middleSection col-sm-4">
              <Search
                city={city}
                handleSubmit={handleSubmit}
                handleCityChange={handleCityChange}
              />
              <div>
                {" "}
                <span className="description mt-5 fs-3 fw-bold">
                  {weatherData.description}
                </span>
              </div>
              <div className="WeatherIcon">
                <div>
                  <WeatherIcon code={weatherData.icon} />
                </div>
              </div>
            </div>
            <div className="mainSecondary col-sm-4">
              <div className="unit-parent">
                <div className="temp-display"></div>
                <div className="unit" id="temp-display">
                  <span className="celsius" onClick={convertCelsius}>
                    C
                  </span>{" "}
                  /
                  <span className="fahrenheit" onClick={convertFahrenheit}>
                    F
                  </span>
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
        <div className="otherElements">
          <MidSection
            humidity={Math.round(weatherData.humidity)}
            wind={Math.round(weatherData.wind)}
            pressure={Math.round(weatherData.pressure)}
          />
        </div>
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
