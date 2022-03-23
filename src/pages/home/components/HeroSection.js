import React from "react";
import Content from "../../../components/Content";
import { heroContent } from "../data";
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <Content {...heroContent}>
          <Button
            path="/contact"
            text="Contact Us"
            buttonStyle="button-white"
          />
        </Content>
      </div>
    </>
  );
};

export default HeroSection;
