import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
  const navigate = useNavigate();
  return (
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
          className="primary-btn logout-btn"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
    </header>
  );
}