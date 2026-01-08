
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const text = await res.text(); 

    if (!res.ok) {
      throw new Error(text || "Login failed");
    }

    const data = JSON.parse(text); 
    alert("Login successful");
    navigate("/dashboard");

  } catch (error) {
    console.error(error);
    alert("Login failed: Enter the correct credentials");
  }
};
  return (
    <div className="auth-bg">
      <div className="login-card">
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
  <img
    src="/caplogo.jpg"
    alt="Career Explore Logo"
    className="logo-image"
  />
</div>

        <h2>Login</h2>

        <label>Email</label>
        <div className="input-box">
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <label>Password</label>
        <div className="input-box">
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <Link to="/forgot" className="back-link">Forgot Password?</Link>

        <button onClick={handleLogin} className="btn">Login</button>

        <p className="signup">
          New user? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
}


