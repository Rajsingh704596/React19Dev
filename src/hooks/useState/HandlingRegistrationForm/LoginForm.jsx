import { useState } from "react"

export const LoginForm=()=>{

    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        
        const UserLogin={
            userName,
            password
        }

        console.log(UserLogin);
    }
    return(
        <>
          <section>
            <form onSubmit={handleFormSubmit}>
                <h1>Login Form</h1>
                <hr /> <br />
            <div>
            <label htmlFor="userName">User Name :- </label>
            <input type="text" name="userName" required autoComplete="off" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div>
            <label htmlFor="password">Password :- </label>
            <input type="password" name="password" required autoComplete="off" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            </form>
          </section>
        </>
    )
}

export const LoginForm2=()=>{

    const[user,setUser]=useState({
        userName:"",
        password:""
    })

    const handleInputChange=(e)=>{
        const{name,value}=e.target;

        setUser((prev)=>({...prev,[name]:value}))
        
    }
   
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return(
        <>
          <section>
            <form onSubmit={handleFormSubmit}>
                <h1>Login Form</h1>
                <hr /> <br />
            <div>
            <label htmlFor="userName">User Name :- </label>
            <input type="text" name="userName" required autoComplete="off" id="userName" value={user.userName} onChange={handleInputChange} />
            </div>
            <div>
            <label htmlFor="password">Password :- </label>
            <input type="password" name="password" required autoComplete="off" id="password"  value={user.password} onChange={handleInputChange} />
            </div>
            <button type="submit">Log In</button>
            </form>
          </section>
        </>
    )
}