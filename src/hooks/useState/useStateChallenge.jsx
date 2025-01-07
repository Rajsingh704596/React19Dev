//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

//? History show : all steps show with no of increment and decrement


import { useState } from "react"

export const UseStateChallenge=()=>{

    const[count,setCount]=useState(0);
    const[step,setStep]=useState(1);
    const[history,setHistory]=useState([]);  //history initial value is empty array  
    const[isActive,setIsActive]=useState(true);
   

    const handleStepChange=(value)=>{
        // value store in step state
        setStep(value)
       
    }

    const handleIncrement=()=>{
        //before button disable we need to extra condition use in fun. for prevent count value (cause some time value is 90 and we add 15 so count value is 105 show ,after that button disable attribute work ) 
        //condition check if count+step value is less than or equal to 100 then execute 
        if(count+step<=100){
        setCount(count+step);
        setHistory((prev)=>[...prev,{step,isActive}]);                    //here setHistory store array of object where step key store step value & 
    }   
    }

    const handleDecrement=()=>{
       //before button disable we need to extra condition use in fun. for prevent count value (cause some time value is 40 and we subtract 50 so count value is -10 show ,after that button disable attribute work ) 
        //condition before check if count-step value is greater or equal to 0 then execute 
        if(count-step>=0){
        setCount(count-step)

        setHistory((prev)=>[...prev,{step:step,isActive:!isActive}])}  
    
    }

    const handleReset=()=>{
        setCount(0)
        setHistory([])
    }


    return(
        <>
        <h1>use State challenge</h1>

            <p>
                 Count : {count} 
            </p>
           <p>Steps :
            {/* <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))}/> */}
            {/* here we "use Typecasting" and change value string into Number , so that step value add easily with count */}
            <input type="number" value={step} onChange={(e)=>handleStepChange(Number(e.target.value))}/>
            </p>
          
           <hr />
           {/* we have "disabled attribute" in button keyword ,so that we use condition when button will  disable */}
          <button onClick={()=>handleIncrement()} disabled={count>=100}>Increment</button>
          <button onClick={()=>handleDecrement()} disabled={count<= 0}>Decrement</button>
          <button onClick={()=>handleReset()}>Reset</button>

          <hr />
          <p>history :</p>
          <ul>{
              //history is basically array of object here we use map method to show history of step and increment/decrement
               history.map((curElem,index)=>{
                const{step,isActive}=curElem;     //destructuring of object so we don't need to use curElem.step, curElem.isActive
                return <li key={index}>
                        {index+1}:-- Step {step} is {isActive?"Increment":"Decrement"}
                        
                </li>
               })
            }</ul>

        </>
    )
}