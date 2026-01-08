import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg">
      <Header />

      <div className="dashboard-content">
        <h2 className="main-title">
          Student <span>Dashboard</span>
        </h2>

        <p className="subtitle">
          Welcome to your student portal. Access courses, explore college
          activities, and stay updated with trending technology companies.
        </p>

        <div className="card-container">
          <div className="card" 
           onClick={() => navigate("/fyc")}>
            <img src="/fyc.jpeg" alt="Courses" className="card-img" />
            <h3>Courses</h3>
            <p>View enrolled subjects, syllabus, and learning materials.</p>
            <button className="btn-purple">Open</button>
          </div>
          <div
            className="card"
            onClick={() => navigate("/collegevita")}
          >
            <img src="/college.jpeg" alt="College Vita" className="card-img" />
            <h3>College Vita</h3>
            <p>Explore events, achievements, and campus activities.</p>
            <button className="btn-blue">Explore</button>
          </div>
          <div
            className="card"
            onClick={() => navigate("/ttc")}
          >
            <img src="/ttc.jpg" alt="TTC" className="card-img" />
            <h3>Trending Tech Companies</h3>
            <p>Track top startups, valuations, and market trends.</p>
            <button className="btn-green">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
