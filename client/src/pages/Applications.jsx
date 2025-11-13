import "./Applications.css";

export default function ManageApplications() {
  const applications = [
    {
      id: 1,
      name: "Sarah Williams",
      role: "Frontend Developer",
      skills: "React, JavaScript, UI/UX",
      status: "Applied"
    },
    {
      id: 2,
      name: "John Carter",
      role: "Backend Developer",
      skills: "Node.js, Express, MongoDB",
      status: "In Review"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "UI/UX Designer",
      skills: "Figma, Adobe XD, Wireframing",
      status: "Shortlisted"
    }
  ];

  return (
    <section className="manageapps-page">
      <h2 className="page-title">Manage Applications</h2>
      <p className="page-subtitle">
        Review and process candidates who have applied to your job postings.
      </p>

      <div className="applications-grid">
        {applications.map((app) => (
          <div key={app.id} className="application-card glass">

            <div className="card-header">
              <h3>{app.name}</h3>
              <span className={`status-badge ${app.status.toLowerCase().replace(" ", "-")}`}>

                {app.status}
              </span>
            </div>

            <p className="role">{app.role}</p>
            <p className="skills">
              <strong>Skills:</strong> {app.skills}
            </p>

            <div className="card-actions">
              <button className="btn view">View</button>
              <button className="btn shortlist">Shortlist</button>
              <button className="btn reject">Reject</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
