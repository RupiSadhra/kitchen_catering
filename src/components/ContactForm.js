import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          value={name}
        ></input>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          value={email}
        ></input>

        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Message"
          required
          value={message}
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </>
  );
};

export default ContactForm;
