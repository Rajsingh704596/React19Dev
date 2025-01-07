//todo- ForwardRef is deprecate now after version 18 , we get ref in child component using props.ref
//! ForwardRef() - it's use when we need to "pass useRef parent to child component". 


//# React forwardRef allows parent components to move down (or "forward") ref to their children. it gives a child component a reference to DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.

//* syntax- use in child component
//      React.forwardRef((props,ref)=>{})         //it takes a function with props and ref arguments


import { useRef,forwardRef,useId } from "react";
export const ForwardRef=()=>{

    //useRef variable define
    const Name= useRef(null);
    const Password=useRef(null);

    //submit function define
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(Name.current.value);
        console.log(Password.current.value);

    }

    return (
        <>
         <form onSubmit={handleFormSubmit}>
           <BeforeVersion19 label="name" ref={Name} />      {/*here we pass label as a prop where value name is directly pass  and ref also pass into child component*/}
            <br />
           <BeforeVersion19 label="password" ref={Password} />
           <br />  
           {/* <AfterVersion19 label="name" ref={Name} />
           <br />
           <AfterVersion19 label="password" ref={Password} />
           <br /> */}
           <button type="submit">submit</button>
           </form>
        </>
    )
}

//* Before Version 19 we get ref like this in Child Component
 // eslint-disable-next-line react/display-name
 const BeforeVersion19=forwardRef((props,ref)=>{
       const id=useId();          //here useId hook use for provide unique id dynamically for every time when component render
      return(
        <>
        <label htmlFor={id}>{props.label}</label>
        <input type="text" ref={ref}/>
        </>     
      )
    }
  );
  
  
// //todo- after Version 19 we get ref like this as a props in child component 
//  const AfterVersion19=(props)=>{
//        const id=useId();          //here useId hook use for provide unique id dynamically for every time when component render
//       return(
//         <>
//         <label htmlFor={id}>{props.label}</label>
//         <input type="text" ref={props.ref}/>
//         </>     
//       )
//     }

 