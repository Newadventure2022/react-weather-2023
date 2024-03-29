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
                placeholder="Enter Location"
                autoComplete="off"
                autoFocus="on"
                className="form-control"
                onChange={props.handleCityChange}
                value={props.city}
              />
              <input
                type="submit"
                className="btn"
                id="search-button"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
