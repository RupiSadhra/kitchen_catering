import React, { useState } from "react";
import { galleryImg } from "../data";

const ImageGallery = () => {
  const [currentimg, setCurrentimg] = useState("");
  const [modal, setModal] = useState(false);

  const galleryItems = galleryImg.map((img, index) => {
    return (
      <>
        <div className="image-number center-element">0{index + 1}.</div>
        <div
          className="gallery-container"
          onClick={() => {
            setCurrentimg(img);
            setModal(true);
            console.log("click");
          }}
        >
          <img key={index} className="gallery-image" src={img}></img>
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
      <div className={`image-container  ${modal ? "show" : "hide"}`}>
        <div className="image-modal">
          <img className="modalimage" src={currentimg} />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
