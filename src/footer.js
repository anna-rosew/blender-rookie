import React from "react";
import "./styles/App.css";
import mugImage from "./imgs/smiley.png";

export default function footer() {
  return (
    <div className="footer">
      <img src={mugImage} className="footer-img" alt="Smiley Face"></img>
      <p className="footer-text">
        <a href="/" alt="">
          Anna-Rose Wain
        </a>{" "}
        |{" "}
        <a href="/" alt="">
          Open Sourced on GitHub
        </a>
      </p>
    </div>
  );
}
