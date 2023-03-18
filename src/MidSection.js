import React from "react";
import "./MidSection.css";

export default function MidSection() {
  return (
    <div>
      <div className="midSection">
        <div className="row">
          <div className="summary col-sm-6">
            {" "}
            <div class="big-box fs- fw-bold">Summary</div>
            <p>
              Pressure is usually around 1000hPa, and at sea level, it rarely
              gets lower than 950hPa or higher than 1050 hPa. So high pressure
              gives fine, dry weather – warm in summer (remember how glorious
              July was!) but with cold nights in winter. But on the other hand,
              low pressure brings clouds, rain and strong winds.
            </p>
          </div>

          <div className="col-sm-6">
            <div className="weatherElements d-flex">
              <div className="humidity weather-details">
                Humidity:<div className="emoji">💦</div>
                <div>75% </div>
              </div>
              <div className="wind weather-details">
                Wind: <div className="emoji">🌬️</div>
                <div>4km/h </div>
              </div>
              <div className="pressure weather-details">
                Pressure: <div className="emoji">🔃</div> <div>1015hPa </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
