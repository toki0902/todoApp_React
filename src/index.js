import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AppCss from "./App.css";
import resetCss from "./reset.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
