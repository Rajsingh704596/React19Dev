//! useId -
    //#  useId is a React hook for "generating unique IDs string" that can be passed to accessibility attributes.
    //#  it helps to ensure that each instance of a component gets a unique ID, which is useful for associating labels with input fields and other elements.

    
    //* syntax-   const id= useId();
    
    //^  Parameters: useId does not take any parameters.
    //^  Returns: useId return a "unique ID string" associated with this particular useId call in this particular component. 
    
    //todo- Note- "useId should not be used to generate keys in a list (means in map method we can't use useId hook for key attribute".
    
    //example in label tag htmlFor={id} , in input field id ={id}  , here we get from useId hook
    
 import { useId } from "react";
 export const UseId=()=>{

    const userName=useId();
    const userPassword=useId();
    const userEmail=useId();

    return(
        <>
        <form>     
        <h1>useId Hook</h1>
        {/* //todo- Normal way */}
        {/*   <label htmlFor="username"></label>
              <input type="text" id="userName" />       */} 
        <hr />   

        {/* //todo Second way - using useRef , react dynamically provide id */}
        <p>Input field 1 with Multiple useId</p>
        <label htmlFor={userName}>Name:</label>         {/*here userName= :r3: */}
        <input type="text" id={userName} />
        <br />
        <label htmlFor={userPassword}>Password:</label>    {/*here userPassword= :r4: */}
        <input type="password" id={userPassword} />
        <br />
        <label htmlFor={userEmail}>Email:</label>    {/*here userEmail= :r5: */}
        <input type="email" id={userEmail} />
        <br />
    
        </form>
        <hr />

        {/* //todo Third way- best way for multiple form */}
        <UseId2/>
 
        </>
    )
 }

 //! when Multiple input field we don't need to create separate useId for every input field , we use like this:- 
//^ This is helpful when multiple form create

const UseId2=()=>{
         
    const Id=useId();

    return(
        <>
        <p>Input field 2 with single useId</p>
        <label htmlFor={Id + "userName" }>Name:</label>         {/*here Id+userName= :r9:userName */}
        <input type="text" id={ Id + "userName" } />
        <br />
        <label htmlFor={Id +"userPassword"}>Password:</label>    {/*here Id+userPassword= :r9:userPassword */}
        <input type="password" id={ Id +"userPassword"} />
        <br />
        <label htmlFor={Id+"userEmail"}>Email</label>    {/*here Id+userEmail= :r9:userEmail */}
        <input type="email" id={ Id + "userEmail"} />
        <br />

        </>
    )
}