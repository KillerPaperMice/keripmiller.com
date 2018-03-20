import React from "react";
import resumePdf from "../../utils/assets/Miller-TechResume2018.pdf";
// font awesome
import FontAwesome from "react-fontawesome";
// font awesome 5 icon
import FontAwesome5 from "@fortawesome/react-fontawesome";
import faFile from "@fortawesome/fontawesome-free-solid/faFileAlt";

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "tomato",
          textDecoration: "none",
          fontSize: "3.5rem",
          fontWeight: `normal`,
          fontFamily: `Monoton`,
          wordSpacing: "1rem"
        }}
      >
        {`Keri P. Miller`}
      </h1>
      <div
        className="socialMediaContainer"
        style={{
          paddingTop: `1.5em`,
          display: `flex`,
          flexWrap: `nowrap`
        }}
      >
        <a
          href="https://linkedin.com/in/keripmiller"
          target="_blank"
          title="linkedIn"
        >
          <FontAwesome
            name="linkedin"
            size="2x"
            style={{
              width: `1.2em`,
              padding: `0.2em`
            }}
          />
        </a>
        <a href="https://github.com/keripmiller" target="_blank" title="github">
          <FontAwesome
            name="github-alt"
            size="2x"
            style={{
              width: `1.2em`,
              padding: `0.2em`
            }}
          />
        </a>

        <a href={resumePdf} target="_blank" title="resume">
          <FontAwesome5
            icon={faFile}
            size="2x"
            style={{
              width: `1.2em`,
              padding: `0 0.1em`
            }}
          />
        </a>
        <a href="mailTo: miller.keripatricia@gmail.com" title="e-mail">
          <FontAwesome
            name="at"
            size="2x"
            style={{
              width: `1.2em`,
              padding: `0.2em`
            }}
          />
        </a>
      </div>
      <hr />
    </div>
  </div>
);

export default Header;
