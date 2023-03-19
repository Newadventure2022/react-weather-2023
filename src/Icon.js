import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Icon.css";

const defaults = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 125,
  animate: true,
};

const Icon = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default Icon;
