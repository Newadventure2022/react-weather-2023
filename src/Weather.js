import React from "react";
import City from "./City";
import Footer from "./Footer";
import MidSection from "./MidSection";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <header>
        <div className="row">
          <div className="mainCity col-sm-8">
            <City />
            <div>Day & date</div>
            <div className="temperature">
              21° <span className="description fw-bold">Sunny</span>
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
      <Footer />
    </div>
  );
}
