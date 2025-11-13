import "./Shortlist.css";

export default function ShortlistCandidates() {
  const shortlisted = [
    {
      id: 1,
      name: "Emily Davis",
      role: "UI/UX Designer",
      skills: "Figma, Wireframing, Prototyping",
      status: "Shortlisted"
    },
    {
      id: 2,
      name: "Michael Turner",
      role: "Full Stack Developer",
      skills: "React, Node.js, MongoDB",
      status: "Shortlisted"
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Project Manager",
      skills: "Agile, Leadership, Planning",
      status: "Shortlisted"
    }
  ];

  return (
    <section className="shortlist-page">
      <h2 className="title">Shortlisted Candidates</h2>
      <p className="subtitle">
        Review and manage candidates shortlisted for interview.
      </p>

      <div className="shortlist-grid">
        {shortlisted.map((candidate) => (
          <div key={candidate.id} className="candidate-card glass">

            {/* Header */}
            <div className="card-header">
              <h3>{candidate.name}</h3>
              <span className="badge shortlisted">{candidate.status}</span>
            </div>

            {/* Details */}
            <p className="role">{candidate.role}</p>
            <p className="skills">
              <strong>Skills:</strong> {candidate.skills}
            </p>

            {/* Actions */}
            <div className="actions">
              <button className="btn view">View</button>
              <button className="btn schedule">Schedule</button>
              <button className="btn remove">Remove</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
