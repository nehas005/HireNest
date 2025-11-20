export default function JobCard({ _id, title, company, location, onDelete }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <div className="job-card-bottom">
        <span className="job-card-location">{location}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(_id)}>
          Delete
        </button>
    </div>
  );
}
