import React from "react";
import "./App.scss";

const Smurf = (props) => {
  return (
    <div className="smurf" id={props.id}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}cm</p>
    </div>
  );
};

export default Smurf;
