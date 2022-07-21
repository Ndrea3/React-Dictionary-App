import React from "react";
import Meanings from './Meanings'
import Phonetics from "./Phonetics";

export default function SearchResults(props){
    console.log(props.results);
    if(props.results){
        return (
          <div className="Results">
            <section>
              <h2 className="word">{props.results.word}</h2>
              {props.results.phonetics.map(function (phonetics, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetics={phonetics} />
                  </div>
                );
              })}
            </section>
            <br/>
           
              {props.results.meanings.map(function (meanings, index) {
                return (
                  <section key={index}>
                    <Meanings meanings={meanings} />
                  </section>
                );
              })}
         
          </div>
        );
    } else {
        return null;
    }
    
}