//* Description: In this challenge, Create React Component that dynamically manages state using 'useState' and 'useEffect' hooks. component will include:-
//? 1. A counter that increment when a button is clicked.
//? 2. An Input Field where users can type their name.
//? 3. The Document title will update to show the current count.

import { useEffect, useState } from "react"

export const UseEffectChallenge=()=>{
    //^ Order matters! keep Hooks in the same order across renders
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")

    // console.log(name);       //same result we get in console
    useEffect(()=>{
        console.log(name);
    },[name])

    useEffect(()=>{
        // document.title=count;    //same work
        document.title=`count: ${count}` ;   //so when count value change title also change by using javascript 
    },[count])

    return(
        <>
        <p>Name:{name}</p>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <hr />
        <p>count :{count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}