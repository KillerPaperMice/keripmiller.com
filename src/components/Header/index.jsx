import React, { Component } from "react";
import Sections from "./Sections";
import styles from "../../layouts/Header.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <h1>Keri P. Miller</h1>
          <Sections />
        </div>
      </div>
    );
  }
}

export default Header;
