//Dynamic Value in jsx -
//jsx allow javascript expression("variable, function calls, operations")inside the curly braces{}

//In javascript if we pass value inside html tag we use dom element like document.getElementById('p_id').innerText='hey'
//that is imperative way

//But React is Declarative way

//1.variable
//inside curly braces{} the value of the variable will be inserted into the DOM at the respective location.

//2.Expression
//inside curly braces{} includes operations, function calls, and other javascript expression that produce a value

//3.Function Calls
//Functions, especially those that return JSX, can be invoked(call) directly within your jsx

export const DynamicValue=()=>{
  const name="rajsingh";
  const no=1;
  const func=()=>{
     const a="Called";
     return a;
    }
 return(
    <>
    <div>{name}{no}</div>   {/*variable pass*/}
    <p>{5+2.3}</p>   {/*expression pass*/}
    <p>function invoked:{func()}</p>  {/*fun pass by call method()*/}

    </>
 )
}

