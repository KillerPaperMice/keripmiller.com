import React from "react";
import "../../layouts/Hamburger.css";
import Sections from "./Sections";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}> Projects</li>
      <li onClick={close}> Resume</li>
      <li onClick={close}> Contact</li>
    </ul>
  </div>
);