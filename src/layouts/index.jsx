import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({children, data}) => (<div>
  <Helmet title="Keri P. Miller | Full Stack Developer" meta={[
      {
        name: 'description',
        content: 'Keri P. Miller\'s portfolio page'
      }, {
        name: 'keywords',
        content: 'javascript developer, developer, fullstack, full stack, full stack developer, web developer, nyc, new york, brooklyn, keri miller, keri p miller, porttfolio'
      }
    ]}/>

  <Header/>
  <div style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0
    }}>
    {children()}
  </div>
</div>)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
