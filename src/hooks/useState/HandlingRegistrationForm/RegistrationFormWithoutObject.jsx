//! Note - this method is not good when multiple input tag are used to store the data

//?here we create multiple state and when form will submit all state pass into object form

import { useState } from "react";

export const RegistrationFormWithoutObject = () => {
  
//5 Separate state variable    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {

    //* we can't write like this all updated state in one function because if we input anything it will store value in all state
    // setFirstName(e.target.value);
    // setLastName(e.target.value);
    // setEmail(e.target.value);
    // setPhoneNo(e.target.value);
    // setPassword(e.target.value);


    //here we use switch case in one function instead of Create separate function 
    const { name, value } = e.target;              //destructuring of object 

    //switch case - here we use name attribute as a condition and all case(name's value) are create with break statement 
    switch (name) {
      case "firstName":
        setFirstName(value);                       //here updated/setter state function use for current state value
        break;                               //break statement must be used in switch case

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "phoneNo":
        setPhoneNo(value);
        break;

      case "password":
        setPassword(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();               //preventDefault() method use for form which is by default submit

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo:phoneNo,
      password: password,
    };
    //data will always pass into object form for backend
    console.log(formData);
  };

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
                  name="firstName"                                 //name attribute must be used and it's also unique.
                  required
                  autoComplete="off"
                  placeholder="Enter First Name"
                  id="firstName"
                  value={firstName}                                 // here firstName is state variable which is pass into value attribute for this input tag which name is also firstName   now it's a controlled component
                  onChange={handleInputChange}                      //implement onChange event handlers to update state variable
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
                  value={lastName}
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
                  value={email}
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
                  value={phoneNo}
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
                  value={password}
                  onChange={handleInputChange}
                />
            </div>
            <p>
                By Creating an account you agree to our
                <a href="#" style={{color:"dodgerblue"}}>
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
        <p>Hello, My Name is {firstName}{lastName}.My email address is{email} and My Phone Number is {phoneNo}</p>
       </section>
    </>
  );
};
