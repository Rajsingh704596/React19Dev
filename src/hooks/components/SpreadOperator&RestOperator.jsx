//@ why we use three dots in useState hook (in React)
//@ useCase eg.-   setTask((prevTask)=>[...prevTask,{id,content,checked}]);
//^ setFunction store previous value so we use spread(...) operator that basically spread the element copy that value into in new array

//! Spread Operator-
//# The spread operator(...)in javascript allows an iterable (like an array ,string , object(only for iterable property means which key's value is iterable like array or string ,,Note - Number,null,boolean,undefined are not iterable)) to be expended into individual elements.
//# it's basically spread the element and stored that value [shallow copy]in new array & object

//* Syntax for Array:- const newArray=[...old Array];
//* Syntax for Object:- const newObject=[...old Object];

//$ UseCase-  Copying Array , Concatenating array, Adding element to an array, Spreading object properties

export const SpreadOperator = () => {
  //todo- 1.Copying Array
  const Numbers = [1, 2, 3];

  // const NumberCopied=Numbers;
  // console.log(Numbers);           //o/p- [1, 2, 3]
  // console.log(NumberCopied);      //o/p- [1, 2, 3]
  // NumberCopied[1]=5;
  // console.log(Numbers);           //o/p- [1, 5, 3]       so original array also change thats why we use spread operator.
  // console.log(NumberCopied);      //o/p- [1, 5, 3]

  //^ In JavaScript, simply assigning an array to a new variable creates a reference, not a copy. This means that if you modify the new array, the original array will also be changed.

  const CopiedNumber = [...Numbers];
  CopiedNumber[1] = 5;
  console.log(Numbers, "Original array not change"); //o/p- [1, 2, 3]
  console.log(CopiedNumber, "Copied Number changed"); //o/p- [1, 5, 3]

  //^ Copying an array using the spread operator in javaScript creates a shallow copy of the array, not a deep copy. This means that the new array will hold the value not reference to the same elements as the original array.



  //todo-2. Concatenating Array

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  //    console.log(arr1+arr2);          //o/p-1,2,34,5,6   so we not get right output
  //    console.log([arr1+arr2]);          //o/p-['1,2,34,5,6']   so we not get right output
  console.log([...arr1, ...arr2]); //o/p-[1, 2, 3, 4, 5, 6]



  //todo-3. Adding elements to an array
  const arr = ["A", "B", "C"];

  const adding = [...arr, "D", "E"];
  console.log(adding, "check"); //o/p- ['A', 'B', 'C', 'D', 'E']



  //todo-4 Spreading Object properties-
  const person={
    name:"rock",
    age:18,
    id:"23",
  }
  
  // spread operator use to create new object where age property is changed and remaining is same 
  const updatePerson={...person,age:person.age+1};     //person.age use for key's value
  console.log(updatePerson);              //o/p- {name: 'rock', age: 19, id: 23}
  console.log({...person,age:20});        //o/p- {name: 'rock', age: 20, id: 23}
};


 //todo-5 Spread operator as function argument-
   const name=["a","b","c"];
    function getName(x,y,z){
       console.log(x,y,z,"function called")            //a b c function called
    }
  getName(...name);             //a b c function called
 // getName(name);                //o/p-['a', 'b', 'c'] undefined undefined 'function called


//!Rest Operator- single element pass into a combined form 

export const RestOperator=()=>{

 //todo- rest operator use as a function parameter
    function addition(a,b,c,...other){             //...other is basically rest operator 
    
    // console.log(...other)         //o/p- 6, 7
    // console.log(other);           //o/p-[6, 7]
    const d=other[0];
    const e=other[1];
        return a+b+c+d+e;            //return 25
    }
    
    const example=addition(3,4,5,6,7);         //function call(invoke)
    console.log(example);


 //todo- Rest operator using in Object

   const Students={
      name:"Ajay",
      age:"25",
      hobbies:["Cricket","Singing"],
   }
//    console.log(Students.name);

// const{name,age}=Students;   //destructuring
// console.log(name,age);      //o/p-Ajay 25

const {...rest}=Students;
console.log(rest);            //o/p-{name: 'Ajay', age: '25', hobbies: Array(2)}

}