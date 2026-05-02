import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const links = [
  { to: "/", label: "Explore" },
  { to: "/jobs", label: "Jobs" },
  { to: "/brief", label: "Hire" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">palette<span>.</span></Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/profile" className="btn-outline">{user.nickname}</Link>
              <button className="btn-outline" onClick={handleLogout}>Log out</button>
              <Link to="/upload" className="btn-primary">Upload work</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline">Log in</Link>
              <Link to="/upload" className="btn-primary">Upload work</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
