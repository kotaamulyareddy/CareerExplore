import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Forgot() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <header className="landing-header auth-navbar">
        <div className="logo-area">
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
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
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="auth-bg">
        <div className="reset-card">
          <div className="mail-icon">📧</div>

          <h2>Forgot Password?</h2>
          <p className="msg">
            Enter your email and we will send a reset link.
          </p>

          <div className="auth-input">
            <input
              type="email"
              placeholder="Enter Email Address"
            />
          </div>

          <Link to="/reset" className="reset-btn">
            Send Reset Link
          </Link>
        </div>
      </div>
    </>
  );
}
