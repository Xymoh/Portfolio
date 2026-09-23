import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { buttonPrimary } from "../styles/glass";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.6rem;
    color: var(--ink-1);
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.8rem;
    padding: 1.3rem 1.5rem;
    color: var(--white);
    background: rgba(255, 255, 255, 0.05);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    outline: none;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    margin-top: 1rem;
    transition: border-color 0.5s var(--ease-smooth), box-shadow 0.5s var(--ease-smooth),
      background 0.5s var(--ease-smooth);
    &:hover {
      border-color: rgba(255, 255, 255, 0.22);
    }
    &:focus {
      border-color: rgba(99, 209, 191, 0.75);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 4px rgba(99, 209, 191, 0.15);
    }
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    ${buttonPrimary}
    font-size: 1.8rem;
    padding: 0.8em 2.6em;
    border-radius: 999px;
  }
`;

const StatusMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-sm);
  font-size: 1.5rem;
  background: ${(props) =>
    props.type === "success"
      ? "rgba(99, 209, 191, 0.15)"
      : "rgba(235, 87, 87, 0.15)"};
  border: 1px solid ${(props) =>
    props.type === "success"
      ? "rgba(99, 209, 191, 0.3)"
      : "rgba(235, 87, 87, 0.3)"};
  color: ${(props) =>
    props.type === "success" ? "var(--accent)" : "#ff6b6b"};
`;

export default function ContactForm() {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: null, message: "" });

  function sentEmail(e) {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE,
          process.env.REACT_APP_EMAILJS_TEMPLATE,
          e.target,
          process.env.REACT_APP_EMAILJS_USER
        )
        .then(() => {
          setStatus({ type: "success", message: "Email sent successfully!" });
          setFromName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          setStatus({ type: "error", message: "Failed to send email. Please try again." });
        });
    } catch (_) {
      setStatus({ type: "error", message: "Failed to send email. Please try again." });
    }
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
      {status.message && (
        <StatusMessage type={status.type}>{status.message}</StatusMessage>
      )}
    </FormStyles>
  );
}
