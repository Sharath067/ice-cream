import "./Header.css";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        Ice<span>Cream</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </NavLink>
      </nav>

      <div className="header-icons">
        <div className="login">
          Login <FaUser />
        </div>

        <FaSearch className="search" />

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}
