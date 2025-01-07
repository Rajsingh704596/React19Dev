//! Props- 
//* React props(properties) facilitate data transfer from parent to child components.
//* Data flow uni-directionally (top to bottom) 
//* Props are immutable, means child components cannot modify the data received from parent.
//* child components access props through their function parameter
//* we can also pass jsx as props to another component.



export const Props = () => {
  const list = ["a", "b"];
  const object = {
    name: "rock",
    id: 7,}


  return (
    <>
    <h1>Parent Component</h1>
    <List Heading="Child component" list={list} object={object} />       {/*here list , object are props */}
    <Destructuring arr={list} obj={object} />     {/*here arr , obj are props */}
    
    </>
  );
};


export const List = (props) => {
  // console.log(props.list)
  // console.log(props.object)

  return (
    <>
      <h1>{props.Heading}</h1>
      <div>{props.list}</div>
      <p> {props.list[0]}</p>
      <li>{props.object.name}</li>
    </>
  );
};


//! Destructing In Array and Object:-

export const Destructuring = ({ arr, obj }) => {     //destructing as a argument use
  // console.log(arr)

  const { name, id } = obj;  //we have object so more destructuring need    //if we are not use not use destructuring here then we need to access value using key like this -- obj.name ,obj.id

  return (
    <>
      <p>
        {name}
        {id}
      </p>
      {/* map method used to print array */}
      <ul>
        {arr?.map((curElem, index) => {
          return (
            <li key={index}> 
              {index}
              {curElem}
            </li>
          );
        })}
      </ul>
    </>
  );
};

//! Passing jsx as Props-

//parent component jsx pass
function Profile(){
  return(
    <>
      <h1>PROFILE CARD</h1>

      {/* //! Note- here we use child component with his closing tag (normal time self closing tag use) because we want to pass props as a children also ,so we can access him like - props.children */}
      <ProfileCard 
      Name = "Rock"
      age = {30}    // In react we can't pass no. without curly braces
      greeting={
        <div>
          <strong>HeLLO Everyone</strong>
        </div>
      }>
        {/*children part*/}
      <div>
      <p>Hobbies: Playing games</p> 
      <button> contact </button> 
      </div>  
      </ProfileCard>

    </>
  )
}
export default Profile;
//Child component
function ProfileCard(props){
  //* we can directly destructure as a argument like this-         function ProfileCard({Name,age,greeting,children}){}
  //* or inside fun we can use destructure-                    const{Name,age,greeting,children} = props;                                  
  return(
    <>
    
    <h2>Name: {props.Name}</h2>
    <p>Age: {props.age}</p>
    <div> {props.greeting} </div>
    <div> {props.children} </div>
    </>
  )
}
//!Remove Errors in React
//todo-  1.Quick fix- 3 option show (1. Disable the line 2. Disable the entire file )
//? check eslint.config.js file and use this command -  ( so now error disable " No type checking in Props " )
  //   "rules":{
  //          "react/prop-types":"off",
  //         }

