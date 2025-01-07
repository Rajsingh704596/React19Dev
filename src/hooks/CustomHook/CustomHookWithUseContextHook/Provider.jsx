import { createContext, useContext } from "react"

export const Context=createContext();

export const Provider=({children})=>{

        const user="Rock";
        const age="25";

    return(
        <Context.Provider value={{user:user,age:age}}>
         {children}
        </Context.Provider>
    )
}


//? Custom Hook-   here useCustomHook is custom hook where prefix use add and inside, useContext hook return by variable.
 
export const useCustomHook=()=>{
    //here we define useContext hook so we just import CustomHook on that child where the props value want or we pass. 
    //this is useful when so many child pass props or we don't define useContext hook every time, we just pass CustomHook that helps and follow best practice:-Dry method(Do not repeat yourself)
      const value=useContext(Context);

      //if we want to throw error when component is outside around provide component and that need props value in app.jsx then use this command and show in console-
      if(value===undefined){
        throw new Error(" Component must be wrapped with Provider Component");                      //js method 
      }

      return value;

}
