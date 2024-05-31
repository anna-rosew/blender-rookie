import React from "react";
import LearningButton from "./LearningButton";
import "./styles/Foundation.css";
import "./styles/Section.css";
import "./styles/App.css";
import ui from "./imgs/UI.png";
import modelling from "./imgs/modelling.png";
import sculpting from "./imgs/sculpting.png";
import shading from "./imgs/shading.png";
import geometry from "./imgs/geometry-nodes.png";
import layout from "./imgs/layout.png";
import compositing from "./imgs/compositing.png";
import lighting from "./imgs/llighting.png";
import animating from "./imgs/animation.png";
import rendering from "./imgs/rendering.png";

// Sample image URL for demonstration purposes

const buttonsData = [
  {
    buttonLabel: "Step 1",
    buttonImageSrc: ui,
    buttonHeading: "UI/Navigation",
    modalHeading: "Modal Title 1",
    modalSubHeading: "Modal SubHeading 1",
    modalContent: "Content for Modal 1",
    modalPrimaryButton: "Primary Action 1",
    modalSecondaryButton: "Secondary Action 1",
  },
  {
    buttonLabel: "Step 2",
    buttonImageSrc: modelling,
    buttonHeading: "Modelling",
    modalHeading: "Modal Title 2",
    modalSubHeading: "Modal SubHeading 2",
    modalContent: "Content for Modal 2",
    modalPrimaryButton: "Primary Action 2",
    modalSecondaryButton: "Secondary Action 2",
  },
  {
    buttonLabel: "Step 3",
    buttonImageSrc: sculpting,
    buttonHeading: "Sculpting",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 4",
    buttonImageSrc: shading,
    buttonHeading: "Shading",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 5",
    buttonImageSrc: geometry,
    buttonHeading: "Geometry",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 6",
    buttonImageSrc: layout,
    buttonHeading: "Layout",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 7",
    buttonImageSrc: compositing,
    buttonHeading: "Compositing",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 8",
    buttonImageSrc: lighting,
    buttonHeading: "Lighting",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 9",
    buttonImageSrc: animating,
    buttonHeading: "Animating",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Step 10",
    buttonImageSrc: rendering,
    buttonHeading: "Rendering",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  // Add more buttons as needed
];

export default function Foundation() {
  return (
    <div className="foundation-section">
      <h1>Foundation</h1>
      <div className="centered-line"></div>
      <a href="https://www.example.com" className="download-button">
        DOWNLOAD BLENDER
      </a>
      <div className="grid-container">
        <div className="grid grid-5-columns">
          {buttonsData.map((data, index) => (
            <LearningButton
              key={index}
              buttonLabel={data.buttonLabel}
              buttonImageSrc={data.buttonImageSrc}
              buttonHeading={data.buttonHeading}
              modalHeading={data.modalHeading}
              modalSubHeading={data.modalSubHeading}
              modalContent={data.modalContent}
              modalPrimaryButton={data.modalPrimaryButton}
              modalSecondaryButton={data.modalSecondaryButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
