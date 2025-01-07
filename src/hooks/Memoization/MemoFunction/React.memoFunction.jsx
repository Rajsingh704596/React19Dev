//! React.memo() / Memo function(after ver 19)-

//# The React.memo function is used for " memoization of functional components".
//# if the props of a memoized component have not changed, React skips the rendering for that component, using the cached result instead.
//# Do memoization only when necessary

//$ memo() is a 'higher-order component' that we can use to wrap components that we 'do not want to re-render' unless props within them change( if props change then re-render otherwise not re-render) e.g. export default memo(ChildComponent)


import { useReducer } from "react"
import {ReactMemoChildCount1, ReactMemoChildCount3} from "./ReactMemoChildCount";
import ReactMemoChildCount2 from "./ReactMemoChildCount";
export const ReactMemoCount=()=>{
      
    const reducer=(state,action)=>{

     if(action.type==="Increment"){
        return state+1;
     }

    }

    const[count,dispatch]=useReducer(reducer,0)

    return(
        <>
        <p>Parent component also render {count} time same as count value</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment count value</button>
       
        <ReactMemoChildCount1/>      {/*so child component not re-render when parent component re-render because it's wrap with memo fun. only one time component render */}  
        <ReactMemoChildCount2/> 
        <ReactMemoChildCount3/> 
        </>
    )
}

