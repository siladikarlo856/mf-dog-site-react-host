import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const launchHeader = () => {
  import('home/mountHeader')
    .then(mountHeader => {
      mountHeader.default('#header');
    }) 
}

const App = () => (
  <div className="container">
    <div>Name: react-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>
      <button onClick={launchHeader}>Launch Header</button>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
