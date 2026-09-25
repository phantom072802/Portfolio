import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAndroid,
  FaDatabase,
  FaLayerGroup,
  FaMobileAlt,
  FaTools,
  FaServer,
  FaCode,
  FaArrowRight,
  FaRobot,
  FaMagic,
} from "react-icons/fa";
import {
  SiVite,
  SiExpress,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiExpo,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";

const skillCategories = [
  {
    id: "ai-vibe",
    title: "AI & Vibe Coding",
    subtitle: "AI-assisted development, prompt engineering & fast prototyping",
    icon: <FaRobot />,
    skills: [
      { name: "AI Prompting", icon: <FaRobot />, color: "#8A2BE2", level: "Prompt Engineering, LLM Context Framing, Structured Output" },
      { name: "Vibe Coding", icon: <FaMagic />, color: "#6C63FF", level: "AI-Assisted Fast Prototyping, Flow-State Development" },
    ],
  },
  {
    id: "frontend",
    title: "Front-End",
    subtitle: "Modern, dynamic & responsive user interfaces",
    icon: <FaCode />,
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", level: "Semantic HTML5, Accessibility" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: "Flexbox, Grid, Neumorphism, Animations" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: "ES6+, Async/Await, DOM APIs" },
      { name: "React", icon: <FaReact />, color: "#61DAFB", level: "Hooks, Components, Router, State" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF", level: "Fast Bundling, HMR, Build Config" },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    subtitle: "Robust server logic, APIs & microservices",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: "Runtime, Event Loop, File I/O" },
      { name: "Express.js", icon: <SiExpress />, color: "#6C63FF", level: "REST APIs, Middleware, Routing" },
      { name: "Python", icon: <FaPython />, color: "#3776AB", level: "Scripting, OOP, Automation" },
      { name: "Django", icon: <SiDjango />, color: "#092E20", level: "ORM, Django REST Framework, Auth" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4", level: "Server-side Scripting, MVC" },
    ],
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Data modeling, schema optimization & queries",
    icon: <FaDatabase />,
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: "Relational Schema, Joins, Triggers" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", level: "Advanced SQL, Indexing, JSONB" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Cross-platform mobile apps for iOS & Android",
    icon: <FaMobileAlt />,
    skills: [
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B", level: "Dart, Widget Trees, State, ARCore" },
      { name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB", level: "Native Components, Navigation" },
      { name: "Expo", icon: <SiExpo />, color: "#5046e5", level: "Cross-platform Workflow, CLI" },
      { name: "Android SDK", icon: <FaAndroid />, color: "#3DDC84", level: "Native Android APIs, Emulators" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    subtitle: "Version control, IDEs & UI prototyping tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: "Branching, Merging, Git Flow" },
      { name: "GitHub", icon: <FaGithub />, color: "#2D3142", level: "Repositories, CI/CD, PRs" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC", level: "Debugging, Extensions, Linting" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E", level: "Wireframing, UI/UX, Neumorphism" },
    ],
  },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <div className="skills-page-wrapper">
      {/* Section Header */}
      <section className="neu-section-header">
        <span className="neu-eyebrow-pill">02 — SKILLS & TECHNOLOGIES</span>
        <h1 className="section-main-title">
          Tech <span className="text-gradient">Stack.</span>
        </h1>
        <p className="section-description">
          A comprehensive breakdown of the frameworks, languages, databases,
          and developer tools I leverage to build production-grade software.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <section className="skills-filter-section">
        <div className="neu-filter-tabs">
          <button
            className={`filter-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <FaLayerGroup className="tab-icon" /> All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span> {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Skill Categories Grid */}
      <section className="neu-skills-grid-section">
        <div className="categories-stack">
          {filteredCategories.map((category) => (
            <div className="neu-category-block" key={category.id}>
              <div className="category-header-row">
                <div className="category-title-group">
                  <div className="category-icon-bubble">{category.icon}</div>
                  <div>
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-subtitle">{category.subtitle}</p>
                  </div>
                </div>
                <span className="skills-count-pill">
                  {category.skills.length} Technologies
                </span>
              </div>

              <div className="skills-cards-grid">
                {category.skills.map((skill) => (
                  <div className="neu-skill-card" key={skill.name}>
                    <div
                      className="skill-icon-container"
                      style={{ "--skill-color": skill.color }}
                    >
                      {skill.icon}
                    </div>

                    <div className="skill-text-details">
                      <h3 className="skill-name">{skill.name}</h3>
                      <p className="skill-level">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Bottom CTA */}
      <section className="neu-skills-cta">
        <div className="skills-cta-card">
          <div className="cta-copy">
            <h3>Want to see these technologies in action?</h3>
            <p>Explore my featured projects developed with React, Flutter, Python, and SQL.</p>
          </div>
          <div className="cta-actions">
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

export default Skills;