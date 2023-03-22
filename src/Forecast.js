import React, { useState, useEffect } from "react";
import axios from "axios";

import Day from "./Day";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weekly-border">
        <div className="weekly-forecast" id="forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-2" key={index}>
                    <Day forecast={dailyForecast} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${props.apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
