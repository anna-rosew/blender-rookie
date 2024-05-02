import "./styles/App.css";
import React from "react";
import ComputerHero from "./ComputerHero";
import IntroSection from "./IntroSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComputerHero />
      </header>
      <IntroSection />
    </div>
  );
}

export default App;
