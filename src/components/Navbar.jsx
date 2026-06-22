import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Skills", path: "#skills" },
    { label: "Projects", path: "#projects" },
    { label: "Experience", path: "#experience" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        AI.
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;