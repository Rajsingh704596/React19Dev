//!Lifting the State Up in React-
//# Lifting State up is a pattern in React, where you move the state from Child Components to a common parent component, so that multiple child components can share and synchronize the state.
//# this ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions(such as events) to flow up.

//$ UseCase-  
//@ when we have two or more components that need to share tha same state, we should lift the state up to their nearest common ancestor.this allows these components to stay in sync and ensures that the state is managed in a single place and pass the data via props.

import { useState } from "react";


function LiftStateUp() {
  // Parent component - holds the state inputValue and the state handler setInputValue
    const[inputValue,setInputValue]=useState("");
  return (
    <div>
      <h1>Lifting State Up</h1>  <br />
      <InputValueComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue}/>
    </div>
  )
}
export default LiftStateUp;

export const InputValueComponent=({inputValue,setInputValue})=>{
    //Receives inputValue and setInputValue as props. it update the state via setInputValue when inputValue changes.

    // const[inputValue,setInputValue]=useState("");
    //^ sibling component-"DisplayComponent" ko bhi same state value ki need thi is li ya_ha(InputValueComponent) define useState ko lift up kar ke parent m define kar di ya ta ki props k through do no child m use m le sk_ke ,so is li ye InputValueComponent se ParentComponent m state (useState hook) lift up kar di ya
     
    return(
        <>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </>
    )
}

export const DisplayComponent=({inputValue})=>{
  //Receive inputValue as a prop and display the current inputValue. 
    return(
        <>
        <p>User type:-{inputValue}</p>
        </>
    )
}

//! Updating parent state from child and vice-versa-
//^ For Updating State of children from parent, we can use concept called "Lifting the state up", here we will lift the state from child to parent then pass that state down using props.(e.g- DisplayComponent)
//^ For Updating State of Parent from child, we can pass a function updates the state from parent to children as props, then children update it.(e.g- InputValueComponent)