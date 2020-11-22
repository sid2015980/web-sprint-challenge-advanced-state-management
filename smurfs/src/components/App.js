import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Are You Ready To SMURF?!</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}
