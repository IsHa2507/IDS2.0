import React from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1581090700227-4c4f50e1c49f?auto=format&fit=crop&w=800&q=80",
    tag: "CASE STUDY",
    date: "10 Apr",
    title: "Discovering Webflow – The Empowering Web Design Platform",
    desc: "How to cultivate a growth mindset and embrace challenges as opportunities for growth.",
    cta: "Read this blog",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1581092787270-91a1a27d4d4e?auto=format&fit=crop&w=800&q=80",
    tag: "NEWS",
    date: "9 Apr",
    title: "Top 10 Webflow Template Categories",
    desc: "Webflow templates provide a head start for web designers and developers, offering pre-designed layouts and styles.",
    cta: "Read this blog",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1520975916090-310aaa3085f8?auto=format&fit=crop&w=800&q=80",
    tag: "NEWS",
    date: "8 Apr",
    title: "How to Build an E-commerce Quickly with Webflow",
    desc: "How to cultivate a growth mindset and embrace challenges as opportunities for growth.",
    cta: "Read this blog",
  },
];

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-wrapper">
        <div className="blog-header">
          <h4>OUR BLOG</h4>
          <h2>Trends and Transformation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas felis felis, vulputate sit amet mauris.
          </p>
        </div>

        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-img-container">
                <img src={blog.img} alt={blog.title} className="blog-img" />
                <span className="blog-hover-text">
                  <span className="blog-arrow">↗</span> {blog.cta}
                </span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-tag">{blog.tag}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
