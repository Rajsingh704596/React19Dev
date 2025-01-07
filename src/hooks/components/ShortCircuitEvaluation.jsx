//! Short Circuit Evaluation:-
//# Short circuit evaluation is a technique used in javaScript where expression are evaluated from left to right.
//# this is often used in React to conditionally render components or execute code based on the truthiness of certain conditions.(In logical operations, evaluation stop as soon as the result is determined.)


//! Rules of Short Circuit Evaluation-
//# short circuit evaluation involves Logical operator (&&,||,??) and how they evaluate expression based on the truthiness of their operands.

//$ 1 Logical OR (||) -
//* Syntax- expression 1 || expression 2
//^ Rule- if expression 1 is truthy, return expression 1. Otherwise, return expression 2.
//  const result1 = false || "hello" ;   //o/p- "hello"
//  const result2 = true  || "World" ;   //o/p- true


//$ 2 Logical AND (&&) -
//* Syntax- expression 1 && expression 2
//^ Rule- if expression 1 is falsy, return expression 1. Otherwise, if expression 1 is truthy return expression 2.
//  const result1 = true && "hello"  ;    //o/p- "hello"
//  const result2 = false  && "World";    //o/p- false  


//$ 3 Nullish Coalescing (??) -
//* Syntax- expression 1 ?? expression 2
//^ Rule- if expression 1 is not null or undefined, return expression 1. Otherwise, return expression 2.
//  const result1 = null ?? "hello" ;          //o/p-"hello"
//  const result2 = undefined  ?? "World" ;    //o/p- "world"
//  const result3 =  '' ?? "Fallback"  ;     //o/p- ''    , empty string is not null value


import { useState } from "react"
export const ShortCircuitExample=()=>{

    const[login,setLogin]=useState(false);
    const[user,setUser]=useState("")

    return(
        <>
        <h1>
            ShortCircuit Evaluation
        </h1>
        <hr />
        {/* short circuit example */}
        {/* <p>{login?"You are login":"You are not login"}</p> */}
        {login && <p>You are logged in!</p>}

        {/* <p>{user?`hello ${user}`:"set user name"}</p> */}
        <p>{`${user}` || "set user name"}</p>
       
         <button onClick={()=>setLogin(!login)}>Toggle Login State</button>
         <button onClick={()=>setUser("Rock")}>Set User</button>
         <button onClick={()=>setUser("")}>Clear User</button>

            
        </>
    )
}