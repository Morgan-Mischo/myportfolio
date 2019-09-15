import React from "react";
import "./App.css";

import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>

      <div className="Landing">
        <Landing />
      </div>
    </div>
  );
}

export default App;
