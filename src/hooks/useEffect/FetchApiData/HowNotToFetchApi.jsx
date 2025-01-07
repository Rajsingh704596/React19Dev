//! How Not To Fetch API data without useEffect in React:-
//? Problem: this method work , and we get the data but Main problem is in this method when we check network in dev tool , here Request post in infinite loop while we use actually only 3 request ,so that is totally wrong ,Reason is when update state value change component will re-render so fetch api again call (and this cycle run in infinite loop and at last memory space also finish)

//$ Promise- A Promise is an object representing the eventual Completion(response) and failure(reject) of an asynchronous operation.

//# Note-  fetch() method always return promise ,and we use .then() method to handle the promises for get value(data) inside the promises as a response and use .catch() method for error handling 

import { useEffect, useState } from "react"
export const HowNotToFetchApi=()=>{

    const[apiData,setApiData]=useState([]);  //create useState to store api data into an array  

    //^ Chaining method ...
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>res.json())              //^ data will get as res parameter and we need to convert into json formate using json() method
     .then((data)=> setApiData(data))      //^ and then store that data in state by update fun.
     //^ when we get all the data and want to show in UI, we need to use useState hook as per rule because data will change(vary) in future. so it will handle by useState hook. 
     .catch((error)=>console.log(error))   //^ if any of error occur .catch method catch that error and show ( when this fetch api call)


     //* Right way to Fetch API call using useEffect hook, so fetch api call only one time because we use empty dependency array so useEffect run only one time when functional component mount first time
        //  useEffect(()=>{
        //     fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((res)=>res.json())              
        //     .then((data)=> setApiData(data))      
        //     .catch((error)=>console.log(error))
        // },[])
      
    return(
         <>
           <ul>Data:
            {apiData.map((curData)=>{
                //here curData is array of object so either we use cueData.id to access object property or we use destructuring of object here
                //const{id,title}=curData;
            return(
             <li key={curData.id}>   {curData.title}  </li>
            )})}
            </ul>
         </>       
    )
}