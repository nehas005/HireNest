import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostJob.css";

export default function PostJob() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  const handlePostJob = async (e) => {
    e.preventDefault();

    const job = { title, company, location, salary, skills, description };

    const res = await fetch("http://localhost:5000/api/jobs/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Job posted successfully!");
      navigate("/dashboard");
    } else {
      alert("Failed to post job");
    }
  };

  return (
    <div className="postjob-container">
      <form className="postjob-box" onSubmit={handlePostJob}>
        <h2>Post a Job</h2>

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Salary Range"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input
          type="text"
          placeholder="Required Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <textarea
          placeholder="Job Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}
