import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";   

export default function Dashboard() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const deleteJob = async (id) => {
  const res = await fetch(`http://localhost:5000/api/jobs/delete/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (res.ok) {
    alert("Job deleted successfully!");
    setJobs((prev) => prev.filter((job) => job._id !== id));
  } else {
    alert(data.error);
  }
};

  // Fetch jobs from backend
  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetch("http://localhost:5000/api/jobs/all");
      const data = await res.json();
      setJobs(data);
    };

    loadJobs();
  }, []);

  return (
    <section className="dashboard-hero">
      <div className="dashboard-container">

        {/* DASHBOARD TEXT */}
        <div className="dashboard-text">
          <div className="tagline">👤 For Recruiters</div>
          <h1>
            Streamline Your <br />
            <span className="highlight">Hiring Process</span>
          </h1>
          <p>
            Access your complete recruiter dashboard. Manage everything from job
            postings to interview scheduling in one organized platform.
          </p>

          <button className="dashboard-btn" onClick={() => navigate("/postjob")}>
            + Post a New Job
          </button>
        </div>

        {/* DASHBOARD FEATURES */}
        <div className="dashboard-features">

          <Link to="/postjob" className="feature-card-link">
            <div className="feature-card">
              <div className="icon">📝</div>
              <h3>Post Jobs</h3>
              <p>Create and publish job openings in minutes</p>
            </div>
          </Link>

          <Link to="/applications" className="feature-card-link">
            <div className="feature-card">
              <div className="icon">👥</div>
              <h3>Manage Applications</h3>
              <p>View and organize candidate applications</p>
            </div>
          </Link>

          <Link to="/shortlist" className="feature-card-link">
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Shortlist Candidates</h3>
              <p>Filter and shortlist top talent efficiently</p>
            </div>
          </Link>

          <Link to="/interviews" className="feature-card-link">
            <div className="feature-card">
              <div className="icon">📅</div>
              <h3>Schedule Interviews</h3>
              <p>Coordinate interview times seamlessly</p>
            </div>
          </Link>
        </div>

        {/* YOUR JOB POSTS SECTION */}
        <div className="jobs-section">
          <h2>Your Recent Job Posts</h2>

          {jobs.length === 0 ? (
            <p className="no-jobs">No jobs posted yet.</p>
          ) : (
            <div className="jobs-grid">
              {jobs.map((job) => (
                <JobCard
                  key={job._id}
                  _id={job._id}          
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  onDelete={deleteJob}
                />

              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
