import React from "react";
import Meanings from './Meanings'
import Phonetics from "./Phonetics";
import './SearchResults.css'

export default function SearchResults(props){
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