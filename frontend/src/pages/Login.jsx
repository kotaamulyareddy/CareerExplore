import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/landing.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      console.log("After api")
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Login failed");
      }

      const data = JSON.parse(text);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("login failed msg"+(error.message || "something went wrong"));
    }
  };

  return (
    <>
      <div className="auth-bg">
        {/* HEADER */}
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

        {/* LOGIN CARD */}
        <div className="login-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src="/caplogo.jpg"
              alt="Career Explore Logo"
              className="logo-image"
            />
          </div>

          <h2>Login</h2>

          <label>Email</label>
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/forgot" className="back-link">
            Forgot Password?
          </Link>

          <button onClick={handleLogin} className="btn">
            Login
          </button>

          <p className="signup">
            New user? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>

      {/* FOOTER */}
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
            <a href="/about">AI Career Tools</a>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="/contact">News</a>
            <a href="/contact">Reports</a>
            <a href="/contact">Help Center</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Career Explore. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
