export default function JobCard({ title, company, location }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <span>{location}</span>
    </div>
  );
}
