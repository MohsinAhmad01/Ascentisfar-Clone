import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Footer Logo" className="footer-image" />
        <a
          href="#"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Legal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
