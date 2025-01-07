//! useState() hook- 
//* The useState hook is a fundamental hook in React that allows us to add state management to our functional components. it lets you store and update values that change over time, enabling dynamic and interactive user interfaces. 

//! Virtual DOM/ ReactDOM- 
//# React keeps a lightweight representation of the real DOM in the main memory,that is known as virtual DOM. when the state of an object changes , virtual DOM changes only that object in the real DOM, rather than updating all the object.
//# The Virtual DOM(V-DOM) is a programming concept where an ideal, or "virtual"- representation of a UI is kept in memory and synced with the "real" DOM by a library such as a reactDOM, this process is called "reconciliation".
//# The Virtual DOM is a tree based on JavaScript object created with React that resembles a DOM tree.

//!Reconciliation- "efficient DOM management using Differences algorithm (diffing algo.)"
//$ The Process of determining how to update the DOM(document object model) to match the most recent state of a React component.
//$ In simple term, it's used diffing algorithm (in between old tree or new tree )for efficiently update the UI for that tree of node(state) which is change ,without rendering the entire tree(which is not change and same value as old tree)

//? Q.what is the difference between virtual DOM and Fiber tree?
//todo ans- Virtual DOM/React Element- uses a synchronous reconciliation process. the entire tree compared and updates are applied in a single cycle.
//todo     Fiber tree- uses asynchronous reconciliation.the work can be divided into chunks and spread over multiple frames, improving responsiveness.

//? Q. how state work and Component re-render?
//*  let check last e.g-- all node create in DOM tree {app---counter---div---h(state value)--button(updater fun)}
//*  when button click the state value change by the updater function at time component will re-render and the updated value display in user interface
//*Behind the scene- the button calls setState() function, which notify React.js that we are trying to update a state. then React.js create new tree with the new state value. Then React.js realizes that <h1> is different, then React.js will demand ReactDOM to update its value in DOm. React.js will only update this DOM making it effective instead of rendering whole DOM again.

//@ Note- When React.js creates a new tree, it will re-run or re-render the affected component and all its children. so, in this case it will re-run our <Counter/> component, it won't re-render other component outside(sibling).
/*//   function App(){
            return(
            <div>
            <ParentComponent>
                <childComponent/>
                <AnotherChildComponent/>
            <ParentComponent/>
            <SiblingComponent/>
            <div/>
            );
      }      */
//^  1.Initial Render- all component render  2. State change in parent Component- React will re-render the parentComponent and it's all child component 3. Sibling component not affected by the state change in parentComponent,so it will not be re-rendered.

import {useState} from 'react';
export const ParentComponent=()=>{
    const[value,setValue]=useState(1);
    console.log("Parent component render");

    return(
        <>
        <h1>count:{value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
        <ChildComponent value={value}/>
        </>
    )
}

const ChildComponent=({value})=>{

    console.log("Child Component render");
    return(
        <>
        <p>child component:- {value}</p>
        </>
    )

}

export const SiblingComponent=()=>{
    console.log("Sibling component render");
    return(
        <>
        <p>Sibling Component</p>
        </>
    )
}

//? Why the state value does not reset to its initial value on re-render?
//* The useState hook is smart enough to only use the initial value(e.g 0) the very first time component render , if state value change (e.g button click then fun call count value increase 1)  at this time component re-render.and after re-render it always take current state which is updated by setFunction/(updater fun.). 


//# Component Re-render:-
//$ 1. In UseState case:-  current state value update hone pr(setter fun.k through)

//! React m component Render for these condition:-
//^ Initial render (component mount hone pr)
//^ State update hone pr(useState k setter fun. ka use kar ke)
//^ Props m change hone pr(Parent component ke props m change hone pr ) 
//^ Component ki dependencies me change hone pr(useEffect,useMemo) 

// ! UseState hook k sa th  Re-render ko control kar ne k li ye other hook ka use-
// * useMemo :- Memoized values ban ane ke li ye.
// * useCallBack:- Memoized function ban ane k li ye. 
// * useEffect:- Side effect ko handle kar ne ke li ye.
// * React.memo:- Component ko memoize kar ne k li ye
// * useReducer:- Complex State management ke li ye

//todo- In useState setState maintain previous stateValue.