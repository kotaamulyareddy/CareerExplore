import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <header className="landing-header auth-navbar">
        <div className="logo-area">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>

          <img src="/caplogo.jpg" alt="Career Explore" className="logo-image" />
          <span className="logo-text">Career Explore</span>
        </div>

        <div className="header-actions">
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="landing-bg" style={{ paddingTop: "0px" }}>
        <section className="info-section">
          <span className="badge">✨ About Career Explore</span>

          <h1 className="info-title">
            Empowering Students for a Smarter Future
          </h1>

          <p className="info-desc">
            Career Explore is an integrated student-centric platform designed to
            simplify academic management, enhance career awareness, and bridge
            the gap between education and real-world opportunities. Our goal is
            to provide students with clarity, confidence, and the right tools
            to succeed in their academic and professional journeys.
          </p>

          {/* VISION */}
          <div className="info-highlight">
            <h2>🎯 Our Vision</h2>
            <p>
              To become a one-stop digital companion for students by combining
              academics, career guidance, and industry exposure into a single,
              easy-to-use platform. We envision a future where every student
              makes informed decisions backed by data, guidance, and
              opportunity.
            </p>
          </div>

          {/* FEATURES */}
          <div className="info-grid">
            <div className="info-card">
              <h3>🎓 Academic Management</h3>
              <p>
                Manage attendance, track academic performance, access course
                materials, and stay updated with college announcements — all
                from one unified dashboard.
              </p>
            </div>

            <div className="info-card">
              <h3>🚀 Career Exploration</h3>
              <p>
                Discover career paths, internships, trending technologies, and
                top companies. Career Explore helps students align their skills
                with market demands.
              </p>
            </div>

            <div className="info-card">
              <h3>🏫 College Vita</h3>
              <p>
                Explore campus life including events, achievements, clubs, and
                student activities, encouraging holistic student development.
              </p>
            </div>

            <div className="info-card">
              <h3>📊 Trending Tech Companies</h3>
              <p>
                Stay informed about fast-growing startups, leading tech
                companies, valuations, and industry trends shaping the future.
              </p>
            </div>

            <div className="info-card">
              <h3>🤖 Smart & Scalable</h3>
              <p>
                Built using modern web technologies, Career Explore is scalable,
                responsive, and designed to evolve with future AI-powered
                features.
              </p>
            </div>

            <div className="info-card">
              <h3>🤝 Student-First Approach</h3>
              <p>
                Every feature is designed keeping students in mind — simple
                navigation, clean UI, and meaningful insights without
                complexity.
              </p>
            </div>
          </div>

          {/* WHY CAREER EXPLORE */}
          <div className="info-highlight">
            <h2>💡 Why Career Explore?</h2>
            <p>
              Students often struggle to manage academics while planning their
              careers. Career Explore solves this problem by combining academic
              tracking, career discovery, and industry awareness into one
              seamless platform. It reduces confusion, saves time, and empowers
              students to focus on growth.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="landing-footer">
          © {new Date().getFullYear()} Career Explore. All rights reserved.
        </footer>
      </div>
    </>
  );
}
