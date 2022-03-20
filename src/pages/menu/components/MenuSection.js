import React from "react";
import Content from "../../../components/Content";
import { menuData } from "../data";

const MenuSection = () => {
  return (
    <>
      <div className="two-column-grid container-width-extra grid-gap-extra margin-top-extra ">
        <Content {...menuData} />
        <div className="menu-container">
          <div className="hero-overlay"></div>
          <div className="menus center-element container-width">
            <a
              className="button-white"
              href="../../../assets/menu/The Menu.pdf"
              target="_blank"
            >
              Lunch Menu
            </a>
            <a className="button-white" href="" target="_blank">
              Finger Food Menu
            </a>
            <a className="button-white" href="" target="_blank">
              Buffet Menu
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
