import React from 'react';
import SingleProject from './SingleProject';

const Projects = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    borderLeft: `10px solid rgb(200, 69, 14)`,
  }}>
    <h3>Projects</h3>
    <SingleProject/>
  </div>
)

export default Projects;
