import React from "react";
import { Link } from "react-router-dom";

const Content = ({ heading, description, contentClass, children }) => {
  return (
    <>
      <section className={`${contentClass}`}>
        <h1>{heading}</h1>
        <p>{description}</p>
        {children}
      </section>
    </>
  );
};

export default Content;
