import React from "react";
import "./styles/App.css";
import "./styles/LearningJourney.css";

export default function LearningJourney() {
  function SectionSummary(props) {
    return (
      <section className="grid grid-2-columns">
        <div>
          <img
            src={props.imgUrl}
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
        <div>
          <h2>{props.subtitle}</h2>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </section>
    );
  }

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
        description="This is a comprehensive A-Z roadmap of the foundational principals and skills you'll need to start out with Blender. "
        imgUrl=""
      />
    </div>
  );
}
