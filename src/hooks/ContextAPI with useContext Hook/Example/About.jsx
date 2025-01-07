import { useContext } from "react"
import { BioContext } from "./BioProvider"

export const About=()=>{

    const {name,Id}=useContext(BioContext);

    return(
        <>
        <h2>Child component 2</h2>
        Name is {name} and Id is {Id}
        </>
    )
    
}