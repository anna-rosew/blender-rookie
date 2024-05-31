import React, { useState } from "react";
import "./styles/App.css";
import Modal from "./Modal.js";

export default function LearningButton({
  buttonLabel,
  buttonImageSrc,
  buttonHeading,
  modalHeading,
  modalSubHeading,
  modalContent,
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
        <img src={buttonImageSrc} alt="button icon" className="button-icon" />
        <h3>{buttonHeading}</h3>
        {buttonLabel}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        heading={modalHeading}
        subHeading={modalSubHeading}
        content={modalContent}
        primaryButton={modalPrimaryButton}
        secondaryButton={modalSecondaryButton}
      />
    </div>
  );
}
