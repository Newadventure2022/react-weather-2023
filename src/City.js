import React from "react";
import axios from "axios";
import "./City.css";
export default function City() {
  function handleResponse(response) {
    alert(`The weather in Valencia is ${response.data.main.temp}°C`);
  }
  let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <h1>
      Valencia <span> 🔍 Form</span>
    </h1>
  );
}
