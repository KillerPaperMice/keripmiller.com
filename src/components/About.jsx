import React from "react";
import styles from "../layouts/About.module.css";
import profile from "../utils/assets/keriYello.png";

console.log(styles);

const About = () => (
  <div id="about" className={styles.about}>
    <div className={styles.storyContainer}>
      <h3>From Art to Tech</h3>
      <p className={styles.story}>
        I'm a New York City developer with a passion for tech and art. I love
        making creative and fun projects that either make my life easier or
        happier.
      </p>
      <p className={styles.story}>
        I fell in love with coding after a surprise guest speaker gave a
        lecturer at a meetup about creating art with Processing. I absolutely
        loved it. I've always had thought of programming as just this
        utilitarian tool, I never had thought about it as a form of art itself.
        I started self teaching and going to other meetups. In 2017, I graduated
        Fullstack Academy's Grace Hopper Program and here I am today!
      </p>
    </div>
    <img className={styles.profile} src={profile} alt="profile picture" />
  </div>
);

export default About;
