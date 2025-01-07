//In react component can't return multiple element without a wrapper div ,
//if we wrap inside div that means extra node create

//In React 16 introduced Fragments, which allow components to return multiple elements without adding extra nodes to the dom.

// import React from "react"
// import { Fragment } from "react"
export const Fragments=()=>{

// array of keys- here extra node not create ,we just need to pass the key inside component and wrap in array 
// return ([ <Check key='1'/> , <Check key='2'/> ,<Check key='3'/>])

//React.Fragment- here extra node not create just wrap in <div id="root">...</div>
// return(
//     <React.Fragment>
//         <Check/>
//         <Check/>
//         <Check/>

//     </React.Fragment>
// )

//Fragment- 
// return(
//     <Fragment>
//           <Check/>
//           <Check/>
//           <Check/>
//           <Check/>
//      </Fragment>
// )

return(
    //short hand way of Fragment -<></>
    <>   
    <Check/>
    <Check/>
    <Check/>
    </>
)

}

const Check=()=>{
    return <h6>components</h6>
}


//Q. why can't we return multiple element at the same time?
//ans. as After jsx is compiled , it is converted  to normal java script object, you can't return multiple javascript object at the same time