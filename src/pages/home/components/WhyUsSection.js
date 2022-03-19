import React from "react";
import Image1 from "../../../assets/images/Image1.jpg";
import Image2 from "../../../assets/images/Image2.jpg";
import Image3 from "../../../assets/images/Image3.jpg";
import Content from "../../../components/Content";
import { whyUsOne } from "../data";
import { whyUsTwo } from "../data";
import { whyUsThree } from "../data";

// import Image1 from

const WhyUsSection = () => {
  return (
    <>
      <div className="why-us container-width-extra grid-gap-extra margin-top-extra two-column-grid">
        <img src={Image1} />
        <Content {...whyUsOne} />
        <Content {...whyUsTwo} />
        <img src={Image2} />
        <img src={Image3} />
        <Content {...whyUsThree} />
      </div>
    </>
  );
};

export default WhyUsSection;
