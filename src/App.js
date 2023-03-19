import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Valencia" />{" "}
      </div>
    </div>
  );
}

export default App;
