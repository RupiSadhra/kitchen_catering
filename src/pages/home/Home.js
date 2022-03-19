import React from "react";
import HeroSection from "./components/HeroSection";
import "./home.css";
import Content from "../../components/Content";
import { aboutContent } from "./data";
import WhyUsSection from "./components/WhyUsSection";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container-width-extra margin-top-extra">
        <Content {...aboutContent} />
      </div>
      <WhyUsSection />
      <Testimonial />
    </div>
  );
};
export default Home;
