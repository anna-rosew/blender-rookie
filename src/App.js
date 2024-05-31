import "./styles/App.css";
import React from "react";
import NavMenu from "./NavMenu";

import ComputerHero from "./ComputerHero";
import IntroSection from "./IntroSection";
import LearningJourney from "./LearningJourney";
import Foundation from "./Foundation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <ComputerHero />
      </header>
      <IntroSection />
      <LearningJourney />
      <Foundation />
      <Footer />
    </div>
  );
}

export default App;
