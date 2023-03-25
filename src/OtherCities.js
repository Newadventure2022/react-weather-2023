import React, { useState } from "react";
import axios from "axios";

export default function OtherCities(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <div className="cityText">
        {props.city} {Math.round(temperature)}°C
      </div>
    );
  } else {
    let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
    return <p>Loading for {props.city}...</p>;
  }
}
