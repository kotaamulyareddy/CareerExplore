import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Header from "../components/Header";  
import "../styles/collegevita.css";

export default function CollegeVita() {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://careerexplore.onrender.com/api/collegevita")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setColleges(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching college data:", error);
        setColleges([]);
        setLoading(false);
      });
  }, []);

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) =>
      college["College Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [colleges, searchTerm]);

  if (loading) {
    return <p className="loading">Loading College Vita...</p>;
  }

  return (
    <>
      <Header />
      <div className="college-container">
        <div className="college-hero">
          <h1>College Vita</h1>
          <p>Explore colleges, academics, and campus facilities</p>
          <input
            type="text"
            className="college-search"
            placeholder="Search college by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredColleges.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            No colleges found
          </p>
        ) : (
          filteredColleges.map((college) => {
            const coursesArray =
              typeof college.Courses === "string"
                ? college.Courses.split(",").map((c) => c.trim())
                : [];

            const facilitiesArray =
              typeof college.Facilities === "string"
                ? college.Facilities.split(",").map((f) => f.trim())
                : [];

            return (
              <div className="college-card" key={college._id}>
                <h1 className="college-title">
                  {college["College Name"]}
                </h1>

                <p className="college-location">
                  {college.City}, {college.State}, {college.Country}
                </p>

                <div className="college-info-grid">
                  <div><b>College Type:</b> {college["College Type"]}</div>
                  <div><b>Established:</b> {college["Established Year"]}</div>
                  <div><b>Campus Size:</b> {college["Campus Size"]}</div>
                  <div><b>Rating:</b> ⭐ {college.Rating}</div>
                  <div><b>Genders:</b> {college["Genders Accepted"]}</div>
                  <div><b>Avg Fees:</b> ₹ {college["Average Fees"]}</div>
                </div>

                <div className="college-section">
                  <h2>Academic Overview</h2>
                  <p><b>Total Students:</b> {college["Total Student Enrollments"]}</p>
                  <p><b>Total Faculty:</b> {college["Total Faculty"]}</p>
                </div>

                <div className="college-section">
                  <h2>Courses Offered</h2>
                  <ul className="college-list">
                    {coursesArray.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>

                <div className="college-section">
                  <h2>Facilities</h2>
                  <ul className="college-list">
                    {facilitiesArray.length > 0
                      ? facilitiesArray.map((f, i) => <li key={i}>{f}</li>)
                      : <li>Not Available</li>}
                  </ul>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
