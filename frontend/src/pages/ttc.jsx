import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/ttc.css";

export default function TTC() {
  const [startups, setStartups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ttc")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setStartups(res.data);
        } else {
          setStartups([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching TTC data:", error);
        setStartups([]);
      });
  }, []);

  // 🔍 Filtered startups based on search and industry
  const filteredStartups = startups.filter((s) => {
    const matchesSearch =
      (s["Startup Name"] || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (s.Industry || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIndustry =
      industryFilter === "All" || s.Industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  // 🔹 Unique industries for filter dropdown
  const industries = [
    "All",
    ...Array.from(new Set(startups.map((s) => s.Industry).filter(Boolean))),
  ];

  return (
    <div className="bg">
      <Header />

      <h2 className="main-title">
        Trending Tech <span>Companies</span>
      </h2>
      <p className="subtitle">
        Startup insights across industries, regions and growth metrics
      </p>

      {/* 🔍 Search + Filter */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search startups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="filter-select"
        >
          {industries.map((ind, i) => (
            <option key={i} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      <div className="ttc-card-container">
        {filteredStartups.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No startup data available
          </p>
        ) : (
          filteredStartups.map((s, index) => (
            <div
              className="ttc-card"
              key={s._id || s["Startup Name"] || index}
            >
              <h3>{s["Startup Name"] || "Startup Name"}</h3>
              <p className="industry">{s.Industry || "N/A"}</p>

              <div className="ttc-info">
                <p><b>Region:</b> {s.Region || "N/A"}</p>
                <p><b>Founded:</b> {s["Year Founded"] || "N/A"}</p>
                <p><b>Employees:</b> {s.Employees || "N/A"}</p>
                <p>
                  <b>Market Share:</b> {s["Market Share (%)"] ?? "N/A"}%
                </p>
              </div>

              <div className="ttc-metrics">
                <p>
                  <b>Funding Rounds:</b> {s["Funding Rounds"] ?? "N/A"}
                </p>
                <p>
                  <b>Funding:</b> ${s["Funding Amount (M USD)"] ?? "N/A"}M
                </p>
                <p>
                  <b>Valuation:</b> ${s["Valuation (M USD)"] ?? "N/A"}M
                </p>
                <p>
                  <b>Revenue:</b> ${s["Revenue (M USD)"] ?? "N/A"}M
                </p>
              </div>

              <div className={`profit ${s.Profitable ? "yes" : "no"}`}>
                {s.Profitable ? "Profitable" : "Not Profitable"}
              </div>

              <p className="exit">
                Exit Status: <b>{s["Exit Status"] || "N/A"}</b>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
