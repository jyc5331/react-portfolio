import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Header, FormField, Box, Button, Form, TextInput } from "grommet";

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
        setErrorMessage("This is not a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please enter a ${e.target.name}.`);
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
    <Form
      className="contact-container"
      id="contact-form"
      onSubmit={handleSubmit}
      style={{ width: "50%" }}
    >
      <Box
        border={{ color: "brand", size: "medium" }}
        margin="medium"
        pad="large"
      >
        <Header margin="medium" style={{ fontSize: "30px" }}>
          Be in touch,
        </Header>
        <FormField>
          <label htmlFor="name">Name:</label>
          <br />
          <TextInput
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="email">Email:</label>
          <br />
          <TextInput
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </FormField>

        {errorMessage ? (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        ) : null}
        <Box direction="row" gap="medium" margin="small">
          <Button type="sumbit" primary label="Submit" />
        </Box>
      </Box>
    </Form>
  );
}

export default Contact;
