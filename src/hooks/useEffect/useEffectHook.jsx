//! useEffect Hook- 
//# it is used for "handling side effect(means deal with external data)" in functional component. 

//* syntax-        useEffect have 2 argument. first is callback function( that is basically return CleanUp function (it's optional)) and Second is array dependency.

    // useEffect(()=>{  //callback function
    //          //your side effect code here

    //     return()=>{            //here return() is cleanUp function
    //          //CleanUp code here(optional)
    //       };
    // },[Array of Dependencies]);

//todo-
//$ Initial Render-  when the component mounts(means first time component render), useEffect can run its effect function to perform operation like "data fetching".
//$ Dependencies- The second argument an 'Array of dependencies', which determines when the effect should re-run. "If any value in this array changes, the effect will re-run".
//$ CleanUp- useEffect can return a 'cleanup function' to clean up after the effect, 'such as unsubscribing from an event or clearing a timer'.

//? what is side effect?
//# A side effect is "any operation that affects something outside the scope of a function (pure function).
//# In React, side effects are managed using hooks like useEffect to ensure they are handled in a controlled and predictable manner.

            // let count=0;
            
            //   function increment(){
            //     count=+1;            //modifies an external variable that is basically side effect 
            //   }
            // increment();
            // console.log(count);

//# but Not every time pure function have capability to deals with external data , so that's why we use useEffect to deal with external data.


//! Fetching Data as a side Effect-
//^ when we fetch data in React component , we performing a side effect because:-
    //$ External interaction:- Interacting with an external data source, such as an API or a Server.
    //$ State Updates:- the fetched data will usually update the component's state, causing a re-render.
    //$ Subscribing to or unsubscribing from a service.
    //$ Updating the browser's DOM.
    //$ logging data to the console.

import { useEffect, useState } from "react";
export const UseEffectHook=()=>{

    const[time,setTime]=useState();
    const[count,setCount]=useState(0)

    useEffect(()=>{
           console.log(count)
    },[count])        //if we not use count in array dependency so console.log only run one time when component render first time ,but here we use so useEffect fun call run when count state change. 

    // useEffect(()=>{
    //     const updateTime=new Date();
    //     setTime(updateTime.toLocaleTimeString());
    // },[])          //but here only time show one time when component mount

    //^if we want show real time and call back fun call time to time inside useEffect so we use setInterval ,so time (state variable) will change and component will re-render , but here if we use SetInterval Outside the useEffect ,it work same we get output ,but it's take memory space ,so useEffect provide cleanUp function where we use cleanUp SetInterval for preventing memory leak
    useEffect(()=>{
        setInterval(()=>{
            const updateTime=new Date();
            setTime(updateTime.toLocaleTimeString());
        },1000)   //1000 ms= 1 sec. so after one second callback fun again call by using setInterval
    },[])

    return(
        <>
        <h1>Time show using useEffect</h1>
        <p>Time :-{time}</p>
      
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>count</button>
    
        </>
    )
}


  