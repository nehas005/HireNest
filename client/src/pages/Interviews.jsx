import "./Interviews.css";

export default function Interviews() {
  const interviews = [
    {
      id: 1,
      candidate: "Emily Davis",
      role: "UI/UX Designer",
      datetime: "Feb 10, 2025 - 2:00 PM",
      status: "Scheduled"
    },
    {
      id: 2,
      candidate: "Michael Turner",
      role: "Full Stack Developer",
      datetime: "Feb 11, 2025 - 11:30 AM",
      status: "Pending"
    },
    {
      id: 3,
      candidate: "Aisha Khan",
      role: "Project Manager",
      datetime: "Feb 13, 2025 - 5:00 PM",
      status: "Scheduled"
    }
  ];

  return (
    <section className="interviews-page">
      <h2 className="title">Schedule Interviews</h2>
      <p className="subtitle">
        Manage and schedule interviews with shortlisted candidates.
      </p>

      <div className="interview-grid">
        {interviews.map((i) => (
          <div key={i.id} className="interview-card glass">
            
            {/* HEADER */}
            <div className="card-header">
              <h3>{i.candidate}</h3>
              <span className={`status ${i.status.toLowerCase()}`}>
                {i.status}
              </span>
            </div>

            {/* DETAILS */}
            <p className="role">{i.role}</p>
            <p className="datetime">
              <strong>Date & Time:</strong> {i.datetime}
            </p>

            {/* ACTIONS */}
            <div className="actions">
              <button className="btn edit">Edit</button>
              <button className="btn cancel">Cancel</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
