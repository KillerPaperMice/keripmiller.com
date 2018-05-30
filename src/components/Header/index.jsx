import React, { Component } from "react";
import Sections from "./Sections";
import Popup from "reactjs-popup";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import styles from "../../layouts/Header.module.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const contentStyle = {
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <h1>Keri P. Miller</h1>
          <Sections/>
          <Popup
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            trigger={open => <Hamburger open={open}/>}
            modal
            closeOnDocumentClick

          >
            {close => <Menu close={close}/>}
          </Popup>
        </div>
      </div>
    );
  }
}

export default Header;
