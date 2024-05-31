import React from "react";
import { createPortal } from "react-dom";
import "./styles/Modal.css";
import CloseIcon from "./CloseIcon";

export default function Modal({
  isOpen,
  onClose,
  heading,
  subHeading,
  content,
  primaryButton,
  secondaryButton,
}) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal">
      <div className="modal-container">
        <div className="modal-body">
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
          <p>{content}</p>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>{primaryButton}</button>
          <button onClick={onClose}>{secondaryButton}</button>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}