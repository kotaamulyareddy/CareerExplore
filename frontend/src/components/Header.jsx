import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">Career Explore</h2>
      </div>
      <div className="nav-right">
        <button
          className="logout-btn"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
