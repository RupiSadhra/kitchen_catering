import React from "react";
import Content from "../../../components/Content";
import { menuData } from "../data";
import { Link } from "react-router-dom";
import lunchMenu from "../../../assets/menu/TheMenu.pdf";
import fingerFoodMenu from "../../../assets/menu/FingerFoodMenu.pdf";
import buffetMenu from "../../../assets/menu/BuffetMenu.pdf";

const MenuSection = () => {
  return (
    <>
      <div className="two-column-grid container-width-extra grid-gap-extra margin-top-extra ">
        <Content {...menuData} />
        <div className="menu-container">
          <div className="hero-overlay"></div>
          <div className="menus center-element container-width">
            <a className="button-white" href={lunchMenu} target="_blank">
              Lunch Menu
            </a>
            <a className="button-white" href={fingerFoodMenu} target="_blank">
              Finger Food Menu
            </a>
            <a className="button-white" href={buffetMenu} target="_blank">
              Buffet Menu
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
