import React from "react";

const styleClass = ["btn-primary", "btn-outline"];
const textColor = ["white", "black"];

const Button = ({ children, buttonStyle, buttonColor }) => {
  let checkButtonStyle = styleClass.includes(buttonStyle)
    ? buttonStyle
    : styleClass[0];
  let checkButtonColor = textColor.includes(buttonStyle)
    ? buttonStyle
    : textColor[0];
  return (
    <>
      <button className={styleClass}>{children}</button>
    </>
  );
};

export default Button;
