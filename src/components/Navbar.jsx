import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Explore" },
  { to: "/jobs", label: "Jobs" },
  { to: "/brief", label: "Hire" },
];

export default function Navbar() {
  const { pathname } = useLocation();

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
          <Link to="/login" className="btn-outline">Log in</Link>
          <Link to="/upload" className="btn-primary">Upload work</Link>
        </div>
      </div>
    </nav>
  );
}
