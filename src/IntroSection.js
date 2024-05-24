import React from "react";
import "./styles/App.css";
import "./styles/Intro.css";

export default function IntroSection() {
  return (
    <div className="Intro">
      <h1 className="intro-header">Introduction</h1>
      <div className="intro-para">
        <p className="intro-summary">
          Like learning any software, approaching the world of Blender for the
          first time can be daunting and overwhelming - this is a short guide to
          get you started.
        </p>
        <section className="grid grid-2-columns">
          <div className="intro-para one">
            <h2>What is 3D Design?</h2>
            <p>
              3D design is a diverse process involving the creation of virtual
              objects and environments with depth and volume using specialized
              software. Its applications span across architecture, product
              design, animation, gaming, and more. Architects rely on it to
              visualize structures and spaces, while product designers use it
              for prototyping. In animation and gaming, it's essential for
              crafting lifelike characters and immersive worlds. Beyond these
              industries, it finds use in fields like industrial design, film
              production, medical visualization, and virtual reality. Overall,
              3D design enables users to bring their ideas to life realistically
              and effectively across various domains.
            </p>
          </div>
          <div className="intro-para">
            <h2>What is Blender?</h2>
            <p>
              Blender is a powerful and versatile 3D creation suite that allows
              users to design and animate objects and environments in three
              dimensions. It provides specialized software for modeling,
              sculpting, texturing, rigging, animating, rendering, compositing,
              and motion tracking, making it a comprehensive tool for various
              creative endeavors. Started in 2002, Blender has grown into a
              popular platform used by professionals and hobbyists alike across
              industries such as animation, visual effects, gaming,
              architecture, and product design. As an open-source software,
              Blender is freely available to anyone, fostering a vibrant
              community of users who continually contribute to its development
              and expand its capabilities.
            </p>
          </div>
        </section>
      </div>
      <a href="/">
        <div id="dialog2" className="triangle_down1"></div>
      </a>
    </div>
  );
}
