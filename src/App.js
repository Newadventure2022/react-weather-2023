import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary">Hello!</button>
        <Weather />
      </header>
    </div>
  );
}

export default App;
