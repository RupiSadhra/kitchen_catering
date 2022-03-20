import React from "react";
import Content from "../../../components/Content";
import { headerData } from "../data";

const HeaderImage = () => {
  return (
    <>
      <div className="menu-header">
        <Content {...headerData} />
      </div>
    </>
  );
};

export default HeaderImage;
