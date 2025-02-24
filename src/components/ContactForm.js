import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 2px solid var(--deep-dark);
    border-radius: 8px;
    margin-top: 1rem;
    transition: 0.3s ease border;
    &:focus {
      border: 2px solid var(--gray-2);
    }
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--gray-2);
    }
  }
`;

export default function ContactForm() {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then((res) => {
        console.log(res);
        window.alert("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to send email. Please try again.");
      });
  }

  return (
    <FormStyles onSubmit={sentEmail}>
      <input type="hidden" name="to_name" value="szyruszk@gmail.com" />
      <div className="form-group">
        <label htmlFor="fromName">
          Your Name/Company Name:
          <input
            type="text"
            id="fromName"
            name="from_name"
            value={fromName}
            required
            onChange={(e) => setFromName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email:
          <input
            type="text"
            id="email"
            name="reply_to"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your Message:
          <textarea
            id="message"
            name="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </FormStyles>
  );
}
