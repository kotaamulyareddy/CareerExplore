import React from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div className="auth-bg">
      <div className="reset-card">
        <div className="mail-icon">📧</div>

        <h2>Forgot Password?</h2>
        <p className="msg">
          Enter your email and we will send a reset link.
        </p>

        <div className="auth-input">
          <input type="email" placeholder="Enter Email Address" />
        </div>

        <Link to="/reset" className="reset-btn">
          Send Reset Link
        </Link>
      </div>
    </div>
  );
}
