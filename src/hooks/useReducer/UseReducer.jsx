//! useReducer Hook-
//# it 'returns an array' containing the'current state and dispatch function'.
//# it's alternative way of useState for data store that basically use for complex project.

//* syntax-      const[state,dispatch]=useReducer(reducer,initialState);
    
  //^ here-
  //$ state- it's denote current state value.

  //$ Dispatch Function- it is used to send actions(which is form of object {type:"value"}) to the reducer function, which in turn updates the state based on the action's type and any associated data (as a payload we can add).
  
  //$ Reducer Function- A function that takes 2 arguments "the current state and an action" and return a new state (updated current state).

  //$ Initial State - The initial state value. (The initial state can be a simple value, an object, or even derived from a function if the initialization is complex.)


//todo- "Counter App with useReducer"

import { useReducer } from "react"

export const UseReducer=()=>{

    //@ Note- reducer function must be define before initialize useReducer hook   
    //^ reducer fun. take 2 argument -( state , action)

    const reducer=(state,action)=>{

      //   console.log(state,action);       //o/p- 0 {type: 'Increment'} 
         //^ here 0 is current state           
         //^ action is object {type: 'Increment'} that is passed by dispatch function and we can access this value using object property method -object.key

        if(action.type==="Increment"){
                return state+1;               //update current state      
        }

        if(action.type==="Decrement"){
                return state-1;               //return new state
        }
    }

    //@ useReducer hook initialize
    const[count,dispatch]=useReducer(reducer,0);
    // console.log(useReducer())     //o/p- [0,f]   here 0 is initial state, f is reducer function

    return(
        <>
        <div>
            <h1>Counter App with useReducer hook</h1>
            <p>Count value is: {count}</p>
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>       {/*dispatch function call and pass/send an action (as object form) to the reducer function */}
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        </div>
        </>
    )
}