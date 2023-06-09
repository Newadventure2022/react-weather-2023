import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="backgroundColor ">
        <img src="BG.jpeg" loading="lazy" alt="" className="bg-img"></img>
        <div className="container">
          <Weather defaultCity="Valencia" />{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
