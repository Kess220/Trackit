import React from "react";
import ReactDOM from "react-dom";
import ResetStyle from "./style/ResetStyle.js";
import AppRouter from "./router/AppRouter.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
