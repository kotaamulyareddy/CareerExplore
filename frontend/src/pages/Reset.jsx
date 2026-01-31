import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    if (!email || !newPassword || !confirmPassword) {
      alert("All fields required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        "https://careerexplore.onrender.com/api/auth/reset",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Password reset successful");
      navigate("/login");
    } catch (err) {
      alert(err.message || "Backend not reachable");
    }
  };

  return (
    <>
      <div className="auth-bg">
        {/* HEADER – same as Signup */}
        <header className="landing-header auth-navbar">
          <div className="logo-area">
            <button
              onClick={() => navigate(-1)}
              className="back-btn"
            >
              ←
            </button>

            <img
              src="/caplogo.jpg"
              alt="Career Explore Logo"
              className="logo-image"
            />
            <span className="logo-text">Career Explore</span>
          </div>

          <div className="header-actions">
            <button
              className="primary-btn"
              onClick={() => navigate("/about")}
            >
              About Us
            </button>

            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </header>

        {/* RESET CARD */}
        <div className="auth-card">
          <div className="auth-icon purple">🔒</div>

          <h2>Reset Password</h2>

          <label>Email</label>
          <div className="auth-input">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <label>New Password</label>
          <div className="auth-input">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
          </div>

          <label>Confirm Password</label>
          <div className="auth-input">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>

          <button onClick={handleReset} className="auth-btn purple-btn">
            Reset
          </button>

          <p className="auth-bottom-text">
            Back to <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      {/* FOOTER – same as Signup */}
      <footer className="career-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/caplogo.jpg"
              alt="Career Explore"
              className="footer-logo"
            />
            <p className="footer-desc">
              Career Explore is a unified platform helping students manage
              academics, discover careers, and connect with opportunities.
            </p>

            <p className="footer-contact">
              <strong>Email:</strong> support@careerexplore.in <br />
              <strong>Phone:</strong> +91 98765 43210
            </p>
          </div>

          <div className="footer-col">
            <h4>ABOUT US</h4>
            <a href="/about">Overview</a>
            <a href="/about">Why Career Explore</a>
            <a href="/about">Our Journey</a>
            <a href="/about">Leadership</a>
          </div>

          <div className="footer-col">
            <h4>PLATFORM</h4>
            <a href="/landing">CollegeVita</a>
            <a href="/landing">TTC</a>
            <a href="/career">Find Your Career</a>
            <a href="#">AI Career Tools</a>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="#">News</a>
            <a href="/contact">Reports</a>
            <a href="/contact">Help Center</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Career Explore. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
