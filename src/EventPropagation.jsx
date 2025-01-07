//! Event Propagation refers to " the process of how events propagate or travel through the DOM (document object model) hierarchy."
//? In java script there are two phase of Event propagation--- 1. Capturing phase 2.Bubbling phase

//todo -1. Capturing phase:- the event start from the root of the DOM and goes down to the target element.(from top to bottom check which event trigger)
//todo -2. Target phase:- the event reach the target element. 
//todo -3. Bubbling phase:- the event start from the target element and bubble up to the root of the DOM.(from bottom to top check which event fire

//! Note- React provide bubbling phase by default, if all element store in one div. e.g here ek hi div (grandparent) k inside div(parent) h or us ke inside button(child)

//* React provide- "event.stopPropagation" method      -- if we want bubbling phase not work only target element fire ho to un sbhi event k fun pr ye method ko use karege.
//* that means the event from bubbling up further in the DOM, ensuring that only the target element is triggered ,other event not fire not bubbling up through the parent elements.

export const EventPropagation=()=>{

    const handleGrandParent=(e)=>{
        console.log(e);
        console.log("Grand Parent Clicked");
    }

    const handleParentClick=(e)=>{
        console.log(e);
        console.log("Parent Clicked");
    }
 
    const handleChildClick=(event)=>{
         console.log(event);
      // we want only child event fire other event not trigger so we use event.stopPropagation method -
        event.stopPropagation();     //now only child event click ,jaha jaha parent m use karna hai waha bhi likhna pdega nhi to waha phle ki tarah work hoga like parent click hone k baad grandparent event bhi fire
         console.log("Child clicked");         
    }

return(
    <>
    <section className="p-2 w-80 bg-slate-50 Main">
        <div className="p-8 bg-red-500 w-70 Grandparent " onClick={handleGrandParent}>
            <div className="p-6 bg-green-500 w-50 parent" onClick={handleParentClick}>
                <button className="bg-yellow-400 w-30" onClick={handleChildClick}>
                    Child Div        
                    {/*//! agar child pr click kiya to o/p-   child clicked then wo check karega(target to DOM tk check) iske parent bhi click hua hai to usse show karega parent event clicked trigger then wo check iske phle grandparent bhi click hua hai to uss event ko execute karega then grandparent event triggger then no more event exist so bubbling phase end*/}
                    {/*//* It works when button inside all div , else outside div it will not work */}
                </button>
            </div>
        </div>
    </section>
    </>
);

// return(
//     <> 
//     {/* //!agar result hmme capturing phase m chahiye then hme just event name me Capture add karna pdega */}

//     <section className="p-2 w-80 bg-slate-50 Main">
//         <div className="p-8 bg-red-500 w-70 Grandparent " onClickCapture={handleGrandParent}>
//             <div className="p-6 bg-green-500 w-50 parent" onClickCapture={handleParentClick}>
//                 <button className="bg-yellow-400 w-30" onClickCapture={handleChildClick}>
//                     Child Div        
//                     {/* o/p- agar child div pr click then sbse phle grand parent event fire then parent at the end child event fire */}
//                     {/*//* It works when button inside all div , else outside div it will not work */}
//                 </button>
//             </div>
//         </div>
//     </section>
//     </>
// );
 
};