import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaHeart,
  FaTerminal,
  FaCheckCircle,
  FaTimes,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";

const titles = [
  "Aspiring Software Developer",
  "AI-Assisted Vibe Coder",
  "BS Computer Science Graduate",
  "Full-Stack Web Enthusiast",
  "AI Prompting & UI/UX Specialist",
];

function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("danilobuban09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, titleIndex, isDeleting]);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="neu-hero-section">
        <div className="hero-grid">
          {/* Left Column: Hero Content & Profile Card */}
          <div className="hero-intro-column">
            <div className="hero-badge-row">
              <span className="neu-pill-badge">
                <span className="live-status-dot"></span>
                Available for Roles
              </span>
              <span className="neu-pill-tag">
                <FaGraduationCap className="tag-icon" /> Fresh Graduate
              </span>
            </div>

            <p className="hero-eyebrow">HELLO, I'M</p>

            <h1 className="hero-name">
              Danilo <span className="text-gradient">De Jesus</span>
            </h1>

            <div className="hero-subtitle-box">
              <span className="subtitle-prefix">A passionate</span>
              <span className="animated-subtitle">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </div>

            <p className="hero-description">
              A Computer Science graduate passionate about building meaningful
              digital experiences. I love turning ideas into real-world
              solutions through clean, elegant, and efficient code.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-buttons">
              <Link to="/projects" className="neu-btn neu-btn-primary">
                <span>View My Work</span>
                <FaArrowRight className="btn-icon" />
              </Link>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="neu-btn neu-btn-secondary"
              >
                <span>Download Resume</span>
                <FaDownload className="btn-icon" />
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social-row">
              <span className="social-label">Follow Me:</span>
              <div className="social-pills">
                <a
                  href="https://github.com/phantom072802"
                  target="_blank"
                  rel="noreferrer"
                  className="neu-circle-btn sm"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/danilo-de-jesus-5b224618b/"
                  target="_blank"
                  rel="noreferrer"
                  className="neu-circle-btn sm"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.facebook.com/danilo.de.jesus.193543"
                  target="_blank"
                  rel="noreferrer"
                  className="neu-circle-btn sm"
                  aria-label="Facebook Profile"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/__unvanquished/"
                  target="_blank"
                  rel="noreferrer"
                  className="neu-circle-btn sm"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card & Interactive Code Card */}
          <div className="hero-visual-column">
            {/* Neumorphic Profile Card */}
            <div className="neu-profile-card">
              <div className="profile-img-container">
                <img
                  src="/graduate-photo.jpg"
                  alt="Danilo De Jesus"
                  className="profile-img"
                />
                <div className="status-indicator-badge">
                  <span className="pulse-circle"></span>
                  <span className="status-text">Available</span>
                </div>
              </div>

              <div className="profile-details">
                <h3 className="profile-name">Danilo De Jesus</h3>
                <p className="profile-degree">
                  <FaGraduationCap className="icon-gold" /> BS Computer Science
                </p>
                <p className="profile-school">
                  Cavite State University – Bacoor
                </p>
                <div className="profile-tags">
                  <span className="neu-micro-tag">Software Dev</span>
                  <span className="neu-micro-tag">Vibe Coder</span>
                  <span className="neu-micro-tag">AI Prompting</span>
                  <span className="neu-micro-tag">Web & Mobile</span>
                </div>
              </div>
            </div>

            {/* Developer Interface / Code Card */}
            <div className="neu-dev-terminal-card">
              <div className="terminal-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">
                  <FaTerminal className="term-icon" /> developer.ts
                </div>
                <span className="terminal-lang">TypeScript</span>
              </div>

              <div className="terminal-body">
                <pre className="code-block">
                  <code>
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-var">developer</span> = &#123;
                    {"\n"}  <span className="c-prop">name</span>:{" "}
                    <span className="c-string">"Danilo De Jesus"</span>,
                    {"\n"}  <span className="c-prop">role</span>:{" "}
                    <span className="c-string">"Software Dev & Vibe Coder"</span>,
                    {"\n"}  <span className="c-prop">status</span>:{" "}
                    <span className="c-string">"Fresh Graduate"</span>,
                    {"\n"}  <span className="c-prop">education</span>:{" "}
                    <span className="c-string">"BSCS @ CvSU Bacoor"</span>,
                    {"\n"}  <span className="c-prop">skills</span>: [
                    <span className="c-string">"Full-Stack"</span>,{" "}
                    <span className="c-string">"Mobile"</span>,{" "}
                    <span className="c-string">"AI Prompting"</span>],
                    {"\n"}  <span className="c-prop">vibeCoding</span>:{" "}
                    <span className="c-bool">true</span>
                    {"\n"}&#125;;
                    {"\n\n"}
                    <span className="c-keyword">function</span>{" "}
                    <span className="c-func">solveProblem</span>():{" "}
                    <span className="c-type">Solution</span> &#123;
                    {"\n"}  <span className="c-keyword">return</span> &#123;
                    {"\n"}    <span className="c-prop">impact</span>:{" "}
                    <span className="c-string">"Real-world value"</span>,
                    {"\n"}    <span className="c-prop">craftedWith</span>:{" "}
                    <span className="c-string">"Passion & Code"</span>
                    {"\n"}  &#125;;
                    {"\n"}&#125;
                  </code>
                </pre>
              </div>

              {/* Motivational Loop Badges */}
              <div className="terminal-motivation-footer">
                <span className="motto-label">Workflow:</span>
                <div className="motto-badges">
                  <span className="motto-badge">
                    <FaCheckCircle className="badge-icon" /> Build
                  </span>
                  <span className="motto-arrow">→</span>
                  <span className="motto-badge">
                    <FaCheckCircle className="badge-icon" /> Learn
                  </span>
                  <span className="motto-arrow">→</span>
                  <span className="motto-badge">
                    <FaCheckCircle className="badge-icon" /> Improve
                  </span>
                  <span className="motto-arrow">→</span>
                  <span className="motto-badge highlight">
                    <FaCheckCircle className="badge-icon" /> Repeat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Statistics Section (4 Neumorphic Cards) */}
      <section className="neu-highlights-section">
        <div className="highlights-grid">
          {/* Card 1: 10+ Projects */}
          <div className="neu-stat-card">
            <div className="stat-icon-wrapper">
              <FaLaptopCode />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">3</h3>
              <p className="stat-title">Projects</p>
              <span className="stat-desc">Web, mobile & systems built</span>
            </div>
          </div>

          {/* Card 2: Fresh Graduate */}
          <div className="neu-stat-card">
            <div className="stat-icon-wrapper">
              <FaGraduationCap />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">Fresh Graduate</h3>
              <p className="stat-title">BSCS Graduate</p>
              <span className="stat-desc">Cavite State University – Bacoor</span>
            </div>
          </div>

          {/* Card 3: Passionate About Tech */}
          <div className="neu-stat-card">
            <div className="stat-icon-wrapper">
              <FaHeart />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">Passionate</h3>
              <p className="stat-title">About Technology</p>
              <span className="stat-desc">Continuous learner & builder</span>
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="neu-stat-card">
            <div className="stat-icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">Bacoor City</h3>
              <p className="stat-title">Philippines</p>
              <span className="stat-desc">Available remote & on-site</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation CTA to Explore More */}
      <section className="neu-home-cta-section">
        <div className="home-cta-card">
          <div className="cta-text">
            <h2>Ready to see what I can build for you?</h2>
            <p>Explore my featured projects, technical skillset, or get in touch directly.</p>
          </div>
          <div className="cta-actions">
            <Link to="/about" className="neu-btn neu-btn-secondary">
              <span>About Me</span>
            </Link>
            <Link to="/projects" className="neu-btn neu-btn-primary">
              <span>Explore Projects</span>
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
      {/* Resume Request Modal */}
      {isResumeModalOpen && (
        <div
          className="neu-modal-overlay"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="neu-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="neu-modal-close-btn"
              onClick={() => setIsResumeModalOpen(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="modal-icon-bubble">
              <FaEnvelope />
            </div>

            <h2 className="modal-title">Request Resume</h2>

            <p className="modal-description">
              To request a direct copy of my official CV / Resume, please contact me directly at:
            </p>

            <div className="modal-email-box">
              <span className="modal-email-text">danilobuban09@gmail.com</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="neu-copy-btn"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="copy-icon green" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="copy-icon" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="modal-actions-row">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=danilobuban09@gmail.com&su=Resume Request - Danilo De Jesus"
                target="_blank"
                rel="noreferrer"
                className="neu-btn neu-btn-primary full-width"
              >
                <FaPaperPlane className="btn-icon" />
                <span>Open in Gmail</span>
              </a>

              <Link
                to="/contact"
                className="neu-btn neu-btn-secondary full-width"
                onClick={() => setIsResumeModalOpen(false)}
              >
                <span>Go to Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;