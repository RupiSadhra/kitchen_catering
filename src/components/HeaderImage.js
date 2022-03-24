import React from "react";

const HeaderImage = ({ headerClass, headerText }) => {
  return (
    <>
      <div className={`header-container ${headerClass}`}>
        <section className="header-text">
          <h1>{headerText}</h1>
        </section>

        <div className="header-overlay"></div>
      </div>
    </>
  );
};

export default HeaderImage;
