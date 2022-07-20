import React from "react";

export default function Phonetics(props){
    console.log(props)
    return (
        <div classname="Phonetic-Text">{props.phonetics.text} {""}|{""} <a href={props.phonetics.audio} rel="noreferrer" target= "_blank">Listen</a> 
        <br/>
        </div>
        
    );
}