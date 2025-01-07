// import { useContext } from "react";
// import { Context } from "./Provider"

import { useCustomHook } from "./Provider";

//1 st child component
export const UseContextConsumer1=()=>{

    //^ if we not use custom hook so here we define useContext hook 
    // const {user,age} =useContext(Context);

    //^ here we use custom hook so that only import required
    const{user,age}=useCustomHook();

    return(
        <>
        <h1>{user} is {age}</h1>
        </>
    )
}

//2 nd Child Component
export const UseContextConsumer2=()=>{

    //^ if we not use custom hook so here we define useContext hook 
    // const {user,age} =useContext(Context);

    //^ here we use custom hook so that only import required
    const{user,age}=useCustomHook();

    return(
        <>
        <h1>{user} is {age}</h1>
        </>
    )
}


