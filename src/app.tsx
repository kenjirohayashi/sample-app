import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import Couter from "./Counter";

ReactDOM.render(
  <React.StrictMode>
    <Couter />
  </React.StrictMode>,
  document.getElementById("app")
);
