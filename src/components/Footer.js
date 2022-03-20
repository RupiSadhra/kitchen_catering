import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer margin-top-extra">
        <div className="three-column-grid margin-top margin-bottom container-width">
          <section>
            <h2 class="margin-bottom-small">Quick Links</h2>
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
            <h2 class="margin-bottom-small">Contact</h2>
            <p>6A/59 Victoria Street,</p>
            <p>Onehunga, Auckland</p>
            <a class="footer-links" href="tel:info@kitchencatering.co.nz">
              096347358
            </a>
            <br></br>
            <a class="footer-links" href="mailto:info@kitchencatering.co.nz">
              info@kitchencatering.co.nz
            </a>
          </section>
          <section class="margin-bottom-small">
            <h2>Best Catering Service</h2>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
