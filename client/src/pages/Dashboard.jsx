import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📄",
      title: "Post Jobs",
      desc: "Create and publish job openings in minutes",
      action: () => navigate("/PostJob"),
    },
    {
      icon: "👥",
      title: "Manage Applications",
      desc: "View and organize candidate applications",
      action: () => navigate("/applications"),
    },
    {
      icon: "📈",
      title: "Shortlist Candidates",
      desc: "Filter and shortlist top talent efficiently",
      action: () => navigate("/Shortlist"),
    },
    {
      icon: "📅",
      title: "Schedule Interviews",
      desc: "Coordinate interview times seamlessly",
      action: () => navigate("/Interviews"),
    },
  ];

  return (
    <section className="dashboard-hero">
      <div className="dashboard-container">
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
          <button
            className="dashboard-btn"
            onClick={() => navigate("/dashboard")}
          >
            Access Recruiter Dashboard →
          </button>
        </div>

        <div className="dashboard-features">
          {features.map((f, i) => (
            <div key={i} className="feature-card" onClick={f.action}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
