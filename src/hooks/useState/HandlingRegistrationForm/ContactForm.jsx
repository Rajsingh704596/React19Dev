import { useState } from "react";

//!Contact Form use with separate state
export const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const ContactData = {
      userName,
      email,
      message,
    };

    console.log(ContactData);
  };
  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h1>Contact Form</h1>
          <hr /> <br />
          <div>
            <label htmlFor="userName">User Name :- </label>
            <input
              type="text"
              name="userName"
              required
              autoComplete="off"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email :- </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message :- </label>
            <textarea
              name="message"
              required
              autoComplete="off"
              id="message"
              rows="2"
              cols="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

//!Contact form use with object and spread operator
export const ContactForm2 = () => {

  //Initial state as a object
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  //Event Handler- function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({ ...prev, [name]: value }));    //update the state with the existing input value
    
  };

  //Event Handler- Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(contact);          //object data pass for backend
  };
  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h1>Contact Form</h1>
          <hr /> <br />
          <div>
            <label htmlFor="userName">User Name :- </label>
            <input
              type="text"
              name="userName"                       //name and object property must be same
              required
              autoComplete="off"
              id="userName"
              value={contact.userName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email :- </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
              value={contact.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message :- </label>
            <textarea
              name="message"
              required
              autoComplete="off"
              id="message"
              rows="2"
              cols="20"
              value={contact.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};
