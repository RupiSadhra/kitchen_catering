import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formstatus, setFormstatus] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4oqtpp9",
        "template_wkpx524",
        document.querySelector(".contact-form"),
        "_SNDktY5DRnxZh-up"
      )
      .then(
        (result) => {
          setFormstatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setFormstatus("Error in sending message. Please try again!");
        }
      );
  };
  return (
    <>
      <form className="contact-form" action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleName}
        ></input>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmail}
        ></input>

        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Message"
          required
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button type="submit" onClick={sendForm}>
          Send message
        </button>
      </form>

      <div className="margin-top-small">{formstatus}</div>
    </>
  );
};

export default ContactForm;
