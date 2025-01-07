//! Passing event handlers as props in React.js:- it is common pattern used to allow child components to communicate with parent components.
//? Useful for - Form handling(Update the form data passing event handler like onChange, onSubmit), user interaction(trigger specific action), State management(update state), Callback function(handle async operation)

export const PassingEventHandlersProps=()=>{

    const handleClick=(user)=>{
            alert(`hey ${user}`);
    }  
    const handle2Click=()=>{
          alert("function reference work ,parent fun call");
    }

    return(
           <>
           <Child onButtonClick={()=>{handleClick("Rock")}} onMouseEnter={handle2Click} />   {/* fun pass as Props value to child component , here onButtonClick & onMouseEnter is props*/}
           </>)
}

 const Child=(props)=>{

    const{onButtonClick ,onMouseEnter }=props;

    const handle3Click=()=>{
        alert("child component fun call");
  }

    return(
        <>
          <button onClick={onButtonClick} >click 1</button>                 {/*Note - onClick event handler use here inside child component */}
          <button onMouseEnter={onMouseEnter}>Hover me </button>
          <button onClick={()=>{handle3Click()}}>click more </button>
          <button onClick={handle3Click}>click again </button>
        </>
    )
    
 }