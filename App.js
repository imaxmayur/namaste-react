import React from "react";
import ReactDOM from "react-dom/client";

//we can use normal function also
const Title = function () {
  return React.createElement("h1", { id: "heading" }, "Namaste React 🚀");
};

//React element
const variable = <h1>React Element inside the components</h1>;

//Functional components
//We can directly write it without using return (implicit return) Only in arrow function
const HeadingComponent = () => (
  <div className="container">
    <Title />
    {Title()}
    {variable}
    <h1 className="heading">Hello from React functional components</h1>
  </div>
);

const headingJsx = <h1>Namste React from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
