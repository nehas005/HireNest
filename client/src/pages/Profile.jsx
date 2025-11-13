import { useState } from "react";
import { FaUserTie, FaBuilding, FaGlobe, FaEdit } from "react-icons/fa";
import "./Profile.css";

export default function RecruiterProfile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Alex Thompson",
    company: "BlueTech Innovations",
    website: "https://bluetech.io",
    description:
      "Recruiter at BlueTech Innovations. Passionate about hiring top-tier tech talent to build world-changing products."
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <section className="profile-page">
      <div className="profile-container">

        {/* Top Header */}
        <div className="profile-header">
          <FaUserTie className="avatar" />
          <h2>{profile.name}</h2>
          <p className="company">{profile.company}</p>
        </div>

        {/* Profile Details */}
        <div className="profile-card glass">
          <div className="profile-card-title">
            <h3>Recruiter Information</h3>
            <button className="edit-btn" onClick={() => setEditing(!editing)}>
              <FaEdit /> {editing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="profile-info">

            {/* Name */}
            <div className="info-row">
              <label><FaUserTie /> Name</label>
              {editing ? (
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.name}</p>
              )}
            </div>

            {/* Company */}
            <div className="info-row">
              <label><FaBuilding /> Company</label>
              {editing ? (
                <input
                  name="company"
                  value={profile.company}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.company}</p>
              )}
            </div>

            {/* Website */}
            <div className="info-row">
              <label><FaGlobe /> Website</label>
              {editing ? (
                <input
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                />
              ) : (
                <a href={profile.website} target="_blank">{profile.website}</a>
              )}
            </div>

            {/* Description */}
            <div className="info-row">
              <label>Description</label>
              {editing ? (
                <textarea
                  name="description"
                  value={profile.description}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">

          <div className="stat-card glass">
            <h4>Jobs Posted</h4>
            <p className="stat-number">12</p>
          </div>

          <div className="stat-card glass">
            <h4>Applications</h4>
            <p className="stat-number">89</p>
          </div>

          <div className="stat-card glass">
            <h4>Shortlisted</h4>
            <p className="stat-number">34</p>
          </div>

          <div className="stat-card glass">
            <h4>Interviews Scheduled</h4>
            <p className="stat-number">17</p>
          </div>

        </div>

      </div>
    </section>
  );
}
