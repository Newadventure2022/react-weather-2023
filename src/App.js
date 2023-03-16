import React from "react";
import Weather from "./Weather";
import City from "./City";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="weather">
          <div className="row">
            <div className="col-sm-8">Valencia</div>
            <div className="col-sm-4">Hello Friends</div>
          </div>
        </header>
        <Weather />
        <p>
          Valencia was founded as a Roman colony in 138 BC. Islamic rule and
          acculturation ensued in the 8th century, together with the
          introduction of new irrigation systems and crops. Aragonese Christian
          conquest took place in 1238, and so the city became the capital of the
          Kingdom of Valencia.
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
