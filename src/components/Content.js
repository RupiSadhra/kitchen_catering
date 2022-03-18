import React from "react";

const Content = ({ heading, description, contentClass }) => {
  return (
    <>
      <section className={`${contentClass}`}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </section>
    </>
  );
};

export default Content;
