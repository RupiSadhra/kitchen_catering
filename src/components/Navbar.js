import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSort, MdClear } from "react-icons/md";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <span className="logo">TKC</span>
        </Link>
        <ul className="nav-links">
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
        <div
          className="hamburger"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          {hamburger ? <MdSort /> : <MdClear />}
        </div>
      </nav>

      <div
        className="mobile-menu-container center-element"
        id={hamburger ? "zerowidth" : "fullwidth"}
      >
        <nav className="mobile-navbar">
          <ul className="mobile-nav-links">
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
