import React from "react";
import "./styles/App.css";
import "./styles/LearningJourney.css";

export default function LearningJourney() {
  return (
    <div className="LearningJourney">
      <div className="learning-heading">
        <h2>A Short Guide</h2>
        <h4>
          {" "}
          This is a simple breakdown of how to go about learning Blender. If
          you’re experienced, it’s recommended you skip to{" "}
          <a href="/" alt="Skip to exploration">
            Exploration
          </a>
        </h4>
      </div>
      <section className="grid grid-2-columns">
        <div>
          <img
            src="/"
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
        <div>
          <h2>Learn the basic concepts at your own pace.</h2>
          <h1>Foundation</h1>
          <p>
            This is a comprehensive A-Z roadmap of the foundational principals
            and skills you'll need to start out with Blender.
          </p>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div>
          <h2>Learn the basic concepts at your own pace.</h2>
          <h1>Foundation</h1>
          <p>
            This is a comprehensive A-Z roadmap of the foundational principals
            and skills you'll need to start out with Blender.
          </p>
        </div>
        <div>
          <img
            src="/"
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div>
          <img
            src="/"
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
        <div>
          <h2>Learn the basic concepts at your own pace.</h2>
          <h1>Foundation</h1>
          <p>
            This is a comprehensive A-Z roadmap of the foundational principals
            and skills you'll need to start out with Blender.
          </p>
        </div>
      </section>
    </div>
  );
}
