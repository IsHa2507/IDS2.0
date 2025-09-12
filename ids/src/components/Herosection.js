import React from "react";
import { motion } from "framer-motion";
import "./Herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Top Banner */}
      <div className="top-banner">
        <span className="tag-new">New</span>
        <p>Check our new premium Webflow Templates Azwedo</p>
        <span className="arrow">➜</span>
      </div>

      {/* Main Content */}
      <div className="hero-grid">
        {/* Left Section */}
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Your Digital Portal <br /> to Excellence
          </motion.h1>

          <p className="hero-subtitle">
            Where imagination meets innovation. Unleash your creativity with us!
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>

        {/* Right Section (Image + Circle) */}
        <div className="hero-right">
          <div className="circle-bg"></div>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Happy student"
            className="hero-image"
          />
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="hero-arrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="arrow-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
