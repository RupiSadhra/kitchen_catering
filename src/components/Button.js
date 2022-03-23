import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, buttonStyle, path }) => {
  return (
    <>
      <Link to={path} className={`${buttonStyle}`}>
        {text}
      </Link>
    </>
  );
};

export default Button;
