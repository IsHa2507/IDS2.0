import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Emily Davis",
    role: "Lifelong Learner",
    text: "Cambridge isn't just an educational institution; it's a platform for lifelong learning. The diverse range of courses ensures that learners can continue to evolve and stay ahead.",
    img: "https://source.unsplash.com/100x100/?woman,portrait",
    bg: "#fde2e2",
  },
  {
    name: "James Carter",
    role: "Tech Professional",
    text: "The flexibility of learning allowed me to balance work and education. The mentors are excellent, and the community support is unmatched.",
    img: "https://source.unsplash.com/100x100/?man,portrait",
    bg: "#e2f7f5",
  },
  {
    name: "Sophia Turner",
    role: "Graduate Student",
    text: "I gained not just knowledge but confidence. This platform helped me upskill quickly and prepared me for real-world challenges.",
    img: "https://source.unsplash.com/100x100/?student,portrait",
    bg: "#f3e7ff",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      {/* Left Fixed Text */}
      <div className="testimonial-left">
        <p className="tag">TESTIMONIALS</p>
        <h2>Real Voices <br /> Real Experiences</h2>
        <p>
          Hear from learners around the globe who have transformed their careers
          and lives with our platform.
        </p>
      </div>

      {/* Right Scrollable Cards */}
      <div className="testimonial-right">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card" style={{ background: t.bg }}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <p className="testimonial-text">"{t.text}"</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
