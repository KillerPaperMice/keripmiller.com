import React, { Component } from "react";
import Link from "gatsby-link";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCode from "@fortawesome/fontawesome-free-solid/faCode";
import styles from "../layouts/SingleProject.module.css";

class SingleProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.singleProjectContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={this.props.img} alt="Whiskr App" />
          <div className={styles.overlay}>
            <div className={styles.projectDescripion}>
              {this.props.description}
            </div>
          </div>
        </div>
        <p className={styles.proTitle}>
          {this.props.title}{" "}
          <a href={this.props.projectLink} target='_blank'>
            <FontAwesomeIcon icon={faCode} />
          </a>
        </p>
        <p className={styles.techStack}>Tech Stack: {this.props.tech}</p>
      </div>
    );
  }
}

export default SingleProject;
