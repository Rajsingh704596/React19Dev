//? Async Await & Try Catch to Fetch Api data

import { useState } from "react"
// import './pokemon.css'

export const AsyncAwait=()=>{
     const[apiData,setApiData]=useState(null)
     const[loading,setLoading]=useState(true)
     const[error,setError]=useState(null)

     const Api="https://pokeapi.co/api/v2/pokemon/pikachu";
      
     const fetchPokemon=async()=>{
        try {
            const res=await fetch(Api);
            const data=await res.json();
            setApiData(data);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
     }

     useState(()=>{
        fetchPokemon();           //function call
     },[])

     if(loading) return <div>Loading...</div>
     if(error) return <h1>{error.message}</h1>

     console.log(apiData);

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
}