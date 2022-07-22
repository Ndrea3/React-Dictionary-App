import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if(props.synonyms) {
      return (
        <div>
          <ul className="synonyms">Similar:{" "}
            {props.synonyms.map(function (synonym, index) {
              return <li className="likeWords"key={index}>{synonym}</li>;
            })}{" "}
          </ul>
       </div>
      );
    } else {
        return null;
    }
}