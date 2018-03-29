import React from "react";
import SocialLinks from "./SocialLinks";

const onClick = e => {
  prevent;
};
const Contact = () => (
  <div
    id="contact"
    style={{
      display: `flex`,
      flexDirection: `column`,
      borderLeft: `10px solid rgb(8, 103, 59)`
    }}
  >
    <h2>Contact</h2>
    <div
      style={{
        margin: `10px 0`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignContent: `center`,
        flexWrap: `wrap`
      }}
    >
      <a href="mailTo: miller.KeriPatricia@gmail.com">
        <button
          style={{
            width: `100%`,
            whiteSpace: `nowrap`,
            border: `1px solid black`,
            borderRadius: `.5rem`,
            backgroundColor: `white`
          }}
          title="E-Mail"
        >
          Miller.KeriPatricia@gmail.com
        </button>
      </a>
      <SocialLinks />
    </div>
  </div>
);

export default Contact;
