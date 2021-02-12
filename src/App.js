import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Welcome from "./components/Welcome";
import Bye from "./components/Bye"
import Clock from "./components/Clock"

const anonimo = <Welcome className="App" />;

function App() {
  return (
    <div>
      <Welcome name="Raphael" className="App" />
      {anonimo}
      <Bye />
      <Clock />
      <Clock name="Raphael" />
    </div>
  );
}

export default App;
