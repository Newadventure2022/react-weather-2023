import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary">Hello!</button>
      </header>
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
