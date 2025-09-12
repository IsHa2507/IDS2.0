import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-circle">
            <span className="logo-text">C</span>
          </div>
          <h1>cambridge</h1>
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages </li>
        </ul>

        {/* Right Buttons */}
        <div className="navbar-right">
          <button className="btn-outline">let’s talk</button>
          <div className="cart-icon">
            <span className="material-icons">shopping_cart</span>
            <span className="cart-badge">0</span>
          </div>
        </div>

      </div>
    </nav>
  );
}
