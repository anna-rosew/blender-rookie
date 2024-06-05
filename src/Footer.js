import React from "react";
import "./styles/App.css";
import mugImage from "./imgs/smiley.png";

export default function footer() {
  return (
    <div className="footer">
      <img src={mugImage} className="footer-img" alt="Smiley Face"></img>
      <p className="footer-text">
        <a
          href="https://annarosewain.netlify.app/"
          alt="Link to Anna-Rose Wain's Portfolio"
        >
          Anna-Rose Wain
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/anna-rosew/blender-rookie"
          alt="GitHub Repo for Blender Rookie Site"
        >
          Open Sourced on GitHub
        </a>
      </p>
    </div>
  );
}
