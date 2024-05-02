import "./styles/App.css";
import React from "react";
import NavMenu from "./NavMenu";
import ComputerHero from "./ComputerHero";
import IntroSection from "./IntroSection";
import LearningJourney from "./LearningJourney";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <ComputerHero />
      </header>
      <IntroSection />
      <LearningJourney />
    </div>
  );
}

export default App;
