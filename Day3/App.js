import React from "react";
import ReactDOM from "react-dom/client";

// this will create objects ....
const heading = React.createElement(
  "h1",
  { id: "header", key: "21" },
  "This is Namaste-React"
);
// this is JSX  Which is similar likeHTML but no html
// it has differnce as if we want to give class in HTML we simply write class="";
// but in JSX  we write className=" ";
// if we have multiple lines of jsx just wrap up inside fragments or div
const Compo = () => {
  return (
    <div>
      <h1>hello</h1>
      <div>
        <h1>this is a functional based componenets</h1>
      </div>
    </div>
  );
};
// use of normal function
function Abc() {
  return <h1>this is from normal function</h1>;
}

// here we did component composition
const heading2 = (
  <div>
    <h2 className="heading2" style={{ color: "black" }}>
      This is JSX
    </h2>
    <Compo />
    <Abc />
    <h1>This JSX is not HTML, it is similar to HTML</h1>
  </div>
);

// this JSX=>is not javascript  and also a javascript why?
console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, <Compo />, heading2]);
// this is how we render a Components like <Compo/>
