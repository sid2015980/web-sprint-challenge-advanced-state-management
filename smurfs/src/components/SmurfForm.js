import React, { useState } from "react";
import { connect } from "react-redux";
import { postAction } from "../actions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Math.random(),
  });

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setNewSmurf("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={handleChange}
      />

      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={handleChange}
      />

      <label>Height: </label>
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={handleChange}
      />

      <button type="submit" onClick={() => props.postAction(newSmurf)}>
        Add A New Smurf
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { postAction })(SmurfForm);
