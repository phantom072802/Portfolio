import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCube,
  FaShoppingBag,
  FaUmbrellaBeach,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaPlay,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

const projects = [
  {
    id: "smartspace-ar",
    number: "01",
    badge: "Featured • AR & Mobile",
    icon: <FaCube />,
    title: "SmartSpace AR",
    subtitle: "Augmented Reality Interior Design Platform",
    description:
      "A personalized augmented reality platform for interior design and space optimization. Enables users to virtually place, scale, and test 3D furniture models inside real rooms with real-time lighting estimation and spatial collision detection.",
    technologies: [
      "Flutter",
      "ARCore",
      "Node.js",
      "MySQL",
      "Android SDK",
    ],
    highlights: [
      "Real-time plane detection & surface tracking via Google ARCore",
      "Custom RESTful backend built with Node.js & MySQL",
      "3D model placement with interactive gesture manipulation (pinch, rotate)",
      "Cross-platform responsive client built on Flutter",
    ],
    github: "https://github.com/phantom072802/smart-space-AR",
    videoUrl: "/smartspaceAR-project.mp4",
    liveDemo: "#",
    colorAccent: "#6C63FF",
  },
  {
    id: "sole-shoes",
    number: "02",
    badge: "Full-Stack • E-Commerce",
    icon: <FaShoppingBag />,
    title: "Sole Shoes",
    subtitle: "Modern Footwear E-Commerce & Admin Platform",
    description:
      "An e-commerce website focused on footwear with complete shopping cart functionality, responsive checkout workflow, product filtering, and an administrative dashboard for inventory and orders management.",
    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Nodejs",
      "PostgreSQL",
    ],
    highlights: [
      "Complete shopping cart system with session management & quantity updates",
      "Admin dashboard with CRUD operations for shoes, categories, and stock",
      "Order status tracking, receipt generation, and customer management",
      "Custom responsive neumorphic-inspired front-end layout",
    ],
    github: "https://github.com/phantom072802/sole-shoes",
    videoUrl: "/Sole-Shoes-Project.mp4",
    liveDemo: "#",
    colorAccent: "#3B82F6",
  },
  {
    id: "cocavalley-resort",
    number: "03",
    badge: "Full-Stack • Resort & Booking",
    icon: <FaUmbrellaBeach />,
    title: "Cocavalley Resort",
    subtitle: "Resort Booking & Reservation Management System",
    description:
      "A comprehensive web-based resort reservation and management system for Cocavalley Resort. Features online booking for rooms, cottages, and amenities, date availability calendar, reservation tracking, and an administrative dashboard.",
    technologies: [
      "Nextjs",
      "CSS",
      "TypeScript",
      "Nodejs",
      "PosgreSQL",
    ],
    highlights: [
      "Online booking & reservation portal for cottages, rooms, and resort amenities",
      "Interactive date availability calendar and automated schedule validation",
      "Admin dashboard for managing guest check-ins, reservations, and billing",
      "Responsive, clean UI designed for seamless mobile and desktop experience",
    ],
    github: "https://github.com/phantom072802/cocovalley-resort",
    videoUrl: "/Cocovalley-Project.mp4",
    liveDemo: "#",
    colorAccent: "#10B981",
  },
];

function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="projects-page-wrapper">
      {/* Page Header */}
      <section className="neu-section-header">
        <span className="neu-eyebrow-pill">03 — PROJECTS</span>
        <h1 className="section-main-title">
          Featured <span className="text-gradient">Projects.</span>
        </h1>
        <p className="section-description">
          A showcase of real-world mobile applications, e-commerce systems, and
          resort booking platforms I've designed and engineered.
        </p>
      </section>

      {/* Projects Showcase Grid */}
      <section className="neu-projects-showcase">
        <div className="projects-cards-list">
          {projects.map((project) => (
            <article className="neu-project-card" key={project.id}>
              {/* Left/Top: Project Visual Preview Container */}
              <div className="project-visual-container">
                <div
                  className="project-visual-backdrop"
                  style={{ "--accent": project.colorAccent }}
                >
                  <div className="visual-icon-glow">{project.icon}</div>
                  
                  {project.videoUrl ? (
                    <div 
                      className="project-video-preview-trigger"
                      onClick={() => setActiveModalProject(project)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveModalProject(project);
                        }
                      }}
                      title="Click to play demo video"
                    >
                      <div className="mockup-screen-preview video-mockup-screen">
                        <div className="mockup-header-bar">
                          <span className="mockup-dot"></span>
                          <span className="mockup-dot"></span>
                          <span className="mockup-dot"></span>
                          <span className="mockup-address-bar">
                            {project.title.toLowerCase().replace(/\s+/g, "")}.demo.mp4
                          </span>
                        </div>
                        <div className="video-thumbnail-placeholder">
                          <div className="neu-play-badge">
                            <FaPlay className="play-icon" />
                          </div>
                          <span className="video-play-label">Watch Demo Video</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mockup-screen-preview">
                      <div className="mockup-header-bar">
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-address-bar">{project.title.toLowerCase()}.app</span>
                      </div>
                      <div className="mockup-inner-content">
                        <div className="mockup-banner">
                          <span className="mockup-brand-text">{project.title}</span>
                          <span className="mockup-tag-pill">{project.subtitle}</span>
                        </div>
                        <div className="mockup-blocks-row">
                          <div className="mockup-block"></div>
                          <div className="mockup-block"></div>
                          <div className="mockup-block"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-number-badge">{project.number}</div>
              </div>

              {/* Right/Bottom: Project Details */}
              <div className="project-details-container">
                <div className="project-meta-row">
                  <span className="project-category-badge">
                    <FaStar className="star-icon" /> {project.badge}
                  </span>
                </div>

                <h2 className="project-title">{project.title}</h2>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-description">{project.description}</p>

                {/* Highlights List */}
                <div className="project-highlights-box">
                  <span className="highlights-label">Key Features:</span>
                  <ul className="highlights-list">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <FaCheck className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span className="neu-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="neu-btn neu-btn-primary"
                  >
                    <FaGithub className="btn-icon" />
                    <span>View GitHub</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="neu-btn neu-btn-secondary"
                  >
                    <span>{project.videoUrl ? "Watch Demo Video" : "View Project"}</span>
                    {project.videoUrl ? (
                      <FaPlay className="btn-icon" />
                    ) : (
                      <FaExternalLinkAlt className="btn-icon" />
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video & Project Details Neumorphic Modal */}
      {activeModalProject && (
        <div
          className="neu-modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`neu-modal-card ${
              activeModalProject.videoUrl ? "neu-video-modal-card" : "neu-project-modal-card"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="neu-modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>

            <div className="modal-header-block">
              <div className="modal-icon-bubble">
                {activeModalProject.videoUrl ? <FaVideo /> : activeModalProject.icon}
              </div>
              <div>
                <h3 className="modal-title">{activeModalProject.title}</h3>
                <p className="modal-subtitle-tag">{activeModalProject.subtitle}</p>
              </div>
            </div>

            {activeModalProject.videoUrl ? (
              <div className="neu-video-wrapper">
                <video
                  className="neu-project-video-player"
                  src={activeModalProject.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}

            <p className="modal-description">{activeModalProject.description}</p>

            <div className="modal-project-tech-pills">
              {activeModalProject.technologies.map((tech) => (
                <span className="neu-tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-actions-row horizontal">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="neu-btn neu-btn-primary"
              >
                <FaGithub className="btn-icon" />
                <span>View on GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="neu-btn neu-btn-secondary"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All Projects CTA Banner */}
      <section className="neu-view-all-section">
        <div className="view-all-card">
          <div className="view-all-content">
            <span className="neu-eyebrow-pill">CONTINUOUS DEVELOPMENT</span>
            <h2>Interested in exploring more code & repositories?</h2>
            <p>
              I actively build utilities, experiment with modern web APIs, and
              contribute open-source snippets on my GitHub.
            </p>
          </div>

          <div className="view-all-buttons">
            <a
              href="https://github.com/phantom072802"
              target="_blank"
              rel="noreferrer"
              className="neu-btn neu-btn-primary"
            >
              <span>View All Projects on GitHub</span>
              <FaArrowRight className="btn-icon" />
            </a>

            <Link to="/contact" className="neu-btn neu-btn-secondary">
              <span>Discuss a Project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;