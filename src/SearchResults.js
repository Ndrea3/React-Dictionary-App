import React from "react";
import Meanings from './Meanings'
import Phonetics from "./Phonetics";

export default function SearchResults(props){
    console.log(props.results);
    if(props.results){
        return <div className="Results">
            <h2 className="word">{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetics, index){
                return (
                    <div key={index}> 
                    <Phonetics phonetics={phonetics}/>
                    </div>
)
            })}

            {props.results.meanings.map(function(meanings, index){
                return (
                <div key={index}> 
                <Meanings meanings={meanings}/>
                </div>);
            })}
            </div>;
    } else {
        return null;
    }
    
}