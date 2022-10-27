import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import App from "./components/app";

require('./stylesheets/main.scss');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
