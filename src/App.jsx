import React from "react";
import ReactDOM from "react-dom";

import mountHeader from "home/mountHeader";

import "./index.css";

mountHeader('#header');

const App = () => (
  <div className="container">
    <div>Name: react-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
