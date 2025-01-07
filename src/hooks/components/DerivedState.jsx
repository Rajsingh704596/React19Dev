//@ Note- Derived state is not part of Hooks

//! Derived State-
//# Derived state is any state that can be computed based on other state or props.
//# it is not stored directly in the component's state but is calculated when needed.
//# this approach helps avoid duplication and keeps the state simpler and more manageable.

// Use case- let assume ek class ki total student find kar ne k li ye al.ag se ek or state create kar ne ki need nhi hai just ph.le se bni hui state se value find kar ke us.se new variable m store kar de ge or yhi new variable derived state ho ta hai
// e.g-  const userCount = users.length;      here, userCount is derived state , users is state variable

//! Benefits of Derived State-
//^ Avoid Redundancy:- By deriving values from existing state, we avoid storing redundant data.
//^ Consistency:- Ensure that derived values are always in sync with the underlying state or props.(update calculate value maintain if state or props change)
//^ Simplicity:- Reduce the complexity of state management by minimizing the number of state variable.

import { useState } from "react";
export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Aakash", age: 25 },
    { name: "Pritam", age: 20 },
    { name: "Mohan", age: 28 },
    { name: "Vikas", age: 30 },
  ]);

  // console.log(users);   o/p array of object got
  // const Name ="Rock";      //normal variable

  // derived state - count of user
  const usersCount = users.length; //length method use

  //derived state - Average age of user find by reduce method
  // const averageAge =
  //     users.reduce((accumulator, curElem) => {
  //     return (accumulator = accumulator + curElem.age)
  //     }, 0) / usersCount;
  const averageAge =
    users.reduce((accumulator, curElem) => (accumulator += curElem.age), 0) /
    usersCount;

  return (
    <>
       <ol>
        <li>
          Derived state kisi or state ya prop k base m calculate karne k liye
          use liya jata hai or uss value ko store kar leta hai as a variable
        </li>
        
        <li>
          Aesa variable jiski value other state ya props pr dependent hota hai
        </li>
        </ol> 
      
      <ul>
        {users?.map((curElem, index) => {
          const { name, age } = curElem;
          return (
            <li key={index}>
              {index + 1}:- Name is {name} and Age is {age}
            </li>
          );
        })}
      </ul>
      <hr />
      <p>Total User: {users.length}</p> {/*normal way*/}
      <p>Total User got by derived state: {usersCount}</p> {/*normal way*/}
      <br />
      <h3>Average Age: {averageAge}</h3>
    </>
  );
};
