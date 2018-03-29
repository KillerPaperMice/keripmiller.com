import React from "react";
import FontAwesome from "react-fontawesome";


const SocialLinks = () => (
  <div style={{
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`
      }}>
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
          padding: `0.2em`,
          color: `rgb(24, 24, 24)`
        }}
      />
    </a>
    <a href="https://github.com/keripmiller" target="_blank" title="github">
      <FontAwesome
        name="github"
        size="2x"
        style={{
          width: `1.2em`,
          padding: `0.2em`,
          color: `rgb(24, 24, 24)`
        }}
      />
    </a>
  </div>
);

export default SocialLinks;
