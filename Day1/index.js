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
root.render(React.createElement(React.Fragment, null, heading, parent));
root.render([heading, parent]);
// root.render(parent);
