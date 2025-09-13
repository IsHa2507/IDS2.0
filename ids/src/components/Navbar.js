import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi"; // ✅ Proper cart icon

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0); // default as zero

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
          <li>Pages</li>
        </ul>

        {/* Right Buttons */}
        <div className="navbar-right">
          <button className="btn-outline">let’s talk</button>

          {/* Shopping Cart */}
          <div className="cart-icon">
            <FiShoppingCart className="cart-svg" />
            <span className="cart-badge">{cartCount}</span>
          </div>

          {/* 
            👉 In future, you can link this:
            setCartCount(cartCount + 1) whenever an item is added
          */}
        </div>
      </div>
    </nav>
  );
}
