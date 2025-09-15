import React from "react";
import "./Herosection.css";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            {/* Top Banner now inside left column */}
            <div className="top-bannerH">
              <span className="tag-newH">New</span>
              <p>Check our new premium Webflow Templates Azwedo</p>
              <FiArrowRight className="arrow-icon" />
            </div>

            <h1 className="hero-title">
              Your Digital Portal <br /> to Excellence
            </h1>
            <p className="hero-subtitle">
              Where imagination meets innovation. Unleash your creativity with us!
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Contact Us</button>
            </div>
          </div>

          {/* Right Content with Rings */}
          <div className="hero-right">
            <div className="rings-container">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
            </div>
            <img
              src="#"
              alt="Happy student"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
