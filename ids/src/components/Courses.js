import React from "react";
import { FiTag, FiStar } from "react-icons/fi";
import "./Courses.css";

const courses = [
  {
    title: "Transformative Techniques for Seasoned Creative Professionals",
    duration: "3 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?design,laptop",
    level: "Intermediate",
    time: "5hr 32 min",
    videos: 9,
    files: 25,
    price: "$33.70 USD",
  },
  {
    title: "Mastering Advanced Design Strategies for Professional Creatives",
    duration: "4 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?design,art",
    level: "Advanced",
    time: "7hr 15 min",
    videos: 12,
    files: 30,
    price: "$49.90 USD",
  },
  {
    title: "Innovating Design Excellence in the Modern Professional World",
    duration: "2 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?business,team",
    level: "Beginner",
    time: "4hr 10 min",
    videos: 7,
    files: 18,
    price: "$25.00 USD",
  },
  {
    title: "Start Your Learning Adventure Here",
    duration: "6 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?books,study",
    level: "All Levels",
    time: "9hr 20 min",
    videos: 20,
    files: 40,
    price: "$75.00 USD",
  },
  {
    title: "From Art to Science: Our Course Topics",
    duration: "3 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?ux,wireframe",
    level: "Intermediate",
    time: "6hr 05 min",
    videos: 10,
    files: 22,
    price: "$42.50 USD",
  },
  {
    title: "Content Writing Bootcamp: Crafting Compelling Text",
    duration: "5 MONTHS",
    rating: 5,
    img: "https://source.unsplash.com/400x300/?writing,coffee",
    level: "Beginner",
    time: "8hr 00 min",
    videos: 15,
    files: 28,
    price: "$59.99 USD",
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-header">
        <h4>OUR COURSES</h4>
        <h2>Top Courses to Elevate Your Digital Skills</h2>
        <p>
          Learn from expert-led courses designed to boost your digital skills
          and help you thrive in the creative world.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="courses-grid">
        {courses.map((course, idx) => (
          <div key={idx} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <div className="card-img-container">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p>
                    {course.duration} •{" "}
                    {Array.from({ length: course.rating }).map((_, i) => (
                      <FiStar key={i} className="star-icon" />
                    ))}
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <div className="details">
                  <div>
                    <span className="label">Level</span>
                    <p>{course.level}</p>
                  </div>
                  <div>
                    <span className="label">Duration</span>
                    <p>{course.time}</p>
                  </div>
                  <div>
                    <span className="label">Videos</span>
                    <p>{course.videos}</p>
                  </div>
                  <div>
                    <span className="label">Files Included</span>
                    <p>{course.files}</p>
                  </div>
                  <hr />
                  <p className="price">
                    <FiTag className="price-icon" /> <strong>{course.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
