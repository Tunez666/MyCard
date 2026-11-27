import React, { useEffect, useState } from 'react';
import {
  Github,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  ArrowDown,
} from 'lucide-react';


const projects = [
  {
    number: "01",
    name: "LifeTree",
    type: "BACKEND · WORKSPACE",
    description:
      "A workspace management project built while exploring backend architecture, authentication, and data management.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://github.com/Tunez666/LifeTreeTs",
    status: "In Development",
    statusType: "development",
  },
  {
    number: "02",
    name: "WMS",
    type: "FULLSTACK · WAREHOUSE",
    description:
      "A warehouse management system for handling inventory, storage locations, receiving workflows, and operational requests.",
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    href: "https://github.com/Tunez666/wms_ts_first",
    status: "In Progress",
    statusType: "progress",
  },
  {
    number: "03",
    name: "Community Forum",
    type: "FULLSTACK · COMMUNITY",
    description:
      "A community forum with user accounts, role-based access, discussions, moderation tools, and notifications.",
    stack: ["Node.js", "Express", "MySQL", "EJS"],
    href: "https://github.com/Tunez666/diplome",
    status: "Completed",
    statusType: "completed",
  },
];


const skills = [
  { name: "TypeScript", group: "LANGUAGE" },
  { name: "JavaScript", group: "LANGUAGE" },
  { name: "Node.js", group: "RUNTIME" },
  { name: "NestJS", group: "FRAMEWORK" },
  { name: "Express", group: "FRAMEWORK" },
  { name: "PostgreSQL", group: "DATABASE" },
  { name: "Prisma", group: "ORM" },
  { name: "Redis", group: "DATABASE" },
  { name: "Docker", group: "TOOLS" },
  { name: "REST API", group: "PRACTICE" },
  { name: "JWT", group: "AUTH" },
  { name: "Git", group: "TOOLS" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>T<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "navigation open" : "navigation"}>
          {[
            ["home", "Home"],
            ["about", "About"],
            ["arsenal", "Arsenal"],
            ["projects", "Projects"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <a className="top-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="moon" />
          <div className="ruin ruin-left"><i /><i /><i /><i /><i /></div>
          <div className="ruin ruin-right"><i /><i /><i /><i /><i /></div>
          <div className="horizon" />
          <div className="embers"><b /><b /><b /><b /><b /><b /><b /><b /></div>
        </div>
        <div className="hero-content">
          <p className="eyebrow"><span /> A DEVELOPER IN THE MAKING <span /></p>
          <h1>The path<br /><em>continues.</em></h1>
          <p className="hero-copy">
            I&apos;m <strong>Tunez</strong> — an aspiring backend developer, learning to build
            reliable systems and turning ideas into something real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">Discover my story <ArrowDown size={16} /></a>
            <a className="text-link" href="https://github.com/Tunez666" target="_blank" rel="noreferrer">
              Explore GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="hero-side-note">BUILT WITH CURIOSITY · REFINED WITH TIME</div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-marker"><span>01</span><i /></div>
        <div className="section-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
            <h2>Every journey<br />has a <em>beginning.</em></h2>
          </div>
          <div className="about-copy reveal">
            <p className="lead">
              My journey into development started with curiosity — and grew into a desire
              to understand how things work behind the screen.
            </p>
            <p>
              I currently work in payment system monitoring. It taught me to stay attentive,
              investigate issues, and understand how important reliable services are.
              Now I&apos;m bringing that experience into backend development.
            </p>
            <p>
              I enjoy learning by building: exploring APIs, working with databases, solving
              problems, and improving my projects one step at a time.
            </p>
            <div className="about-signature">— Tunez</div>
          </div>
        </div>
      </section>

      <section className="section arsenal-section" id="arsenal">
        <div className="section-marker"><span>02</span><i /></div>
        <div className="section-heading reveal">
          <p className="eyebrow">TOOLS OF THE TRADE</p>
          <h2>My <em>arsenal.</em></h2>
          <p className="section-intro">Technologies I use, explore, and keep improving with.</p>
        </div>
        <div className="skill-grid reveal">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name} style={{ animationDelay: `${index * 45}ms` }}>
              <span className="skill-group">{skill.group}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-rune">✦</span>
            </div>
          ))}
        </div>
        <p className="skill-footnote">A living list. The learning never really ends.</p>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-marker"><span>03</span><i /></div>
        <div className="section-heading reveal">
          <p className="eyebrow">WORKS & EXPERIMENTS</p>
          <h2>Things I&apos;ve <em>built.</em></h2>
          <p className="section-intro">Each project is another step forward — a place to learn, test, and create.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>

              <div className="project-actions">
                <span
                  className={`project-status status-${project.statusType}`}
                  aria-label={`Project status: ${project.status}`}
                >
                  {project.status}
                </span>

                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ArrowUpRight size={21} />
                </a>
              </div>

            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="section-marker"><span>04</span><i /></div>
        <div className="contact-content reveal">
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2>Have a story<br />to <em>build?</em></h2>
          <p className="contact-copy">
            I&apos;m open to learning opportunities, junior backend roles, and meaningful collaborations.
            If you&apos;d like to connect, I&apos;d be glad to hear from you.
          </p>
          <div className="contact-links">
            <a href="https://github.com/Tunez666" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={14} /></a>
            <a href="mailto:redinov14@gmail.com"><Mail size={18} /> Email <ArrowUpRight size={14} /></a>
            <a href="https://t.me/Tunez666" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <footer>
          <a className="wordmark" href="#home">T<span>.</span></a>
          <span>© {new Date().getFullYear()} TUNEZ · THE PATH CONTINUES</span>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </footer>
        <p className="icon-credit">
          Icon designed by{' '}
          <a
            href="https://www.flaticon.com/ru/authors/vectorsmarket15"
            target="_blank"
            rel="noreferrer"
          >
            vectorsmarket15
          </a>
          {' '}from Flaticon
        </p>
      </section>
    </main>
  );
}

export default App;