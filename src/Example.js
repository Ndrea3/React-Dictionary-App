import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <em className="example">
        <em>
          <strong>Example:</strong>
        </em>{" "}
        {props.example}
      </em>
    );
  } else {
    return null;
  }
}
