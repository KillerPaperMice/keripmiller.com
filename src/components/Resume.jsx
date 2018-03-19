import React from 'react';
import styles from '../layouts/Resume.module.css';

const Resume = () => (<div className={styles.resumeContainer}>
  <h2>Resumé</h2>
  <div className={styles.resume}>
    <h3 className={styles.resumeHeader}>Technologies</h3>
    <div className={styles.resumeSection}>
      <p>
        <strong>Proficient:</strong>
        JavaScript, Express.js, Node.Js, React-Redux, Sequelize, PostgreSQL, Git, HTML, CSS
        <strong>Knowledgeable:</strong>
        Promises, jQuery, Bootstrap, Sass, GatsbyJs, Linux, Virtual Machines, Heroku
        <strong>Some Experience:</strong>
        Passport, OAuth, P5.js, Mocha, Chai, Python 3, GraphQL
      </p>
    </div>
    <h3 className={styles.resumeHeader}>Projects and Accomplishments</h3>
    <div className={styles.resumeSection}>
      <div className={styles.project}>
        <p>
          <strong>The Final Meltdown</strong>Developer | Jan 2018 - present | GITHUB: thefinalmeltdown.github.io/theFinalMeltdown/
          <br/>
          An open source VR app that uses A-frame to create an symbolic representation of the effects of climate change on the planet.
        </p>
        <ul>
          <li>Winner of the Red Hat Category Award Best Open Source Hack at SheHacks Boston 2018</li>
          <li>Used A-Frame animations to create shrinking iceberg animation
          </li>
          <li>Developed and designed project idea and outlined future goals for hackathon presentation
          </li>
        </ul>

      </div>
      <div className={styles.project}>
        <p>
          <strong>Sound&&Vision</strong>Solo Developer | Nov 2017 - Present | GITHUB: github.com/keripmiller/soundandvision
          <br/>An audio chat app that renders drawings as you speak.</p>
        <ul>
          <li>Practiced using the HTML canvas element to make drawings</li>
          <li>Collected user mic data to render shapes with P5.js and the window Navigator
          </li>
          <li>Used socket.IO to send user mic data to partners</li>
        </ul>
      </div>
      <div className={styles.project}>
        <p>
          <strong>Whiskr</strong>Developer | Nov 2017 - Present | GITHUB: whiskapp.herokuapp.com
          <br/>
          A progressive web app that connects users to local shelter animals in a Tinder like format.</p>
        <ul>
          <li>Integrated the petfinder api to fetch real pet and shelter data</li>
          <li>
            Uses React-Redux, Express and Sequelize</li>
          <li>Led development for Match Logic and Geolocation for app</li>
        </ul>
      </div>
    </div>
    <h3 className={styles.resumeHeader}>Work Experience</h3>
    <div className={styles.resumeSection}>
      <div className={styles.jobs}>
        <strong>J. Pocker</strong>
        | Accounts Payable Clerk Apr 2013-Aug 2017 | New York, NY Performed the accounts payable duties for a small family-owned business with 5 store locations through NY and CT.
        <ul>
          <li>Efficiently processed 100+ vendor invoices weekly</li>
          <li>Obtained proper information and data regarding invoice payments for tracking purposes</li>
          <li>Maintained the vendor database with accurate and current information</li>
          <li>Researched and resolved all payment problems for production</li>
          <li>Assisted head bookkeeper with accounts receivable tasks during busy seasons.</li>
        </ul>
      </div>
      <div className={styles.jobs}>
        <strong>Business Alternatives Inc.
        </strong>
        | eBay Store Manager Jun 2011-Apr 2013 | Bronx, NY Developed a service to curate and sell items for customers at a small business while I was a Data Entry Clerk.

        <ul>
          <li>Researched customer's inventory to sell and valued them accordingly</li>
          <li>Provided quality photos for every item listing and edited them in photoshop</li>
          <li>Wrote detailed listing descriptions for ~100 items weekly</li>
          <li>Tracked and reported customer's listed items and running earnings weekly</li>
        </ul>
      </div>
    </div>
    <h3 className={styles.resumeHeader}>Education</h3>
  </div>
  <div className={styles.resumeSection}>
    <p className={styles.education}>Fullstack Academy of Code | Grace Hopper Program | Dec. 2017</p>
    <p className={styles.education}>SUNY at Purchase College | B.A in Art History | Dec. 2012
    </p>
  </div>
    <button className={styles.resumeButton}>download PDF</button>
</div>)

export default Resume;
