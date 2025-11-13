import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState("jobs");
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tagline">● Smart Hiring Made Simple</span>
        <h1>
          Connect Startups with <br />
          <span className="highlight">Top Talent</span>
        </h1>
        <p className="subtitle">
          HireNest simplifies recruitment for startups. Post jobs, manage applications,
          and schedule interviews — all in one powerful platform.
        </p>

        <div className="search-section">
          <div className="tabs">
            <button
              className={activeTab === "jobs" ? "active" : ""}
              onClick={() => setActiveTab("jobs")}
            >
              💼 Search Jobs
            </button>
            <button
              className={activeTab === "companies" ? "active" : ""}
              onClick={() => setActiveTab("companies")}
            >
              🏢 Search Companies
            </button>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder={
                activeTab === "jobs"
                  ? "Search for jobs, skills, or positions..."
                  : "Search for companies, industries, or startups..."
              }
            />
            <button
              onClick={() =>
                navigate(activeTab === "jobs" ? "/jobs" : "/companies")
              }
              className="search-btn"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
