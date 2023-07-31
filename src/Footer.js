import React from "react";
import "./Footer.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      Created by
      <a
        href="https://celia-corona-doran2023.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="Visit"
      >
        <span className="my-name"> Celia Corona-Doran</span>{" "}
      </a>{" "}
      with React{" "}
      <span>
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </span>
      and open-sourced on{" "}
      <a
        href="https://github.com/Newadventure2022/react-weather-2023"
        target="_blank"
        rel="noreferrer"
        title="Link to Celia's GitHub"
      >
        {" "}
        <span className="github">GitHub</span>.
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}
