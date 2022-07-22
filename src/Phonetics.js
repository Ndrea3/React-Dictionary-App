import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    console.log(props)
    return (
      <div className="Phonetic-Text">
        <a href={props.phonetics.audio} rel="noreferrer" target="_blank">
          Listen
        </a>{" "}
        <span className="phontext">{props.phonetics.text}</span>
        <br />
      </div>
    );
}