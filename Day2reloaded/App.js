import React from "react";
import ReactDOM from "react-dom/client";
// browser dont understand  import and export so what nd
// this is not a normal js file it is module..
const heading = React.createElement(
  "h1",
  { id: "header" },
  "this is JavaScripts and i want  to master it"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
