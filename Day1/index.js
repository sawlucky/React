// first creating root element
//
//  <div>
//  div
//</div >
//
//
//

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from reactjs"
);
//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, "thi is parent");
const child = React.createElement("div", { id: "cild" }, "this is child");

//rendering the root element
root.render(heading);
