import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="WeatherSearch">
      <div className="search-wrapper">
        <div className="weather-border">
          <div className="city-search">
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                id="city-search"
                placeholder="🔎 Enter a city..."
                autoComplete="off"
                autoFocus="on"
                className="form-control"
                onChange={props.handleCityChange}
                value={props.city}
              />
              <input type="submit" id="search-button" value="search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
