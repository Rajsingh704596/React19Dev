//! Handling More Input Fields Easily using Object State with spread operator

//todo task-
//# Refactor the registration form to use a single object (formData) as the initial state.
//# Update input fields to use object properties (name and object must be same)
//# use the spread operator to update the form data state efficiently.

import { useState } from "react";

export const RegistrationFormWithObject = () => {

 //here formData is object ,
    const [formData, setFormData] = useState({
        //here object property define:- which is initial state 
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",

  });

  const handleInputChange=(e)=>{
    const{name,value}=e.target;
    // setFormData((prev)=>( {...prev,name:value}))    //here we don't want add new data , only just update existing property's value in object

    setFormData((prev)=>({...prev,[name]:value}))    //thats why name key change into dynamic form {now here name is firstName,lastName,email,phoneNo,password}{ and value is user input for that input tag }
    //updated fun. by default store previous state of data and we can access as a parameter
}

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);   //object form data pass for backend
  }

  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h1>Registration Form</h1>
          <hr /> <br />
          <div>
            <div>
              <label htmlFor="firstName">
                <b> First Name: </b>
              </label>
              <input
                type="text"
                name="firstName" //name attribute must be used and it's also same with Object key
                required
                autoComplete="off"
                placeholder="Enter First Name"
                id="firstName"
                value={formData.firstName} // here formData is Object so we need to access the key like Object.key /Object['key']  now it's a controlled component
                onChange={handleInputChange} //implement onChange event handlers to update state variable
              />
            </div>
            <div>
              <label htmlFor="lastName">
                <b> Last Name:</b>
              </label>
              <input
                type="text"
                name="lastName"
                required
                autoComplete="off"
                placeholder="Enter Last Name"
                id="lastName"
                value={formData['lastName']}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">
                <b>Email:</b>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                placeholder="Enter Your Email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNo">
                <b>PhoneNo.:</b>
              </label>
              <input
                type="text"
                name="phoneNo"
                required
                autoComplete="off"
                placeholder="Enter Your PhoneNo"
                id="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                type="password"
                name="password"
                required
                autoComplete="off"
                placeholder="Enter Your password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <p>
              By Creating an account you agree to our
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
            </p>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
      </section>

      <section>
        <p>
          Hello, My Name is {formData.firstName}
          {formData['lastName']}.My email address is{formData.email} and My Phone Number is {formData.phoneNo}
        </p>
      </section>
    </>
  );
};
