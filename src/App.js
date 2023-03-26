import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="backgroundColor ">
        <div className="container">
          <Weather defaultCity="Valencia" />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
