import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.component";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> //jsx element
);