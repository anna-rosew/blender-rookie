import "./styles/App.css";
import React from "react";
import NavMenu from "./NavMenu";

import ComputerHero from "./ComputerHero";
import IntroSection from "./IntroSection";
import LearningJourney from "./LearningJourney";
import Foundation from "./Foundation.js";
import Footer from "./Footer";
import Exploration from "./Exploration";
import Inspiration from "./Inspiration.js";

//Change background colours
//Link anchors to menu

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
      <Exploration />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default App;
