import React from "react";
import "./styles/App.css";
import "./styles/Intro.css";

//Change spacing on load 

export default function IntroSection() {
  return (
    <div className="Intro">
      <h1>Introduction</h1>
      <div className="intro-para">
        <p className="intro">
          Like learning any software, approaching the world of Blender for the
          first time can be daunting and overwhelming - this is a short guide to
          get you started.
        </p>
        <p className="intro">
          Blender is a very cool 3D creation suite started in 2002 which
          supports the whole 3D creation pipeline. As a free, open-sourced tool,
          it offers unique opportunities for creators globally. Whether you’re
          an architect visualising a kitchen unit or a game developer using
          motion-tracking to create a realistic ninja, it’s widely used across a
          range of fields by hobbyists and professionals alike.
        </p>
        <p className="intro">Now, you get to have a go!</p>
      </div>
      <a href="/">
        <div id="dialog2" className="triangle_down1"></div>
      </a>
    </div>
  );
}
