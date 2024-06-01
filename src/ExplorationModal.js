import React from "react";
import { createPortal } from "react-dom";
import "./styles/ExplorationModal.css";
import CloseIcon from "./CloseIcon";

export default function ExplorationModal({
  isOpen,
  onClose,
  heading,
  subHeading,
  content1,
  content2,
  primaryButton,
  primaryButtonLink,
  secondaryButton,
  secondaryButtonLink,
}) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-body">
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
          <p>{content1}</p>
          <div className="modal-tip" id="modal-tip">
            <p>{content2}</p>
          </div>
        </div>
        <div className="modal-buttons">
          <a
            href={primaryButtonLink}
            className="modal-button"
            onClick={onClose}
            target="_blank"
            rel="noreferrer"
          >
            {primaryButton}
          </a>
          <a
            href={secondaryButtonLink}
            className="modal-button"
            onClick={onClose}
            target="_blank"
            rel="noreferrer"
          >
            {secondaryButton}
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
