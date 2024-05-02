import React, { useState, useEffect, useRef } from "react";
import "./styles/NavBar.css";
import gizmo from "./imgs/3d_gizmo.svg";

export default function NavBarMenu() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="NavMenu" ref={menuRef}>
      <div
        className="Menu-Trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={gizmo} alt="Drop-down Menu Toggle"></img>
      </div>
      <div className={`Dropdown-Menu ${open ? `active` : `inactive`}`}>
        <ul>
          <DropdownItem url="<foundation/>" text="Home" />
          <DropdownItem url="./foundation" text="> Foundation" />
          <DropdownItem url="/" text="> Exploration" />
          <DropdownItem url="/" text="> Inspiration" />
        </ul>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <a href={props.url}>{props.text}</a>
    </li>
  );
}
