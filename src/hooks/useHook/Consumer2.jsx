//todo- use hook used to get value and also it's work inside condition ,where useContext hook not work.

// import { useContext } from "react";
import { use } from "react";
import { ContextApi } from "./UseApiHook";

export const Consumer2=()=>{

    // const{name,setName}=useContext(ContextApi);

    // here we use use hook to get value instead of useContext hook
     const{name,setName}=use(ContextApi);

    //inside condition also work with 'use' hook-
        // const new=true;
        // let name,age;
            // if(new){
            //     ({name,setName}=use(ContextApi);)
            // } 

    return(
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        Child Component 2 :{name};
        <hr />
        </>
    )
}