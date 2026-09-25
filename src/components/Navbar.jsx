import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`neu-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="neu-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-text">Danilo</span>
          <span className="logo-dot">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="neu-nav-pill">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `neu-nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `neu-nav-link ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `neu-nav-link ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `neu-nav-link ${isActive ? "active" : ""}`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `neu-nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Actions: Theme Toggle + Let's Connect */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="neu-icon-btn theme-toggle-btn"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
          </button>

          <Link to="/contact" className="neu-btn neu-btn-primary nav-cta-btn">
            <span>Let's Connect</span>
            <FaPaperPlane className="btn-icon" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="neu-icon-btn mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="neu-btn neu-btn-primary full-width"
            >
              <span>Let's Connect</span>
              <FaPaperPlane className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;