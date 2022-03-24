import React, { useState } from "react";
import { galleryImg } from "../data";
import { MdClear } from "react-icons/md";

const ImageGallery = () => {
  const [currentimg, setCurrentimg] = useState("");
  const [modal, setModal] = useState(false);

  const galleryItems = galleryImg.map((img, index) => {
    return (
      <>
        <div key={`num${index}`} className="image-number center-element">
          0{index + 1}.
        </div>
        <div
          className="gallery-container"
          onClick={() => {
            setCurrentimg(img);
            setModal(true);
            console.log("click");
          }}
        >
          <img key={index} className="gallery-image" src={img}></img>
          <div className="gallery-overlay"></div>
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
        <span className="modal-close">
          <MdClear
            onClick={() => {
              setModal(false);
            }}
          />
        </span>
        <div className="image-modal">
          <img className="modalimage" src={currentimg} />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
