import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    console.log(props)
    return (
        <div className="Phonetic-Text">{props.phonetics.text} {""}|{""} <a href={props.phonetics.audio} rel="noreferrer" target= "_blank">Listen</a> 
        <br/>
        </div>
        
    );
}