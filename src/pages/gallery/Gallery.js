import React from "react";
import HeaderImage from "../../components/HeaderImage";
import "./gallery.css";

import ImageGallery from "./components/ImageGallery";
import ContactForm from "../../components/ContactForm";

const Gallery = () => {
  return (
    <>
      <HeaderImage
        headerClass="gallery-header"
        headerText="Some pictures of our work..."
      />
      <ImageGallery />
      <ContactForm />
    </>
  );
};

export default Gallery;
