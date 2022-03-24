import React from "react";
import { Link } from "react-router-dom";
import TopReviews from "../assets/images/topreviews.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer margin-top-extra">
        <div className="three-column-grid grid-gap-small margin-top margin-bottom container-width-extra">
          <section>
            <h2 className="margin-bottom-small">Quick Links</h2>
            <ul className="footer-nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="margin-bottom-small">Contact</h2>
            <p>6A/59 Victoria Street,</p>
            <p>Onehunga, Auckland</p>
            <a className="footer-links" href="tel:info@kitchencatering.co.nz">
              096347358
            </a>
            <br></br>
            <a
              className="footer-links"
              href="mailto:info@kitchencatering.co.nz"
            >
              info@kitchencatering.co.nz
            </a>
          </section>
          <section className="margin-bottom-small">
            <h2 className="margin-bottom-small">Best Catering Service</h2>
            <a
              href="https://www.topreviews.co.nz/best-catering-auckland/"
              target="_blank"
            >
              <img className="top-reviews" src={TopReviews}></img>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
