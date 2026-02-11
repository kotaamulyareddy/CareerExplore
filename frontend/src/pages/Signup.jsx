import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    // 1️⃣ Empty field check
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    // 2️⃣ Email validation for Gmail only
    if (!/^[^\s@]+@gmail\.com$/.test(email)) {
      alert("Please enter a valid Gmail address (e.g., example@gmail.com)");
      return;
    }

    // 3️⃣ Password strength validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, contain one uppercase letter and one digit"
      );
      return;
    }

    // 4️⃣ Confirm password check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });


    const data = await res.json();

    if (res.ok) {
      alert("Signup successful");
      navigate("/login");
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};
  return (
    <>
    <div className="auth-bg">
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
    <button className="primary-btn" onClick={() => navigate("/about")}>
      About Us
    </button>

    <button className="primary-btn" onClick={() => navigate("/contact")}>
      Contact Us
    </button>
  </div>
</header>

      <div className="auth-card wide">
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img src="/caplogo.jpg" alt="Career Explore Logo" className="logo-image" />
        </div>

        <h2>Create Account</h2>

        <label>Name</label>
        <div className="auth-input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
        </div>

        <label>Email</label>
        <div className="auth-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>

        <label>Password</label>
        <div className="auth-input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          />
        </div>

        <label>Confirm Password</label>
        <div className="auth-input">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignup} className="auth-btn orange-btn">
          Sign Up
        </button>

        <p className="auth-bottom-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>

      {/* FOOTER */}
      <footer className="career-footer">
        <div className="footer-top">
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
          <p>© {new Date().getFullYear()} Career Explore. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

