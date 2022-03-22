import React from "react";
import { MdOutlinePhonelinkRing, MdOutlineMailOutline } from "react-icons/md";

const ContactInfo = () => {
  return (
    <>
      <h1>Order Now</h1>
      <p className="contactinfotext">
        Order any time of the day and we'll get back to you A.S.A.P
      </p>

      <ul className="contactinfo margin-top-small">
        <li>
          <MdOutlinePhonelinkRing />
          <a href="tel:info@kitchencatering.co.nz">096347358</a>
        </li>
        <li className="padding-top-small">
          <MdOutlineMailOutline />
          <a href="mailto:info@kitchencatering.co.nz">
            info@kitchencatering.co.nz
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
