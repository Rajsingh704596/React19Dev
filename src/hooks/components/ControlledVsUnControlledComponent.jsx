//! Controlled Component vs UnControlled Component

//? Controlled Component- 
//# Controlled components in react are those "where form data is handled by React component store".  
    //* this means all 3 points need for controlled component:-
       //^ State Management:- The value of the input field is controlled by React state (useState or this.state in class component)
       //^ Event Handlers:- Changes to the input field (like typing into a text field) are handled by React event handlers(onChange, onBlur etc.)
       //^ State Updates:- When the user interacts with the form input, React state is updated the event handlers,and the input value reflects the current state value.

import { useState } from "react"
export const ControlledComponent=()=>{
    
    const[data,setData]=useState("")
    
     const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("data get from controlled component",data);
   }
    return(
        //here controlled component depend on value and event handler onchange attribute ( if we comments value attribute at that time error show component change from controlled to uncontrolled) 
        <>
        <form onSubmit={(event)=>handleSubmit(event)}>
        <p>Controlled component</p>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} 
         />
         <button type="submit">submit</button>
        </form>
        </>
    )
}

//? UnControlled Component:-
//# UnControlled components in React are those " where form data is handled by the DOM itself ".
  //* this means :-
    //^ Direct DOM Manipulation:- The value of the input field is controlled by the DOM(e.g document.getElementById ,etc.). It's not declarative way.
    //^ Event Handling:- changes are directly handled by DOM events(onChange,onBlur,etc)
    //^ Accessing Form Data:- Form data is accessed through refs or DOM traversal methods, not through React state.
    //^ useRef 

 export const UnControlledComponent=()=>{

   
    const handleSubmit=(event)=>{
        event.preventDefault();

       //* here we Take value with UnControlled component using Dom method
        const dataValue=document.querySelector("#inputName").value;
       // console.log(document.querySelector("#inputName"));    //o/p- <input id="inputName" name="name" type="text" fd_processed_id="2f7feo">
        console.log("data get from Uncontrolled component",dataValue);          //o/p -uss input field m put ki ga yi value show ho gi
    }

    return(
        <>
        <p>UnControlled component</p>
        <form onSubmit={handleSubmit}>
            <input id="inputName" name="name" type="text" />         {/*here if we use attribute value="rock" that means also uncontrolled */}
            <br />
            <button type="submit">submit</button>
        </form>
        </>
    )
 }   
 

 //? Controlled Component Pros and Cons-

 //$ Pros -
   //^ React has complete control over the input values, making it straight forward to implement features like validation and conditional formatting based on state.
   //^ Easier to handle form submission and integration with React's lifecycle methods.
   //^ Enables clear data flow and centralized state management within React components.

 //$ Cons -
   //^ Requires more code compared to uncontrolled components due to state management.
   //^ can lead to more re-renders if not optimized, although React handles this efficiently cases.  
   
 //At the end we mostly work with Controlled Component in React.  
    