import "./About.css";
import { FaUserPlus, FaSearch, FaClipboardCheck, FaBolt } from "react-icons/fa";
import { FaClock, FaRocket, FaBullseye } from "react-icons/fa";

export default function About() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Sign Up",
      desc: "Create your account as a job seeker or startup recruiter",
      step: "1",
    },
    {
      icon: <FaSearch />,
      title: "Explore & Post",
      desc: "Job seekers browse openings, startups post positions",
      step: "2",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Apply & Review",
      desc: "Submit applications and recruiters review candidates",
      step: "3",
    },
    {
      icon: <FaBolt />,
      title: "Get Hired",
      desc: "Schedule interviews and make hiring decisions fast",
      step: "4",
    },
  ];

  const reasons = [
    {
      icon: "⚡",
      title: "Fast & Efficient",
      desc: "No more juggling emails and spreadsheets",
    },
    {
      icon: <FaBullseye />,
      title: "Organized",
      desc: "Everything in one centralized platform",
    },
    {
      icon: <FaRocket />,
      title: "Startup Friendly",
      desc: "Built specifically for growing companies",
    },
  ];

  return (
    <section className="about-page">
      <div className="how-it-works">
        <h2>
          How <span className="highlight">HireNest</span> Works
        </h2>
        <p className="subtitle">
          A simple, organized process that saves time and eliminates the hassle
          of traditional hiring
        </p>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="step-number">{step.step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="why-choose">
        <h2>Why Choose <span className="highlight">HireNest?</span></h2>
        <div className="reasons">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <div className="reason-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
