import React from "react";
import HeroSection from "./components/HeroSection";
import "./home.css";
import Content from "../../components/Content";
import { aboutContent } from "./data";
import WhyUsSection from "./components/WhyUsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container-width-extra margin-top-extra">
        <Content {...aboutContent} />
      </div>
      <WhyUsSection />
    </div>
  );
};
export default Home;
