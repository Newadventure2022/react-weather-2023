import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import MidSection from "./MidSection";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");

  function handleResponse(response) {
    console.log("response", response);
    setWeatherData({
      ready: true,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      coordinates: response.data.coord,
      apiKey: "5293d8454b519c30f6f6331f38c85b4c",
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
          <div>
            {" "}
            <div className="newSection">
              <Search
                city={city}
                handleSubmit={handleSubmit}
                handleCityChange={handleCityChange}
              />
            </div>{" "}
          </div>
          <div className="row">
            <div className="mainCity col-sm-6">
              <h1>{weatherData.city}</h1>
              <div className="date-heading">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="temp-display">
                <WeatherTemp
                  temp={Math.round(weatherData.temperature)}
                  unit={unit}
                />
              </div>

              <div className="WeatherIcon">
                <WeatherIcon code={weatherData.icon} />
              </div>
              <span className="description mt-5 fs-5">
                {weatherData.description}
              </span>
            </div>

            <div className="mainSecondary col-sm-6">
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
        <Forecast
          coordinates={weatherData.coordinates}
          apiKey="5293d8454b519c30f6f6331f38c85b4c"
        />
      </div>
    );
  } else {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
