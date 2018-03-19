import React from 'react';
import styles from '../layouts/About.module.css';
import profile from '../utils/assets/keriYello.png';

console.log(styles);

const About = () => (
  <div className={styles.about}>
  <div className={styles.storyContainer}>
    <h3>From Art to Tech</h3>
    <p className={styles.story}>
      I'm a New York City Developer with a passion for tech and art.
    </p>
    <p className={styles.story}>
      After college I had some spare time on my hands and wanted to make a portfolio website. I attend a beginner's html/css meetup with Women Who Code and during that class they had a surprise guest speaker that gave a lecture about creating art with Processing. I absolutely loved it. I've always thought of programming as just this utilitarian tool, I never had thought about it as a form of art itself. I branched out from HTML and CSS , started self teaching and going to other meetups. I got into Fullstacks Academy's Grace Hopper Program and here I am today.
    </p>
  </div>
  <img className={styles.profile} src={profile} alt='profile picture'/>
</div>)

export default About;
