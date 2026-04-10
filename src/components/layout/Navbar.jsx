import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../shared/ThemeToggle";

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Moe Kyaw Aung
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}

export default Navbar;
