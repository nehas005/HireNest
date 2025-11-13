import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT - BRAND */}
      <div className="navbar-left">
        <Link to="/" className="brand">
          Hire<span>Nest</span>
        </Link>
      </div>

      {/* CENTER - NAV LINKS */}
      <div className="navbar-center">
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT - PROFILE DROPDOWN */}
      <div className="navbar-right">
        <div className="profile-icon-wrapper">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="dropdown">
              <Link to="/profile">Profile</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}
