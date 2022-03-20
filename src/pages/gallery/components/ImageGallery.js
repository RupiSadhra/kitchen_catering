import React from "react";
import { galleryImg } from "../data";

const ImageGallery = () => {
  const galleryItems = galleryImg.map((img, index) => {
    return <img src={img}></img>;
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
