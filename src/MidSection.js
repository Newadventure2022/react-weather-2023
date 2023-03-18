import React from "react";
import "./MidSection.css";

export default function MidSection() {
  return (
    <div>
      <div className="midSection">
        <div className="row">
          <div className="summary col-sm-6">
            {" "}
            <div class="big-box">Summary</div>
          </div>

          <div className="col-sm-6 d-flex">
            <div className="col-sm-2">
              {" "}
              <div className="humidity"> Humidity</div>
            </div>
            <div className="col-sm-2">
              <div className="wind"> Wind</div>
            </div>
            <div className="col-sm-2">
              {" "}
              <div className="pressure"> Pressure </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
