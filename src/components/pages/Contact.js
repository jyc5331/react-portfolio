import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      // validateEmail is going to return true or false and then assign that return value to isValid
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }

  // to make sure the state property is syncing with the UI
  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    // if we had a backend, at this point the submit data would be sent to the database
  }

  return (
    <section className="contact-container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <h3 style={{ fontSize: "40px", fontStyle: "italic" }}>
          LET'S CONNECT!
        </h3>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>

        {errorMessage ? (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
