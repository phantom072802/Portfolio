import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = 2026;

  return (
    <footer className="neu-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Danilo<span className="dot">.</span>
            </Link>
            <p className="footer-tagline">
              Fresh Computer Science Graduate & Aspiring Software Developer dedicated to building clean, accessible, and scalable digital solutions.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <div className="footer-links-grid">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-social-section">
            <h4>Connect</h4>
            <div className="social-icons-group">
              <a
                href="https://github.com/phantom072802"
                target="_blank"
                rel="noreferrer"
                className="neu-circle-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="neu-circle-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/danilo.de.jesus.193543"
                target="_blank"
                rel="noreferrer"
                className="neu-circle-btn"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/__unvanquished/"
                target="_blank"
                rel="noreferrer"
                className="neu-circle-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:danilobuban09@gmail.com"
                className="neu-circle-btn"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Danilo De Jesus. All rights reserved.</p>
          <p className="footer-status-pill">
            <span className="pulse-dot"></span> Fresh Graduate • Open for Opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

