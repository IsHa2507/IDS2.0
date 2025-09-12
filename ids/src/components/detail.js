import React from "react";
import "./detail.css";

export default function Detail() {
  return (
    <section className="cambridge-section">
      <div className="cambridge-wrapper">

        {/* Left Image Grid */}
        <div className="cambridge-left">
          {/* Concentric Circle Background */}
          <div className="circle-rings"></div>

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
  );
}
