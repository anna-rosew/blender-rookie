import "./styles/App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./NavMenu";
import ComputerHero from "./ComputerHero";
import IntroSection from "./IntroSection";
import LearningJourney from "./LearningJourney";
import Foundation from "./Foundation.js";
import Footer from "./Footer";
import Exploration from "./Exploration";
import Inspiration from "./Inspiration.js";

<div id="my-element">Hello World</div>;

export default function App() {
  useEffect(() => {
    console.log("Component rendered:");
    console.log(document.getElementById("computerHero"));
    console.log(document.getElementById("foundation"));
    console.log(document.getElementById("exploration"));
    console.log(document.getElementById("inspiration"));
  }, []);
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <header className="App-header">
          <ComputerHero id="computerHero" />
        </header>
        <IntroSection />
        <LearningJourney />
        <Foundation id="foundation" />
        <Exploration id="exploration" />
        <Inspiration id="inspiration" />
        <Footer />
      </div>
    </Router>
  );
}
