import React from "react";
import HeaderImage from "../../components/HeaderImage";
import MenuSection from "./components/MenuSection";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <HeaderImage
        headerClass="menu-header"
        headerText="Check out our menus..."
      />
      <MenuSection />
    </>
  );
};

export default Menu;
