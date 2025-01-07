//! useMemo hook-  expensive value(jo run hone pr jya_da time le) ko optimize kar ne m use ho ta hai child component re-render to ho ga pr duration time km rhe-ga kyu-ki expensive value direct cache se mil rha h


//* syntax- e.g-
//  const memoizedValue=useMemo(()=>{  //^ Computation logic here
//       return computedValue    
//     },[dependencies]); 

//# useMemo is a React Hook used for memoization.
//# Memoization is a technique to optimize performance by caching the results of expensive function calls.
//# Use it when you want to prevent unnecessary re-execution of a function on every render.  
//# Useful for optimizing performance in situations where calculations or operations are computationally expensive.
//# Overusing useMemo might lead to unnecessary complexity and impact readability. 



import { useMemo, useState } from "react"
export const UseMemo=()=>{
  
    const[count,setCount]=useState(0);
    return(
        <>

         <p>Parent Component render</p>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
         <ExpensiveCalculation/>
        </>
    )
}

//@ without useMemo hook -          {here we can also use React.Memo fun also but sometime it's not work properly with other type of example}
    // const ExpensiveCalculation=()=>{

        //^ when sum fun call cpu take time 
    //  const sum=()=>{
    //         let i=0;
    //         for(i=0;i<=1000000000;i++){
    //             i=i+1;
    //         }
    //         return i;
    //     }
    //     const total=sum();

    //     return <p>sum:{total}</p>
    // }

//@ with useMemo hook
  import{useRef}from 'react'
  const ExpensiveCalculation=()=>{
   
     const data=useRef(0);

     const sum=()=>{
            let i=0;
            for(i=0;i<=1000000000;i++){
                i=i+1;
            }
            return i;
        }

        const total=useMemo(()=>sum(),[]);    //useMemo hook m value return kar_na p-adt_a hai ya-ha fun return kar di ya hai to ye us-ki value ko cache m store kar le-ga or jb component re-render ho-ga to sum fun call nhi ho-ga, total se value mil jay-egi

        return (
        <>
       <p>Child component render{data.current +1}</p> 
        <p>sum:{total}</p>
        </>)
    }