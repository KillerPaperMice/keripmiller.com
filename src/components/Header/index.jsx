import React, { Component } from "react";
import styles from "../../layouts/Header.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("HELLLLLO", this.state);
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <h1>Keri P. Miller</h1>
          <div className={styles.sectionContainer}>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Resumé</a>
            <a href="#"> Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
