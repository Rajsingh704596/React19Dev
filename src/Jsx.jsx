//# jsx stand for javascript xml ,used for write html code in javascript
//# jsx convert into object by babel and this object is react element(virtual dom)

//!babel-
//# Babel is a javascript compiler/ javascript Transpiler that coverts edge javascript into plan old ES5 JavaScript that can run in any browser.
//# In React, Babel is used to transpile modern JavaScript syntax into code that can run in all environments when writing React components.


import React from "react"; //after version 18 we don't need to write this line
export const Jsx = () => {
  //old way where we use createElement(with 3 argument-1.input type 2.props 3.children)method
  return React.createElement("h1", null, "Hello,royal");
};

console.log(React.createElement("h1", null, "Hello,royal")); //result show in object(virtual DOM -part of virtual dom tree)


//each jsx expression must have one parent element
//every jsx tag need to be closed ,e.g self-closing tags for elements that don't have children(it's also called void elements) - <img src="url"/>