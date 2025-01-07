//todo- here we create store using ContextApi and where we use 'useApi hook' instead of 'useContext' hook

import { use, useState } from "react";
// import { useContext } from "react";
import { createContext } from "react"

//@step 1 create context object (warehouse)
    export const ContextApi=createContext();

//@step 2 provider create
    export const ContextApiProvider=({children})=>{

        //^this state we pass as a value inside object
        const[value,setValue]=useState("")
         
        const[name,setName]=useState("Your name")
 
    return(
        <ContextApi.Provider value={{value,setValue,name,setName}}>
            {children}
        </ContextApi.Provider>
    )
}

//@step 3 useContext hook use in custom hook
//custom Hook
 export const useCustomHook=()=>{

    // const value=useContext(ContextApi)
    // here we use useHook , instead of useContext hook just replace the word
     const value=use(ContextApi);
    return value;
 }