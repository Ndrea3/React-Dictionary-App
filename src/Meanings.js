import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms"


export default function Meanings(props){
    //console.log(props.meanings);
    return (
      <div className="Meanings">
        <h4>{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function(definition, index){
            return (
              <div key={index}>
                <p className="definition-context">
                  {" "}
                  Definition: {definition.definition}
                  <br />
                  <Example example={definition.example} />
                </p>
                <Synonyms synonyms={definition.synonyms} />
                
              </div>
            );

        })}

      </div>
    );  
}