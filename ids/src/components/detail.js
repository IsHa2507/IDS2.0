import React from "react";
import { FaSpotify, FaMusic, FaEnvira, FaSitemap, FaInstagram } from "react-icons/fa"; 
import "./detail.css";

export default function Detail() {
  return (
    <>
      {/* Top Trusted Logos Section */}
      <section className="trusted-section">
        <p className="trusted-text">250+ ORGANIZATION TRUST CAMBRIDGE</p>
        <div className="trusted-logos">
          <div className="logo-item"><FaSpotify size={40} />Spotify</div>
          <div className="logo-item"><FaMusic size={40} />Music</div>
          <div className="logo-item"><FaEnvira size={40} />Envira</div>
          <div className="logo-item"><FaSitemap size={40} />Stitemap</div>
          <div className="logo-item"><FaInstagram size={40} />Instagram</div>
        </div>
      </section>

      {/* Cambridge Section */}
      <section className="cambridge-section">
        <div className="cambridge-wrapper">
          {/* Left Image Grid */}
          <div className="cambridge-left">
            {/* Concentric Rings */}
            <div className="rings-container2">
              <div className="ringd"></div>
              <div className="ringd"></div>
              <div className="ringd"></div>
            </div>

            {/* Overlapping Images */}
            <div className="image-grid">
              <div className="image-card yellow">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  alt="Student 1"
                />
              </div>
              <div className="image-card purple">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                  alt="Student 2"
                />
              </div>
              <div className="image-card yellow">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Student 3"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="cambridge-right">
            <div className="tag-text">PERFORMANCE CORES</div>
            <h2 className="heading">Fused deposition modeling</h2>
            <p className="subtext">Rapid prototyping system</p>

            <div className="tag-text">EFFICIENCY CORES</div>
            <h2 className="heading">Solid ground curing</h2>
            <p className="subtext">Technology used for models</p>

            <p className="description">
              Rapid prototyping is a group of techniques used to quickly fabricate
              a scale model of a physical part or assembly using three-dimensional
              printing technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
