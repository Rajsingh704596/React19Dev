//!Component- 
//# it is essentially a javaScript function or class that return jsx
//# Components are building blocks of any react application
//# we can also use .js extension with React.js component but it's recommended to use .jsx to differentiate between regular JavaScript Files and React.js components

//todo-
//* Naming convention of component always- Pascal Case e.g(App.jsx) 
//* Naming convention of variable, regular javascript function , hooks, property inside object, fileName  -- camelCase  e.g(nameVariable)

  //$there is 2 way to create component in react.js
    //^ 1.class based component(older way)   
    //^ 2.Functional based component(modern way)



//Class based component 
// import React,{Component} from 'react'

// export class Welcome extends Component{
//     render(){
//          return <h1>hello,  {this.props.name}</h1>
//     }
// }


//Functional based component

// import React from 'react'

function Component() {
  return (
    <div>
        <Components/>
        <Components/>        
        <Components/>        
        <Components/>        
        <Components/>        

      {/* component is independent isolated(diff page )and used for reusable piece of code e.g header , section, footer */}

    </div>
  )
}
export default Component

const Components=()=>{
    return(
        <><h1>name: rock</h1>
        <p>description:the good way use in day</p>
        <p>details: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab culpa eveniet exercitationem nihil asperiores vel suscipit? Sunt, facilis. Rem ducimus reiciendis nam eius provident officiis quidem voluptas cupiditate ut accusantium. </p>
        </>
    )
}
