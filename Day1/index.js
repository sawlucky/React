// // first creating root element
// //
// //  <div>
// //  div
// //</div >
// //
// //
// //

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from reactjs"
// );
// //creating root
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", { id: "parent" }, "thi is parent");
// const child = React.createElement("div", { id: "cild" }, "this is child");

// //rendering the root element
// root.render(heading);
const heading = React.createElement("h1", { id: 1 }, "this is heading tag");
const parent = React.createElement("div", { id: 2 }, "this is parent");
const root = ReactDOM.createRoot(document.getElementById("root"));

//  <div id="1">
//    <div id="2">
//      <h1>this is me</h1>
//    </div>
//  </div>;
const div = React.createElement(
  "div",
  { id: 2 },
  React.createElement(
    "div",
    { id: 2 },
    React.createElement("h1", { id: "hh" }, "this is heading and i am nested")
  )
);
//<h1>this is me</h1>; if we want to create sibling than we need to place them inside array
//  <div id="1">
//    <div id="2">
//      <h1>this is me</h1>
//       <h2>this is me</h2>
//    </div>
//  </div>;
const div1 = React.createElement(
  "div",
  { id: 2 },
  React.createElement("div", { id: 2 }, [
    React.createElement("h1", { id: "hh" }, "this is heading and i am nested"),
    React.createElement("h2", { id: "hui" }, "this is heading and i am nested"),
  ])
);
root.render(React.createElement(React.Fragment, null, heading, parent));
root.render([heading, parent, div, div1]);
// root.render(parent);
