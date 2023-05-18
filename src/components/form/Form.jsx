import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./form.css";
import { toast } from "react-toastify";

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ke0187q",
        "template_6v7buwd",
        e.target,
        "S7pexRti1pFWOemSL"
      )
      .then((res) => {
        console.log(res);

        // Display success message
        toast.success("Form submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Close the form
        onClose();
      })
      .catch((err) => {
        console.log(err);

        // Display error message
        toast.error("An error occurred. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }
  return (
    // user form
    <div className="form-card">
      <form
        className="form-content"
        onSubmit={sentEmail}
        id="user-details-form"
      >
        {/* card content goes here */}
        <div className="login-container">
          <div className="login-title">
            <h1 style={{ color: "#d32f2f" }}>Enter Below Details</h1>
          </div>
          <div className="input-field">
            <input
              id="user-name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <input
              id="user-email"
              type="email"
              placeholder="Email ID"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              id="user-phoneNumber"
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />

            <input
              id="user-message"
              type="message"
              placeholder="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            Submit
          </button>
        </div>
        <button onClick={onClose} className="form-close">
          Close
        </button>
      </form>
    </div>
  );
};

export default Form;
