import React from "react";
import "./Footer.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/Newadventure2022"
        target="_blank"
        rel="noreferrer"
        className="Visit"
      >
        Created with React{" "}
        <span>
          {" "}
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        Open-source code <span className="my-name">by Celia Corona-Doran</span>
      </a>
    </div>
  );
}
