import React, { Component } from "react";
import styles from "../../layouts/Header.module.css";
import SocialLinks from "./SocialLinks";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false
    };
  }

  toggleContacts() {
    alert("clicked");
    // this.state.showContact
    // ? this.setState({ showContact: true })
    // : this.setState({ showContact: false });
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
            <a >
              Contact
              <div className={styles.contactLinks}>
                <SocialLinks />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
