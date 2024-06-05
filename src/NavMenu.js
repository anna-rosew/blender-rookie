import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";
import gizmo from "./imgs/3d_gizmo.svg";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="NavMenu" ref={menuRef}>
      <div className="Menu-Trigger" onClick={handleMenuToggle}>
        <img src={gizmo} alt="Drop-down Menu Toggle" />
      </div>
      <div className={`Dropdown-Menu ${open ? "active" : "inactive"}`}>
        <ul>
          <li>
            <Link
              to="computerHero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="foundation"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenuItemClick}
            >
              Foundation
            </Link>
          </li>
          <li>
            <Link
              to="exploration"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenuItemClick}
            >
              Exploration
            </Link>
          </li>
          <li>
            <Link
              to="inspiration"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenuItemClick}
            >
              Inspiration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
