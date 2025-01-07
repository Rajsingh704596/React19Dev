import { useState } from "react"

export const DarkMode=()=>{

    const[changeTheme,setChangeTheme]=useState(false)
        
    const handleButtonClick=()=>{

        setChangeTheme(!changeTheme);
             
    }
     
    return(
        <>
        <div className={changeTheme?`bg-black text-white flex flex-col justify-center items-center h-lvh p-4 `:`bg-white text-black flex flex-col justify-center items-center h-lvh p-4`}>
         <h2>Dark light Mode Website</h2>
        <button 
        className={changeTheme?`bg-blue-400 text-white border-lime-100 cursor-pointer p-2 m-6`:`bg-slate-500 text-blue-950 border-l-slate-950 cursor-pointer p-2 m-6`}
        onClick={()=>handleButtonClick()}>Switch To Dark Mode</button>
        </div> 
        </>
    )
}