import React from "react";
import HeaderImage from "../../components/HeaderImage";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <HeaderImage
        headerClass="contact-header"
        headerText="Book us for your next event..."
      />
      <div className="container-width-extra margin-top-extra two-column-grid align-start grid-gap-extra">
        <section className="content-text">
          <ContactInfo />
        </section>
        <section className="content-text">
          <h1>Get In Touch</h1>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Contact;
