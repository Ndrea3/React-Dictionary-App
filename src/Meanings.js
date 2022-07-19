import React from "react";
import Synonyms from "./Synonyms"


export default function Meanings(props){
    console.log(props.meanings);
    return (
      <div className="Meanings">
        <h4>{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function(definition, index){
            return (
              <div key={index}>
                <p>
                  {" "}
                  Definition: {definition.definition}
                  <br />
                  <em> Ex: {definition.example}</em>
                  <br />{" "}
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );

        })}

      </div>
    );  
}