import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      {/* Left Content */}
      <div className="newsletter-left">
        <h2>
          Join our newsletter to <br /> <span>stay up to date!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis
          felis, vulputate sit amet mauris et, semper aliquam ligula.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Right Images with Rings */}
      <div className="newsletter-right">
        {/* Concentric Rings */}
        <div className="rings-container">
          <div className="ringn"></div>
          <div className="ringn"></div>
          <div className="ringn"></div>
        </div>

        {/* Images */}
        <div className="image-grid">
          {/* Student 1 */}
          <div className="image-card yellow">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
              alt="student"
            />
           
          </div>

          {/* Student 2 */}
          <div className="image-card purple">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
              alt="mentor"
            />
            
          </div>
          {/* 🔥 Floating Tags */}
          <div className="tag-badgen badgen-top-left">
            <strong>2700+</strong>
            <span>Students Community</span>
          </div>

          <div className="tag-badgen badgen-top-right">
            <strong>240+</strong>
            <span>Online Courses</span>
          </div>

          <div className="tag-badgen badgen-bottom-left">
            <strong>110+</strong>
            <span>Mentors & Teachers</span>
          </div>
         
        </div>
      </div>
    </section>
  );
}
