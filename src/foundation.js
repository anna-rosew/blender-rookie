import React from "react";
import LearningButton from "./LearningButton";
import "./styles/Foundation.css";
import "./styles/Section.css";
import "./styles/App.css";
import gizmo from "./imgs/mug.png";

// Sample image URL for demonstration purposes

const buttonsData = [
  {
    buttonLabel: "Button 1",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 1",
    modalHeading: "Modal Title 1",
    modalSubHeading: "Modal SubHeading 1",
    modalContent: "Content for Modal 1",
    modalPrimaryButton: "Primary Action 1",
    modalSecondaryButton: "Secondary Action 1",
  },
  {
    buttonLabel: "Button 2",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 2",
    modalHeading: "Modal Title 2",
    modalSubHeading: "Modal SubHeading 2",
    modalContent: "Content for Modal 2",
    modalPrimaryButton: "Primary Action 2",
    modalSecondaryButton: "Secondary Action 2",
  },
  {
    buttonLabel: "Button 3",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 4",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 5",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 6",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 3",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 3",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 3",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
    modalHeading: "Modal Title 3",
    modalSubHeading: "Modal SubHeading 3",
    modalContent: "Content for Modal 3",
    modalPrimaryButton: "Primary Action 3",
    modalSecondaryButton: "Secondary Action 3",
  },
  {
    buttonLabel: "Button 3",
    buttonImageSrc: gizmo,
    buttonHeading: "Heading 3",
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
