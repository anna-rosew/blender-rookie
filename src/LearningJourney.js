import React from "react";
import "./styles/App.css";
import "./styles/LearningJourney.css";
import booksImage from "./imgs/books.png";
import plantImage from "./imgs/plant.png";
import mugImage from "./imgs/mug.png";

//Create media query for order of boxes
//Link buttons to pages
//Footer with smiley

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
            src={plantImage}
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
        <div>
          <h2 className="subtitle">
            - Learn the basic concepts at your own pace -
          </h2>
          <h1>Foundation</h1>
          <p>
            This is a comprehensive A-Z roadmap of the foundational principals
            and skills you'll need to start out with Blender. From navigating
            the software interface to creating your first animation, these steps
            will help you build a foundation of skills.
          </p>
          <button className="learn">Start Learning</button>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div>
          <h2 className="subtitle">- Expand and Build Your Skills -</h2>
          <h1>Exploration</h1>
          <p>
            This is a platform for those who have covered the basics of Blender
            and are wanting to try create more complex renders. If you've
            completed the <a href="/">Foundation Roadmap</a> or are already
            familiar with Blender, we recommend you jump here.
          </p>
          <button className="learn">Explore More</button>
        </div>
        <div>
          <img
            src={booksImage}
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div>
          <img
            src={mugImage}
            alt="Blender-editor-screenshot"
            className="img-responsive"
          />
        </div>
        <div>
          <h2 className="subtitle">- Get the creative juices flowing -</h2>
          <h1>Inspiration</h1>
          <p>
            When creating, it's sometimes hard to know where to start so here
            we've linked some communities and artists we recommend getting
            plugged into.{" "}
          </p>
          <button className="learn">Start Learning</button>
        </div>
      </section>
    </div>
  );
}
