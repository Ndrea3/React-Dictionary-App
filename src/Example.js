import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
        <em className="example"> Example: {props.example}</em>
     
    );
  } else {
    return null;
  }
}
