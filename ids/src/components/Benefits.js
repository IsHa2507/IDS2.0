import React from "react";
import "./Benefits.css";

const benefitsData = [
  {
    id: 1,
    title: "Lifetime access",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    bgColor: "#f3e8ff", // light purple
    icon: "💻"
  },
  {
    id: 2,
    title: "Lifetime access",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    bgColor: "#fff7e6", // light yellow
    icon: "📦"
  },
  {
    id: 3,
    title: "Lifetime access",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    bgColor: "#ffece6", // light peach
    icon: "📬"
  }
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <p className="subtitle">WHY CHOOSE US</p>
      <h2 className="title">Benefits of Online Learning</h2>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, 
        vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, 
        sed feugiat leo posuere ac.
      </p>

      <div className="benefits-grid">
        {benefitsData.map((item) => (
          <div
            className="benefit-card"
            style={{ backgroundColor: item.bgColor }}
            key={item.id}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
