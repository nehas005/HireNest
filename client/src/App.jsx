import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import Applications from "./pages/Applications";
import Shortlist from "./pages/Shortlist";
import Interviews from "./pages/Interviews";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/shortlist" element={<Shortlist />} />
            <Route path="/interviews" element={<Interviews />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
