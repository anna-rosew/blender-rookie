import React, { useState } from "react";
import "./styles/App.css";
import "./styles/ExplorationModal.css";
import ExplorationModal from "./ExplorationModal.js";

export default function ExplorationButton({
  buttonLabel,
  buttonImageSrc,
  buttonHeading,

  modalHeading,
  modalSubHeading,
  modalContent1,
  modalContent2,
  modalPrimaryButton,
  modalPrimaryButtonLink,
  modalSecondaryButton,
  modalSecondaryButtonLink,
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="exploration-button">
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
      <ExplorationModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        heading={modalHeading}
        subHeading={modalSubHeading}
        content1={modalContent1}
        content2={modalContent2}
        primaryButton={modalPrimaryButton}
        primaryButtonLink={modalPrimaryButtonLink}
        secondaryButton={modalSecondaryButton}
        secondaryButtonLink={modalSecondaryButtonLink}
      />
    </div>
  );
}
