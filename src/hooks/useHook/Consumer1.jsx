import { useCustomHook } from "./UseApiHook"

export const Consumer1=()=>{
     
    //data get from custom hook-
    const{value,setValue}=useCustomHook();

    return(
        <>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <br />
        Child component 1 :{value};
        <hr />
        </>
    )
}