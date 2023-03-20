import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import State from "./Context/State";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <State>
      <App />
    </State>
  </Router>
);
