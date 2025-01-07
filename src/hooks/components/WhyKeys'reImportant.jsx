//! Why keys are important in React.js)-
//# A string or a number that uniquely identifies it among other items in that array.
//# KEY Tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g due to sorting),get inserted, or get deleted.
//e.g In map method we must use(pass) unique key in parent tag 
//when we're not use key attribute ,React.js will automatically use index.But we should avoid indexing and use id as a key.(math.random(),date.now() method also use) 

import { useState } from "react";

//$ Rules-
//@ key must be unique among siblings    // key must not change


export const KeysImportant=()=>{

    const[inputValue,setInputValue]=useState("");
    //store the data in new state that is basically array
    const[task,setTask]=useState([])

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(!inputValue) return;


        // setTask((prevTask)=>[inputValue,...prevTask]);
        //^ so basically in this case updated task insert at the beginning, since we are using index as key, keys of all items will change.(e.g- old tree key-0 boy, key-1 apple )(e.g- new tree key-0 cat, key-1 boy, key-2 apple) so, "here always new element get key-0"
        //^ At this time React.js will compare items based on key and it sees that item with key(0) in previous tree has different text node than key (0)in new tree... basically in this case new element always take 0 id.. so that's the reason we should avoid new element insert at the beginning(if we are not use unique id key)
        //^ React.js is updating text node of all <li> elements when it shouldn't have. this is happening because of indexes being used as key. That's why key should never ever change for an elements. this can cause lot of problems.
    
        
        setTask((prevTask)=>[...prevTask,inputValue]);
       //^ if we pass indexing in map method(instead of unique id/value as a key) , for preventing lot of problems ,we should store value at the end , At this time In map method always take new value with new indexing.

       //^ 3 rd case - if we pass newValue at top and that value is change we need to use props with unique id pass as key

        setInputValue("");
    }
    return(
        <>
        <h1>Todo List</h1>
        <div>
            <form onSubmit={handleFormSubmit}>
            <input type="text" autoComplete="off" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <input type="submit" placeholder="Add Task" />
            </form>
        </div>
        <div>
            <ul>
               {task?.map((curTask,index)=>{
                return(
                    <li key={index}>
                        <span>{curTask}</span>
                        <input type="text" /> {/*3 rd case m is input tag ke li ye bhi useState al ag se create kar na pad_ega kyu ki ye bhi future m change ho ga , so tb ye wa_la input tag ph_le wale curTask k sa th attach rhe ga */}
                    </li>
                )
               })}
            </ul>
        </div>

        </>
    )
    
}