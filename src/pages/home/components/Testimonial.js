import React, { useState } from "react";
import { testimonials } from "../data";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonial = () => {
  let [counter, setCounter] = useState(0);

  const total = testimonials.length - 1;
  // console.log(total);
  const decreaseCounter = () => {
    counter === 0 ? setCounter(total) : setCounter(counter - 1);
    console.log("Decrease: " + counter);
  };

  const increaseCounter = () => {
    counter === total ? setCounter(0) : setCounter(counter + 1);
    console.log("Increase: " + counter);
  };

  return (
    <>
      <div className="testimonial-container margin-top-extra container-width-extra content-text">
        <h1>Testimonials</h1>
        <div className="previous-arrow" onClick={decreaseCounter}>
          <MdArrowBackIos />
        </div>
        <div className="next-arrow" onClick={increaseCounter}>
          <MdArrowForwardIos />
        </div>
        <div className="testimonials margin-top-extra">
          {testimonials.map((testimonial, index) => {
            return <p key={index}>{index === counter ? testimonial : null}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
