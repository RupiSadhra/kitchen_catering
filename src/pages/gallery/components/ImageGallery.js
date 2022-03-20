import React from "react";
import { galleryImg } from "../data";

const ImageGallery = () => {
  const galleryItems = galleryImg.map((img, index) => {
    return (
      <>
        <div></div>
        <div className="gallery-container">
          <img className="gallery-image" src={img}></img>
          <div class="gallery-overlay"></div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="container-width-extra three-column-grid margin-top-extra">
        {galleryItems}
      </div>
    </>
  );
};

export default ImageGallery;
