//Conditional Operator inside component use both time before jsx and after jsx according to operation

//Note -we can use multiple return jsx inside single component but that component always return one object(jsx)
export const ConditionalOperator=()=>{
  
    return(
        <>
        <Conditional_1stway/>
        <Conditional_2ndway/>
        <Conditional_3rdway/>
        <Conditional_4rdway/>
        <Conditional_5thway/>

        <hr />
        <Practice/>

        </>
    )

}


const Conditional_1stway=()=>{
    let age=16;
    
    if(age>18){ //condition true then return this jsx and out from this component 
        return <p>{"age is 18 above"}</p>
    }
    // condition false then return this jsx
    return(
        <>
         <p>{"age is below 18"}</p>
        </>
    )
}

//Ternary Operator
const Conditional_2ndway=()=>{
    let age=16;
    return(
        <>
        <button>{age>18?"Available":"Not Available"}</button>
        </>
    )
}

//complex if conditions :-where false value store inside let variable and we use if condition if it is true then let variable value change
const Conditional_3rdway=()=>{
    let age=19;
    let fun="Waiting...";    //not we can't use const here
    if(age>18) fun="Not Waiting";//one line of code here so no need curly braces ,and no need to use return here b/c we change only variable value and pass in jsx 
    return(
        <>
        <button>{fun}</button>
        </>
    )
}

//4th solution better as it prevent cluttering of variables outside and encapsulates such logic inside a function
//one another benefit is also that ,we can also pass some dynamic values as a function parameter
const Conditional_4rdway=()=>{
    let age =19;

    const fun=()=>{
        if(age>18) return "eligible";//if condition true this part return ,one line code so no need curly braces
        //otherwise else part return 
        return "not eligible"
    }
     
    return(
        <>
        <button>{fun()}</button> 
        {/* function invoked by using default callmethod-() */}
        </>
    )
}

//And -&& ,Or -|| operator 
//usecase of and operaror is when condition is true , true part execute only ,no else part here
 const Conditional_5thway=()=>{
    let age=25;
    return(
        <>
        <ol>{age>18 && "you can vote"}</ol>{/*first condition true hogi to aage check karega or use show kar dega ,and case m dono true hone pr execute hota hai 2nd wala*/}
        <ol>{age<18||"or case"}</ol> {/*first condition true hogi to aage check nhi karega ,false hui to aage check karega or case m dono m se koi bhi true ho wo execute ho jata hai */}
        </>
    )
 }



 //!Q.interview question-
 //?Note- React doesn't render 'false','null','undefined','NAN'(not a number) in the DOM ,these result in nothing being displayed

 //* however, `0` and empty strings (`""`) are exception ,both is render in the dom , it is considered a valid React node,valid output,and it will appear in UI.
 

 export const Practice=()=>{

    //2 array create
    const team1=[];
    const team2=[1,2];

    // console.log(team1.length)              o/p-0
    // console.log(team2.length)              o/p-2
    // console.log(Boolean(team2.length))
    // console.log(Boolean(team1.length))     o/p-false
    // console.log(Boolean(team2.length))     o/p-True
    //console.log(Boolean(team1.length))        o/p-false
    //console.log(Boolean(team2.length))        o/p-true  
    return(
        <>
        <h3>And operator Test Question</h3>
        <ol>
            <li>{team1.length && "empty array"}</li>
            <li>no.of element:{team1.length}</li>
            <hr />
            <li>{team2.length && "empty array"}</li>
            <li>no.of element:{team2.length}</li>
            <hr />
            <li>{team1.length===0 &&"No student found"}</li>
            <li>No.of team1:{team1.length}</li>
            <hr />
            <li>{team2.length===0 &&"No student found"}</li>
            <li>No.of team2:{team2.length}</li>
            <hr />
            <li>{!team1.length && "no element found"}</li>   {/*NOT operator ! true ko false or false ko true m change kar dega*/}
            <li>no. of team1:{team1.length}</li>
            <hr />
            <li>{!team2.length && "no element found"}</li>
            <li>no. of team2:{team2.length}</li>
            <hr />
            <li>{Boolean(team1.length)&&"no element"}</li>{/*Boolean converter-Jo value hai usse Boolean m convert kar rhe hai means true or false m*/}
            <li>No.of team1:{team1.length}</li>
            <hr />
            <li>{Boolean(team2.length)&&"no element"}</li>
            <li>No.of team2:{team2.length}</li>
            <hr />
            <li>{Boolean(!team1.length)&&"no element"}</li>
            <li>No.of team1:{team1.length}</li>
            <hr />
            <li>{Boolean(!team2.length)&&"no element"}</li>
            <li>No.of team2:{team2.length}</li>
            <hr />
            
            
        </ol>
        
        </>
    )
 }