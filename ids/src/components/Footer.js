import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h2 className="logo">Cambridge</h2>
          <p className="tagline">
            Where imagination meets innovation - unleash your creativity with us!
          </p>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h4>PAGES</h4>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>TEMPLATE</h4>
            <a href="#">Style Guide</a>
            <a href="#">Licencing</a>
            <a href="#">Change Log</a>
            <a href="#">Instructions</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <p>
          © 2024 - Made with 💙 by <a href="#">Azwedo</a> & <a href="#">Wedoflow</a> | Powered by{" "}
          <a href="#">Webflow</a>
        </p>
      </div> */}
    </footer>
  );
}
