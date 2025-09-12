import React from "react";
import "./Herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        {/* Top Banner */}
        <div className="top-banner">
          <span className="tag-new">New</span>
          <p>Check our new premium Webflow Templates Azwedo</p>
          <span className="arrow">➜</span>
        </div>

        {/* Main Content */}
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
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

          {/* Right Image */}
          <div className="hero-right">
            <div className="circle-pattern"></div>
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Happy student"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
