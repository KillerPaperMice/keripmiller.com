import React from "react";
import "../../layouts/Hamburger.css";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><a href="#about">About</a></li>
      <li onClick={close}><a href="#contact">Contact</a></li>
    </ul>
  </div>
);

