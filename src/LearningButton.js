import React, { useState } from "react";
import "./styles/App.css";
import "./styles/Modal.css";
import Modal from "./Modal.js";

export default function LearningButton({
  buttonLabel,
  buttonImageSrc,
  buttonHeading,

  modalHeading,
  modalSubHeading,
  modalContent1,
  modalContent2,
  modalPrimaryButton,
  modalSecondaryButton,
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="learning-button">
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <img
          src={buttonImageSrc}
          alt="button icon"
          className="button-icon"
          id="button-icon"
        />
        <h3>{buttonHeading}</h3>
        <p>{buttonLabel}</p>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        heading={modalHeading}
        subHeading={modalSubHeading}
        content1={modalContent1}
        content2={modalContent2}
        primaryButton={modalPrimaryButton}
        secondaryButton={modalSecondaryButton}
      />
    </div>
  );
}
