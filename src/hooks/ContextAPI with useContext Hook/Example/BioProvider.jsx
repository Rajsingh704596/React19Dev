//! Here we create Context APi(a wareHouse) step by step-
import { createContext } from "react";

//#step-1 create Context object using createContext() method-
 export const BioContext = createContext();   
 //^here BioContext is component not variable.so the first letter must be uppercase.
 //^here createContext() is a method which return context component(e.g here BioContext)
// console.log(BioContext);            // o/p- {$$typeof: Symbol(react.context), _currentValue: undefined, _currentValue2: undefined, _threadCount: 0, Provider: {…}, …}       (type-object)

//#step-2 provider component create-
//^Provider m jit ne bhi children component hai(jo bhi bioProvider component m wrap hai) us se as parameter destructure kar ke get kar_ege
 export const BioProvider=({children})=>{
    
    //^Define value(e.g All states, data) here which we want to pass as a props to child 
     const name="Rock";
     const Id=7;

    //  console.log(children);      //o/p- Array(2)

    
    //@when pass single value then return like this- here value pass single curly braces
    // return <BioContext.Provider value={name}>
    //         {children}          {/*here we store that children for verification */}{/*Now we easily get value in children Component ,if we not pass children here then we not get any data in UI */}
    //     </BioContext.Provider>

    //@ when pass multiple value then return like this where value passed inside double curly braces{{}} where first curly braces is we go inside js ,second curly braces is we pass object e.g.{{name:name,Id:Id}} or when key or value are same we write like this-{{name,Id}}
    return(
        <BioContext.Provider value={{name,Id}}>
            {children}           {/*after define children here now Inside BioProvider all value get by this children(child component) */}
        </BioContext.Provider>
    )


 }