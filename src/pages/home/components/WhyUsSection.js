import React from "react";
import Image1 from "../../../assets/images/Image1.jpg";
import Image2 from "../../../assets/images/Image2.jpg";
import Image3 from "../../../assets/images/Image3.jpg";
import Content from "../../../components/Content";
import { whyUsOne } from "../data";
import { whyUsTwo } from "../data";
import { whyUsThree } from "../data";
import Button from "../../../components/Button";

// import Image1 from

const WhyUsSection = () => {
  return (
    <>
      <div className="why-us container-width-extra grid-gap-extra margin-top-extra two-column-grid">
        <img className="img1" src={Image1} />
        <Content {...whyUsOne}>
          <Button path="/gallery" text="Our Work" buttonStyle="button-black" />
        </Content>
        <Content {...whyUsTwo}>
          <Button
            path="/contact"
            text="Send Message"
            buttonStyle="button-black"
          />
        </Content>
        <img className="img2" src={Image2} />
        <img className="img3" src={Image3} />
        <Content {...whyUsThree}>
          <Button path="/menu" text="Our Menus" buttonStyle="button-black" />
        </Content>
      </div>
    </>
  );
};

export default WhyUsSection;
