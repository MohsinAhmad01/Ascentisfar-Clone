import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Email from "../../assets/email-icon.png";
import Uk from "../../assets/uk.png";
import Spain from "../../assets/spain.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" width="220px" height="100px" />
      </Link>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/integredents" onClick={closeMenu}>
            Active <br /> Integredents
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            Finished <br /> Products
          </Link>
        </li>
        <li>
          <Link to="/market" onClick={closeMenu}>
            Markets
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact-btn" onClick={closeMenu}>
            <img src={Email} alt="Contact Icon" />
            Contact
          </Link>
        </li>
        <li className="flags">
          <img src={Uk} alt="UK Flag" />
          <img src={Spain} alt="Spain Flag" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
