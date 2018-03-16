import React from 'react';
import SingleProject from './SingleProject';

const Projects = () => (<div style={{
    display: `flex`,
    flexDirection: `column`,
    borderLeft: `10px solid rgb(200, 69, 14)`,
    marginBottom: `2rem`

  }}>
  <h3>Projects</h3>
  <SingleProject
    title={`Whiskr`}
    projectLink= {`https://whiskrapp.herokuapp.com`}
    tech={`React.js, Node.js, Express,js, Sass, Heroku`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>

  <SingleProject
    title={`Whiskr`}
    projectLink= {`https://whiskrapp.herokuapp.com`}
    tech={`React.js, Node.js, Express,js, Sass, Heroku`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>

  <SingleProject
    title={`Whiskr`}
    projectLink= {`https://whiskrapp.herokuapp.com`}
    tech={`React.js, Node.js, Express,js, Sass, Heroku`}
    description={`Senior Capstone project. A Tinder-style pet adoption app that connects users with pets in shelters using Petfinder's API.`}/>
</div>)

export default Projects;
