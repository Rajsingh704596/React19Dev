//! useState --  
//# In React, State refers to an object the hold data and information about the components.
//# State managed within the component (just like variables declared in a function)
//? when state value is change , React 're-renders' the component to reflect these changes,& sync the update data into user interface ,, that's main reason why we state use.
//# State is dynamic and mutable ,it can be change over time in response to user actions, server responses, or other event change.

//$ all useCase types-  Local state, Global state, Fetch State, UI state, Server-Side Caching State, Mutable State, Complex State

//* Syntax-    const[data,setData]=useState(0)       
//* here, const= constant variable(key) , data= State variable(the current state value),  setData= a function that update the state variable(Updater function / setter function), (0)= the initial value of the state  

// export const UseState=()=>{

//     let a=0;
//     const function=()=>{
//          a++;
//          console.log(a);
//     }
     
//     return(
//         <>
//             <h1>value:{a}</h1>
//             <button onClick={function}>Number Increment</button>
//         </>
//     )
// }
//todo -Q. why we use useState instead of normal variable in react?
//todo- ans.- because React.js doesn't know that normal variable going to be changed in future , and that variable pass(render) into DOM , there is no way to re-render if variable update... For that reason , React.js provides a function called "useState". this type of function which starts with "use" is called hook.

//must import that hook from react
import { useState } from "react";

export const UseState=()=>{

    let [value ,setValue]=useState(0);
    // console.log(useState(0))       //o/p-(2) [0, ƒ]
    //   console.log(value)
     function handleButtonClick(){
        setValue(()=> value+1);                        
        console.log("inner",value);                    //inner-0  //inner-1  //inner-2
     }      
     console.log("outer",value);           //outer-0   //outer-1  //outer-2  //outer-3
    //! note- we never update state value directly ,make sure always update value inside setFunction(updated function) 
    return(
        <>
            <h1>value:{value}</h1>
            <button onClick={handleButtonClick}>Number Increment</button>
        </>
    )
}

//todo- Q. why do we need State in React?
//todo- ans-(1) Dynamic UI updates(e.g state hold the current value of input field and updating in real-time as the user types), 
//todo      (2)Interactivity(e.g.maintain state value for user action-such as clicks,form submission,or keyboard input),
 //todo     (3)Data Management(e.g fetch data from API and store it in the state ,which will be render the UI),
//todo      (4)Component communication(e.g state can lift parent components to manage state across multiple child component, ensuring consistent data flow and synchronization)

//? Using usesState in Function Components:- (we must know)
//^ 1. Initialization   2. Updating State  3.Preservation of State( React maintain state between renders. When a component re-render but doesn't reinitialize the state. instead , it uses the preserved state from the previous render. )

//@ Some points :-
//^ Function passed to useState() and setState() runs twice during development mode to prevent developers from running side effects.(because strict mode on by default)
//^ Side Effects in programming refer to changes or interactions that occur outside the scope of a function or block of code.
//? React.js compares previous state and new state using- Object.is() method, if it finds both are same then it will ignore re-rendering.
//^ React.js batches - all setStates() inside a event handlers and run them at the same time , if we try to access the value immediately after setting a state, then we will get old value as it's asynchronous.  e.g. inner or outer value






