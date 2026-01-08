import React, { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://collegevita-backend.onrender.com";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      const res = await fetch("http://localhost:5000/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Password reset successful");
    } catch (err) {
      alert(err.message || "Backend not reachable");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-icon purple">🔒</div>

        <h2>Reset Password</h2>

        <label>Email</label>
        <div className="auth-input">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <label>New Password</label>
        <div className="auth-input">
          <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="New Password" />
        </div>

        <label>Confirm Password</label>
        <div className="auth-input">
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        </div>

        <button onClick={handleReset} className="auth-btn purple-btn">
          Reset
        </button>

        <p className="auth-bottom-text">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
