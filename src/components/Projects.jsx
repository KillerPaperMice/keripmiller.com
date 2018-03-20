import React from 'react';
import SingleProject from './SingleProject';

import whiskrImg from '../utils/assets/screenShots/WhiskrLanding.png';
import cageImg from '../utils/assets/screenShots/CageMatchCart.png';
import finalMeltImg from '../utils/assets/screenShots/FinalMeltdownLanding.png'

const Projects = () => (<div style={{
    display: `flex`,
    flexDirection: `column`,
    borderLeft: `10px solid rgb(200, 69, 14)`,
    marginBottom: `2rem`

  }}>
  <h3>Projects</h3>
  <SingleProject
    title={`Whiskr`}
    img={whiskrImg}
    projectLink= {`https://whiskrapp.herokuapp.com`}
    tech={`React.js, Node.js, Express,js, Sass, Heroku`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>

  <SingleProject
    title={`The Final Meltdown`}
    img={finalMeltImg}
    projectLink= {`https:thefinalmeltdown.github.io/theFinalMeltdown/`}
    tech={`A-frame, VR, 3D, Open Source`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>

  <SingleProject
    title={`CageMatch`}
    img={cageImg}
    projectLink= {`http://cage-match.herokuapp.com/`}
    tech={`React.js, Node.js, Express,js, Sass, Heroku, React Notifications`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>
</div>)

export default Projects;
