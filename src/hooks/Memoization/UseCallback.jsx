//! useCallback hook- It used for optimize application by memoizing functions. so function ko optimize kar ne k li ye useCallback hook ka use kar te h 

import { memo,useCallback } from "react";
import { useState } from "react"

export const UseCallback=()=>{

    const[count,setCount]=useState(0);

    // const Increment=()=>{
    //     setCount((prev)=>prev+1);
    // }
    // const Decrement=()=>{
    //     setCount((prev)=>prev-1);
    // }

    //@ but here we get issue agar ki_si bhi ek button pr click kar_te h do_no button component re-render ho rhe hai,to child component ko memo function m wrap kar de ge but tb bhi component re-render ho ga kyu ki fun as props pass ho rha hai or memo ko haar fun. ka new reference mile ga(kyu ki haar bar fun ka new instance create ho ga to us ka reference bhi change ho ga ) is li ye wo component ko re-render kar de ga , to hm useCallback hook ka use kar_ege ta ki fun ko optimize kar de tb har ba-ar button click pr memo ko same ref. wa la fun show ho ga to child component re-render nhi ho ga

    const Increment= useCallback(()=>{         //so ab fun. ko optimize kar li ya hai or us ka instance create kar li ya hai useCallback hook se to ab jb bhi fun call ho ga si-rf uss instance ko call ki ya jay-ega ,to us-ka ref. bhi same rhe-ga hme-sha
        console.log("increment inside");
         setCount((prev)=>prev+1);
        },[])

    const Decrement= useCallback(()=>{
        console.log("Decrement inside");
         setCount((prev)=>prev-1);
        },[])

    return(
        <>
        <p>Count:{count}</p>
        <Button Click={Increment}>Increment </Button>
        <Button Click={Decrement}>Decrement </Button>
        </>
    )
}


    // //^ Button Component without memo
    // const Button=({Click,children})=>{
    //     console.log(`Rendering button: ${children}`);

    //     return(
    //         <>
    //         <button onClick={Click}>{children}</button>
        
    //         </>
    //     )

    // }

//^ Button Component with memo function (so ab ye first time parent component render pr render ho ga)
// eslint-disable-next-line react/display-name
const Button=memo(({Click,children})=>{
    console.log(`Rendering button: ${children}`);

    return(
        <>
        <button onClick={Click}>{children}</button>
    
        </>
    )

})



//! Conclusion-- "2 combination must important for parent (useMemo hook/useCallback) or child (always memo fun use)"
//# either "use memo fun. with useMemo hook" for value optimize and prevent component re-render if props (obj/fun/value) not change
//# or "use memo fun. with useCallback hook" for function optimize and prevent component re-render if props (obj/fun/value) not change

//^ useCallback hook- function ko optimize kar ne k li ye
//^ useMemo hook- Values ko optimize kar ne k li ye
//^ React.Memo/memo fun- child component ko fal-tu re-render hone se bach_ane k li ye jb tk us me props change na ho 