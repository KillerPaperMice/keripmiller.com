import React from 'react';
import styles from '../layouts/About.module.css';
import profile from '../utils/assets/keriYello.png';

console.log(styles);

const About = () => (
  <div className={styles.about}>
  <div className={styles.storyContainer}>
    <h3>From Art to Tech</h3>
    <p className={styles.story}>
      Spicy jalapeno bacon ipsum dolor amet pig bresaola boudin meatloaf corned beef sirloin buffalo. Tongue boudin tail kevin pancetta ground round. Burgdoggen cow tail leberkas boudin. Prosciutto strip steak kevin ground round, beef shank landjaeger rump. Venison rump drumstick leberkas ham t-bone, kevin buffalo swine tenderloin prosciutto pancetta.
    </p>
    <p className={styles.story}>
      Porchetta chuck pork chop swine flank picanha ribeye buffalo short loin sirloin drumstick. Pork pig tail leberkas ham hock chicken. Kielbasa biltong ribeye, ball tip tongue spare ribs rump. Burgdoggen pancetta porchetta swine pastrami ribeye pork belly kevin. Spare ribs ball tip pig leberkas jerky tongue pancetta. Doner andouille boudin, filet mignon landjaeger spare ribs picanha capicola salami sausage turducken rump hamburger meatball. Prosciutto tail frankfurter doner burgdoggen jerky meatloaf pastrami capicola buffalo flank meatball t-bone picanha sirloin.
    </p>
  </div>
  <img className={styles.profile} src={profile} alt='profile picture'/>
</div>)

export default About;
