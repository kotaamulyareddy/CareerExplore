import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      const res = await fetch("http://localhost:5000/api/auth/signup", {
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
    <div className="auth-bg">
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
  );
}

