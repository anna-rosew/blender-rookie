import React from "react";
import "./styles/App.css";
import "./styles/LearningJourney.css";
export default function LearningJourney() {
  return (
    <div className="LearningJourney">
      <h2>A Short Guide</h2>
      <h4>
        {" "}
        This is a simple breakdown of how to go about learning Blender. If
        you’re experienced, it’s recommended you skip to{" "}
        <a href="/" alt="Skip to exploration">
          Exploration
        </a>
      </h4>
      <SectionSummary
        title="Foundation"
        subtitle="Learn the basic concepts at your own pace."
      />
    </div>
  );
}

function SectionSummary(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>{props.title}</h1>
          <h4>{props.subtitle}</h4>
        </div>
        <div className="col-6">
          <img src={props.src} className="summary-img" alt={props.title} />
        </div>
      </div>
    </div>
  );
}
