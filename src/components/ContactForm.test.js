import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";

jest.mock("emailjs-com", () => ({
  sendForm: jest.fn(),
}));

describe("ContactForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, "alert").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    window.alert.mockRestore();
    console.log.mockRestore();
  });

  test("renders form elements correctly", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Your Name\/Company Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();
  });

  test("allows users to input values", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText(/Your Name\/Company Name:/i);
    const emailInput = screen.getByLabelText(/Your Email:/i);
    const messageInput = screen.getByLabelText(/Your Message:/i);

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "Hello there!");

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello there!");
  });

  test("calls emailjs.sendForm and shows success alert on successful submission", async () => {
    emailjs.sendForm.mockResolvedValueOnce({ status: 200, text: "OK" });

    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Your Name\/Company Name:/i), "John Doe");
    await user.type(screen.getByLabelText(/Your Email:/i), "john@example.com");
    await user.type(screen.getByLabelText(/Your Message:/i), "Hello there!");

    await user.click(screen.getByRole("button", { name: /Send/i }));

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      expect.any(HTMLFormElement),
      process.env.REACT_APP_EMAILJS_USER
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Email sent successfully");
    });
  });

  test("shows failure alert on submission error", async () => {
    emailjs.sendForm.mockRejectedValueOnce(new Error("Network Error"));

    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Your Name\/Company Name:/i), "John Doe");
    await user.type(screen.getByLabelText(/Your Email:/i), "john@example.com");
    await user.type(screen.getByLabelText(/Your Message:/i), "Hello there!");

    await user.click(screen.getByRole("button", { name: /Send/i }));

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Failed to send email. Please try again.");
    });
  });
});
