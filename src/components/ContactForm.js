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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41xmcik",
        "template_z0hpime",
        e.target,
        "Bs5DhtWK8QHH7I0Qn"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    window.alert("Email sent successfully");
  }

  return (
    <FormStyles onSubmit={sentEmail}>
      <div className="form-group">
        <label htmlFor="name">
          Your Name/Company Name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email:
          <input
            type="text"
            id="email"
            name="email"
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
            type="text"
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
