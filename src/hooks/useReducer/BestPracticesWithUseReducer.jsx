// todo - here for better approach we use object as a initial state which define before initialize useReducer hook, and In reducer function we use switch case instead of if else , and update state value with spread operator ,so existing data not change only value update in object.

//* syntax-  const[state,dispatch]=useReducer(reducer,initialState);
          //^ here const = variable(key)   ,   count= state variable/ the current state value  ,
          //^ dispatch fun.= To send action to the reducer fun.     [dispatch fun call using event handler in jsx & pass action(as a object{type:value})]
          //^ reducer fun. = take 2 argument (current state, action) and return a new state. 
          //@ Note - reducer fun. must be define before initialize useReducer hook


 import { useReducer } from "react"        
 export const BestPracticesWithUseReducer=()=>{

     //sometime initial state have multiple value so we can create object where multiple value pass into object form
     const initialState={
        count:0,
        incr:2,
        decr:2
    };
    
    const reducer=(state,action)=>{
        //^ here state is curState and it's object so we access value state.key

        //^ switch case is better than if else condition  , here every case we don't need to use  break statement because here we use return 
        switch(action.type){

            case "Increment":
           //  return { count: state.count+1}             //increment by 1                            
            return {...state, count: state.count + state.incr}     //spread operator used here so existing data(incr , decr) not change only count value is updated which we want to increment by 2         //if we not use spread operator sometime it's give issue(NaN) and after increment new object have only count value or rest key& value not store  

           case "Decrement":
          //   return {count: state.count-1}              //decrement by 1    
            return {...state, count: state.count - state.decr}            // decrement by 2

            case "Reset":
            return {...state, count: 0}            //spread operator use so count value update with existing data(incr , decr) store as a tease in object      

            default:                             //make sure default case must be return state  ( if no case match then default case execute)
            return state;
            }

    }
    

    const[curState,dispatch]=useReducer(reducer,initialState);           //here initialState we pass multiple value 
    //@ Note- initialState must be define before initialize useReducer hook
      

 return(
    <>
    <div>
        <h1>Best Practices with useReducer hook</h1>
        <p>{curState.count}</p>
        <button onClick={()=>dispatch({type:"Increment"})}> Increment </button>
        <button onClick={()=>dispatch({type:"Decrement"})}> Decrement </button>
        <button onClick={()=>dispatch({type:"Reset"})}> Reset </button>
     </div>
     </>   
 )
}

