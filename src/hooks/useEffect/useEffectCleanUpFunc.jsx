import { useEffect, useState } from "react"

export const UseEffectCleanUpFunc=()=>{

    const[count,setCount]=useState(0);
    
    //todo- setInterval use Without useEffect
    //^ In React setInterval not use directly because Sometime output not get properly.
    // setInterval(()=>{
    //     setCount(count+1)    
    //     setCount(()=>count+1)
    //     setCount((prev)=>prev+1)            //^ all 3 condition output are same but condition 2,3 is better way because condition 1 count is directly increment.   
    // },1000)   
      
    //todo- setInterval use with useEffect but here we not use cleanup fun.
    // useEffect(()=>{    
    //   setInterval(()=>{
    //         // setCount(()=>count+1);          //o/p- 0-->1 then stop 
    //          setCount((prev)=>prev+1);       //o/p- 0-->2-->4-->6..
    //   },1000)
    //   },[]);                                   //^ here [] dependency array is empty it means useEffect run only first time when component is mount. but when count value change component will re-render at that time useEffect not run again.
    //^ Note- but here we get result and the o/p will change 0,2,4..   But why it is increment with 2 , because of 'Closure' , now after first render Parent is out from the global execution context, and setInterval will run and it's child have power(closure) to get variable value in memory space  which is exist in parent but it's not get proper count value here because we pass previous value ,it's not get exact value, it get only stale value which is 2 in our case and it assume it's count actual value ,but it's not true

   //todo- setInterval with useEffect where cleanUp function use (for preventing memory leaks)
   //^ here we use cleanUp function because we want exact prev value ,so that cleanup fun clean previous value in memory space and setCount take updated value always
    useEffect(()=>{    
    const timer=setInterval(()=>{
           setCount((prev)=>prev+1)     
    },1000)
    return()=>clearInterval(timer);          //^ so here cleanup fun use 
    },[])           //^ useEffect run only one time because of empty dependency array ,after that we get value because of closure and cleanup fun. Clean the value in memory space so child get only current value which is 1 after first time component mount ,so we get right output- 0,1,2...

 //^ Note- if we want to re-run useEffect then we use [count] value in array dependency so when count value change useEffect will re-run and state value is update by fun. the output is same .

    return(
        <>
          <h1>clean up function use in useEffect</h1>
          <p>count:{count}</p>
        </>
    )

}