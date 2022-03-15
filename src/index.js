import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/bootstrap-grid.css";
import "./assets/css/bootstrap-grid.css.map"
import App from "./App";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
