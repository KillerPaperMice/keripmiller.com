import React from 'react';
import styles from "../../layouts/Header.module.css";

const Sections = () => (
  <div className={styles.sectionContainer}>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#resume">Resumé</a>
    <a href="#contact">Contact</a>
  </div>
)

export default Sections;