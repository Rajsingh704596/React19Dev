//! Prop Drilling-
//# it is pattern in React where we "pass the data from a Parent Component to deeply nested child components through multiple layers of components", even if some of the intermediate(Mid component) components don't need the data .
//# As our Component tree deepens, prop drilling can make the code more complex and harder to maintain.

//^ e.g.-  pass data Parent to GrandGrandChild like this Counter > Child > GrandChild > GrandGrandChild .here, Child and GrandChild doesn't need counter state, but we still need to pass to it just so that GrandGrandChild can access it.

//! Reason why prop drilling not used-
//^ Passing upto 1 or 2 level is probably fine but might be harder to maintain more than that.
//^ when a prop needs to be passed through many level, "making changes to the component hierarchy or adding / removing props can become cumbersome".
//^ Prop drilling may "result in boilerplate code" as each intermediate component needs to accept and pass down the props even if it doesn't use them.

//Todo-  That's why we use "Context API" for preventing problem of prop drilling , and pass the data direct Parent to GrandGrandChild.


export const ParentComponent1=()=>{
    return(
        <>
        <section className={`p-4 h-lvh font-display tracking-wider flex justify-center items-center flex-col bg-purple-700 text-amber-100`}>
            <h1>Component A</h1>
            <ChildComponent1 heading="GrandGrandChild Component D"/>  {/*direct prop pass into child component */}
        </section>
        </>
    )
}

const ChildComponent1=(props)=>{
    return(
     <>
     <h1>Child Component B</h1>
     <GrandChildComponent2 heading={props.heading}/>
     </>
    )
}

const GrandChildComponent2=(props)=>{
    const{heading}=props;          //destructuring of props
    return(
     <>
     <h1>Grand Child Component C</h1>
     <GrandGrandChildComponent3 heading={heading}/>
     </>
    )
}

const GrandGrandChildComponent3=({heading})=>{
    //as a parameter use destructuring of props
    return(
        <>
        <h1>{heading}</h1>
        </>
    )
}