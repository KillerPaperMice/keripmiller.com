import React, {Component} from 'react';
import Link from 'gatsby-link';
import styles from '../layouts/SingleProject.module.css'
import assets from '../utils/assets/placeholder.jpg'

class SingleProject extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (<div className={styles.singleProjectContainer}>
      <img className={styles.img} src={assets} alt='Whiskr App'/>
      <h4>{this.props.title}</h4>
      <p className={styles.techStack}>Tech Stack: {this.props.tech}</p>
      <p className={styles.projectDescripion}>{this.props.description}</p>
    </div>)
  }
}

export default SingleProject;
