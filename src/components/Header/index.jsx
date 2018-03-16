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
        display: `flex`,
        justifyContent: `space-between`,
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
      <div className='socialMediaContainer' style={{
          paddingTop:  `1.5em`,
        }}>
        <FontAwesome
          name='linkedin'
          size='2x'
          style={{width:`1em`,padding:`0.2em`}}
          />
        <FontAwesome
          name='github-alt'
          size='2x'
          style={{width:`1em`,padding:`0.2em`}}
          />
        <FontAwesome
          name='file'
          size='2x'
          style={{width:`1em`,padding:`0.2em`}}
          />
        <FontAwesome
          name='at'
          size='2x'
          style={{width:`1em`,padding:`0.2em`}}
          />
      </div>
      <hr/>
    </div>
  </div>
)

export default Header
