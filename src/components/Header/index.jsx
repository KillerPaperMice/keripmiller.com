import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'tomato',
            textDecoration: 'none',
            fontSize: '3.5rem',
            fontWeight: `normal`,
            fontFamily: `Monoton`,
            wordSpacing: '1rem',
          }}
        >
          {`Keri P. Miller`}
        </Link>
      </h1>
      <div className='socialMediaContainer'>
        {/*font awesome is not working*/}
        <FontAwesome name='rocket'/>
        <span>Linked In</span>
        <span>E-mail</span>
        <span>Resume</span>
      </div>
      <hr/>
    </div>
  </div>
)

export default Header
