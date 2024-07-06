// first creating root element
const heading = React.createElement("h1", {}, "hello world from reactjs");
//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the root element
root.render(heading);
