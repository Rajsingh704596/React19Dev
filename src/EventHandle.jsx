//! Event Handling-
//* the process of capturing and responding to user interaction,such as clicks, keystrokes, or form submissions. 

//? Note- In JavaScript when we call fun-- then we get -- event object
//?       but in React .js we call fun.--  then we get -- SyntheticBase Event object

//todo--  Q. what is SyntheticBaseEvent in React?
//todo-- ans. React wraps the native browser event in something called a Synthetic Event. Synthetic events using for cross-browser compatibility and providing consistent event handling across different elements and browser.

//! Rules-  
//? Event Naming convention:-  Event name always write in camelCase and prefix-"on" always use    e.g onClick
//? Function Naming Convention:- Func. name should be Descriptive & reflect what the fun. does and prefix with "handle"  e.g handleClick                       

//* 5 way to function call when Event use:-

export const EventHandle=()=>{

//! 1. Normal Event & function call-
//   function handleButtonClick(){
//      alert("trigger Normal event & function call")
//   }
  const handleButtonClick=(event)=>{
    // alert('trigger fat arrow with normal fun call')
    console.log(event);      //o/p- SyntheticBaseEvent
    console.log(event.target);  //o/p- <button> click 1st type </button>
    console.log(event.type);   //o/p- click
  };
   
  

//! 2. Fat arrow function-
   const handle2ButtonClick=(event)=>{
     alert('trigger fat arrow fun')
     console.log(event);
   };
     
//!5. passing arguments to event handlers-
  const handleWelcome=(user)=>{
    console.log(`hey ${user}, Welcome`);
  }
     

 return(
    <>
    {/*//! function component with Named function */}
    {/*//* Note- Remember how we haven't called this function here we only reference use not call here using () , if we call this function here then it will run automatic without even click , we just need to pass reference and not call() here. */}
    <button onClick={handleButtonClick}>click 1st type</button>

    {/*//! Fat arrow fun. call :- always use parenthesis after fun.name ()=>{ fun() } 
    
    <button onClick={()=>{handle2ButtonClick()}}> click 2nd type </button>                // it work but not pass with syntheticBaseEvent

    //* Note- In React, event handlers receive the event object as an argument by default. however, when we use an arrow function directly in the onClick attribute without passing the event explicity, React doesn't pass the synthetic base event object to our handler function and calls our handler without passing arguments
    so always pass event as a argument fat arrow fun. call time*/}
    <button onClick={(e)=>{handle2ButtonClick(e)}}>click 2nd type</button>

    {/* //! Inline Event Handlers */}
    <button onClick={(event)=>console.log(event)}>Inline function</button>

    {/* //!Function Components with Inline Arrow function */}
    <button onClick={()=> alert("Inline event function")}>Inline Arr function</button>

    {/* //!Passing argument to Event handlers */}
    <button onClick={()=>{handleWelcome("Rock")}}>click user</button>
    <button onClick={()=>{handleWelcome("Root")}}>click user</button>
    </>

 )
}
