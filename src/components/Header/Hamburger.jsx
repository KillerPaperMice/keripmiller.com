import React from "react";
import classnames from "classnames";
import "../../layouts/Hamburger.css";

const Hamburger = ({ open, ...props }) => {
  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" key="b1"/>
      <div className="bar2" key="b2"/>
      <div className="bar3" key="b3"/>
    </div>
  );
};

export default Hamburger;