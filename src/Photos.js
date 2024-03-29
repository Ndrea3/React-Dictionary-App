import React from "react";
import "./Photos.css";


export default function Photos(props){
    console.log(props.photos);
    if(props.photos){
    return (
      <section className="photo">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="word-images"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
    
} else {
        return null;
    }
}
