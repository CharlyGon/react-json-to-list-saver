import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/Global.css";
import "./styles/variables.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
