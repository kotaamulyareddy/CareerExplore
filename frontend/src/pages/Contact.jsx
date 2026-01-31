import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="landing-bg">
      {/* Navbar */}
      <header className="landing-header">
        <div className="logo-area">
          <button onClick={() => navigate("/")} className="back-btn">
            ←
          </button>
          <img src="/caplogo.jpg" alt="Career Explore" className="logo-image" />
          <span className="logo-text">Career Explore</span>
        </div>

        <div className="header-actions">
          <button className="link-btn" onClick={() => navigate("/about")}>
            About Us
          </button>
          <button className="link-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </header>

      {/* Contact Content */}
      <section className="info-section">
        <span className="badge">📩 Contact Us</span>

        <h1 className="info-title">We’d love to hear from you</h1>

        <p className="info-desc">
          Have questions, feedback, or suggestions? Reach out and our team will
          get back to you shortly.
        </p>

        <form className="contact-card" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="cta-btn">
            Send Message →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        © {new Date().getFullYear()} Career Explore. All rights reserved.
      </footer>
    </div>
  );
}
