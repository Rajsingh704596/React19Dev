//? fetch api data using promise method(.then.catch method)
//? Handling loading state and Error state 

import { useEffect, useState } from "react";

export const FetchApiDataUsingPromise=()=>{

    const[apiData,setApiData]=useState(null);     //by default we get null value when fetch data take time , so that's why we use loading state . 
    const[loading,setLoading]=useState(true);     
    const[error,setError]=useState(null);
      
    const Api="https://pokeapi.co/api/v2/pokemon/pikachu";  //this api is object form ,here is no array exist 
         
    const fetchPokemon=()=>{
        fetch(Api)                         //Api call
          .then((res)=>res.json())         //response data change into json formate
          .then((data)=>{
            setApiData(data);              //data store in state variable using updated function
            setLoading(false);          //loading state value is change into false 
          })
          .catch((err)=>{
            console.log(err);
            setError(err);
            setLoading(false);         //if error occur then loading state value change so the error state show in ui
        })      
    }

    useEffect(()=>{
        fetchPokemon();   //fun call
    },[] );    // here,[] array dependency make sure useEffect only run one time when functional component mount , so Api call only one time.
    
    //if we not create loading state, so we use normal way to show loading screen like this
            // if(!apiData){
            //     return(
            //         <>
            //         <h1>Loading...</h1>
            //         </>
            //     )
            // }

    //^ handle loading state, when loading is true only return loading 
    if(loading){
        return(
            <>
            <h1>Loading...</h1>
            </>
        )
    }
    //^ handle error state ,when error is true then show error 
    if(error){
        return(
            <>
            {/* error state always access by 'error.message' because error is object, the message data property of an error instance is a human-readable description of the error. */}
            <h1>Error:{error.message}</h1>       
            </>
        )
    }

    // console.log(apiData);       //o/p- object inside multiple object property
//  if(apiData){
    return(
        <>
           <section>
            <header>
            <h1>Pokemon</h1>            
            </header>
            <figure>
                <img 
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name} 
                />
            </figure>
                <h1>{apiData.name}</h1>
                <p>Height:{apiData.height}</p>
                <p>Weight:{apiData.weight}</p>
                <p>Speed:{apiData.stats[5].base_stat}</p>
           </section>
        </>
    )
// }
}
