import React from "react";
import Links from "./Links.js"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* add your <Links /> component here */}
      {props.bio && props.bio.trim() !== "" ? <p>{props.bio}</p> : null}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
