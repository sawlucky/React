//  the fist thing is we created this using Javascript
// const root = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.innerHTML = "this is shah lucky";
// root.append(h1);
//
// now i want to create through react
// the first thing which we need to add Dom
// ReactDOM.createElement("we need to target where we want to place  our react code "-> document.getElementById("root"));
// we need to create React Element which we want to show inside div element in html file
const heading = React.createElement(
  "h1",
  { id: "header" },
  "Shah lucky the master:"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading2 = React.createElement(
  "h1",
  { id: "header" },
  React.createElement("h2", { id: "header2" }, "this is child"),
  "this is headingmain"
);

// now rendering div-div-its child-h1 and h2
// if we want to create a child of any element place it inside array [] like this....
const div = React.createElement(
  "div",
  { id: "div1" },
  React.createElement(
    "div",
    { id: "div2" },
    [
      React.createElement("h1", { id: "head1" }, "this is first heading"),
      React.createElement("h2", { id: "head2" }, "this is second heading"),
    ],
    "this is inside second div"
  ),
  "this was inside first div"
);
root.render([heading, heading2, div]);
