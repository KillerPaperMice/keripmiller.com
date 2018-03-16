import React from 'react';
import {Helmet} from 'react-helmet';
import Link from 'gatsby-link';
// components
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const IndexPage = () => (<div>
  <Helmet>
    // font awesome CDN
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
  </Helmet>

  <About/>
  <Projects/>
  <Contact/>
</div>)

export default IndexPage;
