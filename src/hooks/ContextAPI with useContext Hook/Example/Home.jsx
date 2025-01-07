//# step 3 to get data using useContext hook , make sure where we use useContext hook that must to be direct children of our provider component (here BioProvider is provider component)

import { useContext } from "react"
import { BioContext } from "./BioProvider"

export const Home=()=>{
    
    //^here we use useContext hook to get value from Provider component(BioProvider), and also pass Context Component(BioContext) as a parameter.

    // const name=useContext(BioContext);     //@when single value pass then get like this

    const {name,Id}=useContext(BioContext);   //@when multiple value pass then get like this first destructuring

   
     return <p>Consumer: Child component 1 `get multiple value: Name is {name} and id is {Id}`from Context API( which is WareHouse) Using useContext Hook</p>
    }