import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaUserCheck,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaLightbulb,
  FaArrowRight,
  FaRobot,
} from "react-icons/fa";

function About() {
  const infoCards = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bacoor City, Cavite, PH",
      desc: "Open to hybrid & remote roles",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "danilobuban09@gmail.com",
      desc: "Direct inbox for inquiries",
      isLink: true,
      href: "mailto:danilobuban09@gmail.com",
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: "BS Computer Science",
      desc: "Cavite State University – Bacoor",
    },
    {
      icon: <FaLaptopCode />,
      label: "Developer",
      value: "Full-Stack & Mobile",
      desc: "Modern React, Node & Flutter",
    },
    {
      icon: <FaUserCheck />,
      label: "Status",
      value: "Fresh Graduate",
      desc: "Class of 2026 • Ready to contribute",
    },
  ];

  const whatIDo = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Building responsive, high-performance, and modern websites and web applications with React, JavaScript, and Node.js.",
      skills: ["React", "JavaScript", "HTML/CSS", "Vite", "Node.js"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications and user-friendly interfaces using Flutter, React Native, and Android tools.",
      skills: ["Flutter", "React Native", "Android SDK", "Expo"],
    },
    {
      icon: <FaRobot />,
      title: "AI Prompting & Vibe Coding",
      description:
        "Leveraging advanced prompt engineering and modern AI developer tools to rapidly prototype, write resilient code, and build full-stack solutions.",
      skills: ["Prompt Engineering", "Vibe Coding", "LLM Context", "Rapid Prototyping"],
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive, and user-centered digital experiences with soft neumorphic aesthetics, hierarchy, and micro-interactions.",
      skills: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "Turning complex technical challenges into practical, efficient, and scalable software solutions with clean architecture.",
      skills: ["Data Structures", "API Integration", "Database Design", "Debugging"],
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Section Header */}
      <section className="neu-section-header">
        <span className="neu-eyebrow-pill">01 — ABOUT ME</span>
        <h1 className="section-main-title">
          Get To Know <span className="text-gradient">Danilo.</span>
        </h1>
        <p className="section-description">
          A fresh Computer Science graduate with a genuine passion for building
          thoughtful, resilient, and human-centered software.
        </p>
      </section>

      {/* Main Bio & Profile Hero Card */}
      <section className="neu-about-hero-section">
        <div className="about-hero-grid">
          {/* Profile Card */}
          <div className="about-profile-card">
            <div className="about-img-frame">
              <img
                src="/graduate-photo.jpg"
                alt="Danilo De Jesus"
                className="about-profile-img"
              />
              <div className="graduate-badge">
                <FaGraduationCap className="badge-cap" /> Fresh Graduate
              </div>
            </div>

            <div className="about-card-meta">
              <h2 className="meta-name">Danilo De Jesus</h2>
              <p className="meta-title">BS Computer Science Graduate</p>
              <p className="meta-uni">Cavite State University – Bacoor</p>

              <div className="about-card-actions">
                <Link to="/contact" className="neu-btn neu-btn-primary sm full-width">
                  <span>Contact Me</span>
                  <FaArrowRight className="btn-icon" />
                </Link>
              </div>
            </div>
          </div>

          {/* Biography & Story Card */}
          <div className="about-bio-card">
            <h2 className="bio-heading">
              Passionate about turning ideas into <span className="text-gradient">real-world impact</span> through code.
            </h2>

            <div className="bio-text-paragraphs">
              <p>
                I'm a fresh Computer Science graduate with a strong interest in
                web and mobile development, UI/UX design, and emerging
                technologies. I enjoy learning new tools, solving problems, and
                creating projects that turn ideas into useful digital
                experiences.
              </p>

              <p>
                Throughout my academic journey at Cavite State University –
                Bacoor, I immersed myself in both front-end aesthetics and
                back-end logic. From architecting augmented reality apps like
                <strong> SmartSpace AR</strong> to developing responsive
                full-stack web portals, I strive to write code that is clean,
                readable, and impactful.
              </p>

              <p>
                I am actively seeking an entry-level software engineering or web
                development opportunity where I can collaborate with seasoned
                engineers, contribute to production codebases, and continuously
                grow as a developer.
              </p>
            </div>

            {/* Quick Metrics in Bio */}
            <div className="bio-metrics-row">
              <div className="bio-metric-item">
                <span className="metric-num">BSCS</span>
                <span className="metric-label">Degree Earned</span>
              </div>
              <div className="bio-metric-item">
                <span className="metric-num">10+</span>
                <span className="metric-label">Tech Tools</span>
              </div>
              <div className="bio-metric-item">
                <span className="metric-num">100%</span>
                <span className="metric-label">Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Information Cards */}
      <section className="neu-info-cards-section">
        <h2 className="sub-section-title">Quick Information</h2>
        <div className="info-cards-grid">
          {infoCards.map((card, idx) => (
            <div className="neu-info-card" key={idx}>
              <div className="info-card-icon">{card.icon}</div>
              <div className="info-card-content">
                <small className="info-label">{card.label}</small>
                {card.isLink ? (
                  <a href={card.href} className="info-value link">
                    {card.value}
                  </a>
                ) : (
                  <span className="info-value">{card.value}</span>
                )}
                <span className="info-desc">{card.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do Section */}
      <section className="neu-services-section">
        <div className="section-title-centered">
          <span className="neu-eyebrow-pill">EXPERTISE</span>
          <h2 className="sub-section-title">What I Do</h2>
          <p className="sub-section-desc">
            Combining engineering rigor with user-centered design to craft
            meaningful software solutions.
          </p>
        </div>

        <div className="services-grid">
          {whatIDo.map((service, index) => (
            <div className="neu-service-card" key={index}>
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-skills-row">
                {service.skills.map((skill, sIdx) => (
                  <span className="service-skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation CTA */}
      <section className="neu-bottom-cta">
        <div className="bottom-cta-card">
          <div className="cta-left">
            <h3>Interested in reviewing my project portfolio?</h3>
            <p>Check out the interactive web and mobile systems I've developed.</p>
          </div>
          <div className="cta-right">
            <Link to="/projects" className="neu-btn neu-btn-primary">
              <span>View Projects</span>
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;