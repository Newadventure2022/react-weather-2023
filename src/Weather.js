import React from "react";
import City from "./City";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <header className="weather">
        <div className="row">
          <div className="mainCity col-sm-8">
            <City />
            <div>Day & date</div>
            <div className="temperature">
              21° <span className="description">Sunny</span>
            </div>
          </div>
          <div className="otherCities col-sm-4">
            <ul>
              <li>
                <div className="units">C / F</div>
              </li>
              <li>
                <div className="dublin">Dublin</div>
              </li>
              <li>
                {" "}
                <div className="auckland">Auckland</div>
              </li>
              <li>
                {" "}
                <div className="newYork">New York</div>
              </li>
              <li>
                {" "}
                <div className="sanFrancisco">San Fancisco</div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
