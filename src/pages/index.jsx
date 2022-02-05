import React from 'react';
import { Helmet } from 'react-helmet';
import favIco from '../utils/favicon.png'
// components
import About from '../components/About';
import Contact from '../components/Contact';

const IndexPage = () => (<div>
  <Helmet>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    <link rel="shortcut icon" type="image/png" href={favIco} />
  </Helmet>

  <About />
  <Contact />
</div>)

export default IndexPage;
