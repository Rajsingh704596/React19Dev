//! useRef Hook in React to manage DOM elements and State easily-
//todo- Use Case:- (useRef ki help se kitne variable create kar skte hai jo ki object ki form m get hoge or unke update hone pr component re-render nhi hoga ,Note - for this we don't need to create useState because useState main use for re-render component when state value is update ,or not use value and onChange attribute because this part of controlled component.,but useRef is uncontrolled component)

//? useRef()-
//# useRef is a React Hook that lets you "reference a value that's not needed for rendering".
//# Unlike states , it's directly mutable.
//# we can access value of it's using "ourRef.current;"

//* Syntax-   
//         const variableName = useRef(null);      //here variableName provide object which value access by 'variableName.current'

//           console.log(variableName.current.value)     //here we get value inside 2 object 
//        return <input type={text} ref={variableName}/>    //here ref is reference which value name must be same define VariableName 


//$ UnControlled Components-
//# UnControlled components manage their own state internally and are typically used with Refs.
//# when we use useRef or dom element , it's uncontrolled component

import { useRef } from "react";
export const UseRefHook=()=>{
    
    // //@ In js-
    // const userName=document.getElementById("name");
    // const password=document.getElementById("password");

    //@ But React provide useRef hook for getting reference
    const userName=useRef(null);         //here null is initial value and we call useRef ,so this variable we use as a ref value in jsx
    const password=useRef(null);

    console.log(userName);       //o.p- {current: null}  , we get one object here one property is current which value , we assign initially null , so at first time current property value is null.
    //after one time save we get o/p- {current: input#name}
     
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        
        //@ In js-
        // console.log(userName,password);      //o/p- <input type="text" name="password" id="password" fdprocessedid="ryh3wq"></input>
        // console.log(userName.value,password.value);    //o/p- cs css

        //@In React-
        // console.log(userName.current);
        console.log(userName.current.value); //now userName(object) we get current property and inside it value    //o/p- cs
        console.log(password.current.value); //o/p- css
        
    }
    return(
    <div> 
       <h1>useRef Hook use</h1>
        <form onSubmit={handleSubmitForm}>
            Name: <input type="text" name="name" id="name" ref={userName} />{/* here we pass reference of userName by ref */}
            <br />
            password:<input type="text" name="password" id="password" ref={password}/>
            <br />
            <button type="submit">submit</button>
       </form>
    </div>    
        
    )
}