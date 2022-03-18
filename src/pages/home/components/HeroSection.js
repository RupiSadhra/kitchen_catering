import React from "react";
import Content from "../../../components/Content";
import { heroContent } from "../data";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <Content {...heroContent}></Content>
      </div>
    </>
  );
};

export default HeroSection;
