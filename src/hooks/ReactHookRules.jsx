//! React Hook rules-
//# Hooks use for different React features in functional component
    //*  It start with use__  (prefix) e.g (useState,useEffect,useMemo,useContext,useReducer)
    //*  hooks can only be used at the "top level of your component".
    //*  Do not call hooks inside "loops conditions,or nested functions" , it shows error. e.g.-  if(user){ const[data,setData]=useState("") } 
        //^ yes we use updated fun. inside loop or nested fun.  e.g-  if(user){setData("Rock")};
    //* Call Hooks only from "React function Components or Custom Hook". Do not call Hooks from regular javaScript Function (normal function not component )or in Class Component (react).   
       //^ e.g    function regularFunction(){const[count,setCount]=useState(0);}  //this is incorrect bcz it's not a Functional component(Component name must be in Pascal Case), it's a regular function where all javaScript properties use ,only hooks are not call(define),but setFunction use }
    //* we can also "create own Custom hooks by creating functions starting with use_" .This Ensure that React can identify it as a Hook.(e.g. useFetch, useForm)   
    //* Ensure Hooks are called in the " exact Same order in every component ".this allow react to properly preserve the hook between re-renders.