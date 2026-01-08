import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/fyc.css";

export default function CareerCourses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://careerexplore.onrender.com/api/careers");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching careers:", err);
      }
    };

    fetchCourses();
  }, []);

  // 🔍 Filter logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.partner.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel =
      levelFilter === "All" || course.level === levelFilter;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="bg">
      <Header />

      <h2 className="main-title">
        Find Your <span>Career</span>
      </h2>

      <p className="subtitle">
        Industry recognized courses to boost your career
      </p>

      {/* 🔍 Search + Filter */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* 📦 Cards */}
      <div className="career-card-container">
        {filteredCourses.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No courses found
          </p>
        ) : (
          filteredCourses.map((course) => (
            <div className="career-card" key={course._id}>
              <h3>{course.course}</h3>
              <p className="partner">Partner: {course.partner}</p>

              <p><b>Level:</b> {course.level}</p>
              <p><b>Duration:</b> {course.duration}</p>
              <p><b>Certificate:</b> {course.certificatetype}</p>

              <div className="rating">
                ⭐ {course.rating} ({course.reviewcount} reviews)
              </div>

              <div className="skills">
                <b>Skills:</b>
                <ul>
                  {(Array.isArray(course.skills)
                    ? course.skills
                    : String(course.skills || "")
                        .replace(/[[\]{}"]/g, "")
                        .split(",")
                  )
                    .slice(0, 5)
                    .map((s, i) => (
                      <li key={i}>{s.trim()}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

