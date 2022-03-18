import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
