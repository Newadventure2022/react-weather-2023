import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <button className="btn btn-primary">Hello!</button>
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
