import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-bg">
      <header className="landing-header">
          <div className="logo-area">
  <img
    src="/caplogo.jpg"
    alt="Career Explore Logo"
    className="logo-image"
  />
  <span className="logo-text">Career Explore</span>
</div>


       <div className="header-actions">
  <button className="link-btn" onClick={() => navigate("/about")}>
    About Us
  </button>

  <button className="link-btn" onClick={() => navigate("/contact")}>
    Contact Us
  </button>

  <button className="link-btn" onClick={() => navigate("/login")}>
    Sign In
  </button>

  <button className="primary-btn" onClick={() => navigate("/signup")}>
    Get Started
  </button>
</div>
      </header>
<div className="announcement-bar">
  <p>
    New! Learn career-ready skills with industry-aligned programs.
    <span onClick={() => navigate("/signup")}>
      Get started
    </span>
  </p>
</div>
      <main className="hero hero-split">
        <div className="hero-left">
          <div className="badge">✨Career Explore</div>

          <h1 className="hero-title">Shape Your Career</h1>
          <h2 className="hero-subtitle">Unlock Your Potential</h2>

          <p className="hero-desc">
            Career Explore is the all-in-one platform for students to manage their
            academic journey, discover career paths, and connect with
            opportunities.
          </p>

          <button className="cta-btn" onClick={() => navigate("/signup")}>
            Get started now →
          </button>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Students collaboration"
            className="hero-image"
          />
        </div>
      </main>
      <section className="modules">
        <div className="module-card">
          <div className="module-image collegevita-img"></div>
          <div className="module-content">
            <h3>CollegeVita</h3>
            <p>
              CollegeVita acts as the central academic hub for students. It
              manages attendance, performance tracking, academic records,
              notifications, and institutional updates, helping students stay
              organized throughout their college journey.
            </p>
          </div>
        </div>

        <div className="module-card">
          <div className="module-image ttc-img"></div>
          <div className="module-content">
            <h3>TTC</h3>
            <p>
              The Technology Transfer Compendium module focuses on career readiness. It
              provides access to internships, placement drives, startup
              exposure, skill-based training programs, and industry
              collaborations to enhance employability.
            </p>
          </div>
        </div>

        <div className="module-card">
          <div className="module-image fyc-img"></div>
          <div className="module-content">
            <h3>Find Your Career</h3>
            <p>
              The First Year Companion module supports new students by offering
              onboarding guidance, academic orientation, campus resources, peer
              connections, and mentorship to ensure a smooth transition into
              college life.
            </p>
          </div>
        </div>
      </section>
     <footer className="career-footer">
  <div className="footer-top">
    {/* Left section */}
    <div className="footer-brand">
      <img src="/caplogo.jpg" alt="Career Explore" className="footer-logo" />
      <p className="footer-desc">
        Career Explore is a unified platform helping students manage academics,
        discover careers, and connect with opportunities.
      </p>

      <p className="footer-contact">
        <strong>Email:</strong> support@careerexplore.in <br />
        <strong>Phone:</strong> +91 98765 43210
      </p>
    </div>

    {/* Column 1 */}
    <div className="footer-col">
      <h4>ABOUT US</h4>
      <a href="/about">Overview</a>
      <a href="/about">Why Career Explore</a>
      <a href="/about">Our Journey</a>
      <a href="/about">Leadership</a>
    </div>

    {/* Column 2 */}
    <div className="footer-col">
      <h4>PLATFORM</h4>
      <a href="/signup">CollegeVita</a>
      <a href="/signup">TTC</a>
      <a href="/signup">Find Your Career</a>
      <a href="/about">AI Career Tools</a>
    </div>

    {/* Column 3 */}
    <div className="footer-col">
      <h4>RESOURCES</h4>
      <a href="/contact">News</a>
      <a href="/contact">Reports</a>
      <a href="/contact">Help Center</a>
      <a href="/contact">Contact Us</a>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Career Explore. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}
