import { useState } from "react";

function ArrayOfAnObjUseWithUseState() {
    //Array of object
    // const Language=[
        // {Lang:"MongoDB", id:"3"},
        // {Lang:"Node", id:"1"},
        // {Lang:"Express", id:""},
        // {Lang:"MySql", id:"4"},
        // {Lang:"PostgreSql", id:"5"}
    // ]

    //^ here we use Array Of an Object as a initial value inside useState and print same manner in Ui using map method 
    const[Language,setLang]=useState([  
        {Lang:"MongoDB", id:3},
        {Lang:"Node", id:1},
        {Lang:"Express", id:2},
        {Lang:"MySql", id:4},
        {Lang:"PostgreSql", id:5}])
    
       
  return (
    <div>
        <h1>Backend language</h1>
        <ul>
            {Language?.map((curElem,index)=>{
            return(
                <li key={index}>language is {curElem.Lang} and Process No is-{curElem.id}</li>
            )})}
        </ul>
        
    </div>
  )
}

export default ArrayOfAnObjUseWithUseState;
