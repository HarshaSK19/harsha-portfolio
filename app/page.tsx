"use client";

import { useEffect, useState } from "react";
import BrainIcon from "@/components/BrainIcon";
import HandTrackingVisual from "@/components/HandTrackingVisual";

const roles = [
  "AI / ML Enthusiast",
  "Data Science Enthusiast",
  "RAG Developer",
  "Computer Vision Enthusiast",
  "Python Developer",
];

const interfaceSkills = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git & GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];

const logicSkills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    name: "Data Science",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "RAG",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Generative AI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Computer Vision",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  {
    name: "MediaPipe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(current.slice(0, index + 1));
      index++;

      if (index === current.length) {
        clearInterval(typing);

        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1800);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [roleIndex]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".education-item, .experience-card, .project-card, .skill-icon-item, .contact-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">
      {/* BACKGROUND */}
      <div className="background">
        <div className="purple-glow glow-one" />
        <div className="purple-glow glow-two" />
        <div className="blue-glow glow-three" />

        <div className="grid-background" />

        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
        <span className="particle p6" />
        <span className="particle p7" />
        <span className="particle p8" />
        <span className="particle p9" />
        <span className="particle p10" />
      </div>

      {/* NAVBAR */}
      <header className="navbar-wrap">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
            <img
              src="/logos/profile.png"
              alt="Harsha SK"
              className="navbar-profile"
            />
            <span className="logo-name">HARSHA <span>SK</span></span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://github.com/HarshaSK19"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="availability">
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <div className="hero-content">
          {/* LEFT */}
          <div className="hero-left">
            <p className="hello">Hello, I'm</p>

            <h1>
              HARSHA <span>SK</span>
            </h1>

            <div className="role">
              <span className="role-line" />
              {displayText}
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
  I build practical AI solutions focused on
  <strong>Artificial Intelligence</strong>,
  <strong>Machine Learning</strong>,
  <strong>Data Science</strong>,
  <strong>Computer Vision</strong> and
   <strong> Retrieval-Augmented Generation</strong>.
</p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                Explore my work
                <span>↗</span>
              </a>

              <a href="/resume.pdf" className="secondary-button">
                View Resume
                <span>↓</span>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/HarshaSK19"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <span>•</span>

              <a
                href="https://www.linkedin.com/in/harsha-sk-305b5238b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <span>•</span>

              <a href="mailto:mail2harshask@gmail.com">
                Email
              </a>
            </div>
          </div>

          {/* RIGHT MIND MAP */}
          <div className="mindmap">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />

            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
            <div className="orbit-dot dot-three" />
            <div className="orbit-dot dot-four" />

            <div className="brain-core">
              <div className="brain-glow" />

              <div className="brain">
                <BrainIcon
                  idPrefix="hero-brain"
                  className="brain-svg"
                />
              </div>

              <div className="brain-title">
                AI <span>•</span> ML <span>•</span> RAG
              </div>

              {/* FIXED: subtitle stays INSIDE the brain circle */}
              <div
                className="brain-subtitle"
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "max-content",
                  zIndex: 10,
                   fontSize: "7px",
    letterSpacing: "3px",
    whiteSpace: "nowrap",
                }}
              >
                THINK • BUILD • CREATE
              </div>
            </div>

            <SkillNode
              className="node-python"
              title="Python"
              subtitle="Core Language"
            />

            <SkillNode
              className="node-vision"
              title="Computer Vision"
              subtitle="OpenCV • MediaPipe"
            />

            <SkillNode
              className="node-ml"
              title="Machine Learning"
              subtitle="Train • Predict • Optimize"
            />

            <SkillNode
              className="node-rag"
              title="RAG"
              subtitle="Intelligent Retrieval"
            />

            <SkillNode
              className="node-data"
              title="Data Science"
              subtitle="Analyze • Model • Discover"
            />
          </div>
        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE
          <span />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-number">
          01 / ABOUT
        </div>

        <div className="section-divider" />

        <div className="about-grid">
          <div>
            <p className="eyebrow">WHO I AM</p>

            <h2>
              Building with
              <br />
              <span>intelligent systems.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
  I build practical intelligent systems that turn ideas into
  useful, real-world applications.
</p>

<p>
  My work focuses on Artificial Intelligence, Machine Learning,
  Data Science, Computer Vision and Retrieval-Augmented
  Generation.
</p>

<p>
  I learn by building — experimenting with ideas, solving
  problems and continuously improving through hands-on projects.
</p>
          </div>
        </div>
      </section>
      {/* =========================================
          EDUCATION
      ========================================= */}

      <section id="education" className="education-section">

        <div className="section-number">
          02 / EDUCATION
        </div>

        <div className="education-heading">

          <h2>
            My <span>education.</span>
          </h2>

        </div>


        <div className="education-timeline">

          {/* DEGREE */}

          <div className="education-item education-left">

           <div className="education-logo education-logo-right">
  <img
    src="/logos/cbit.png"
    alt="CBIT logo"
  />
</div>

            <div className="education-card">

              <div className="education-badge">
                DEGREE
              </div>

              <h3>
                Bachelor of Engineering in
                <br />
                Computer Science & Engineering
              </h3>

              <p className="education-institute">
                C. Byregowda Institute of Technology, Kolar
              </p>

              <p className="education-year">
                2023 – 2027
              </p>

              <div className="education-tags">
                <span>Data Structures & Algorithms</span>
                <span>Machine Learning</span>
                <span>Deep Learning</span>
                <span>Data Science</span>
                <span>Database Systems</span>
              </div>

            </div>

          </div>


          {/* COLLEGE */}

          <div className="education-item education-right">

           <div className="education-logo education-logo-left">
  <img
    src="/logos/vidya-jyothi.png"
    alt="Vidya Jyothi College logo"
  />
</div>

            <div className="education-card">

              <div className="education-badge">
                COLLEGE
              </div>

              <h3>
                PUC – PCMB
              </h3>

              <p className="education-institute">
                Vidya Jyothi College, Kolar
              </p>

              <p className="education-year">
                2020 – 2022
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* =========================================
    EXPERIENCE
========================================= */}

<section id="experience" className="experience-section">

  <div className="section-number">
    03 / EXPERIENCE
  </div>

  <div className="experience-heading">

    <h2>
      Where I've <span>contributed.</span>
    </h2>

  </div>


  <div className="experience-list">

    {/* EXPERIENCE 01 */}

  <div
  className="experience-card"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.setProperty("--mouse-x", "50%");
    e.currentTarget.style.setProperty("--mouse-y", "50%");
  }}
>

  <div className="experience-number">
    01
  </div>

  <div className="experience-category">
    LEADERSHIP
  </div>

  <h3>
    Vice President
  </h3>

  <p className="experience-company">
    Club of Programmers (COPS) — CBIT Kolar
  </p>

  <p className="experience-date">
    Aug 2023 – Present
  </p>

  <h4 className="experience-role">
    Media & Design Head
  </h4>

  <ul className="experience-points">

    <li>
      Led the club's media and design activities, shaping its
      visual identity and promotional content.
    </li>

    <li>
      Created and managed digital creatives for club initiatives,
      events and online presence.
    </li>

    <li>
      Coordinated and conducted eSports events as part of the
      club's non-technical activities.
    </li>

  </ul>

  <div className="experience-tags">
    <span>Media & Design</span>
    <span>Event Management</span>
    <span>eSports</span>
    <span>Team Leadership</span>
  </div>

</div>
</div> 
</section>
      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-number">
          04 / PROJECTS
        </div>

        <div className="section-heading">
          <h2>
            Things I'm <span>building.</span>
          </h2>
        </div>

        <div className="projects">
          {/* PROJECT 1 */}
          <article
            className="project-card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty("--mouse-x", "50%");
              e.currentTarget.style.setProperty("--mouse-y", "50%");
            }}
          >
            <div className="project-number">
              01
            </div>

            <p className="project-category">
  COMPUTER VISION
</p>

<h3>
  Gesture-Controlled
  <br />
  Virtual Mouse
</h3>

<p className="project-description">
  A real-time computer vision system that enables
  touchless mouse interaction using hand gestures.
  The system tracks hand landmarks to control cursor
  movement and perform mouse actions without physical input.
</p>

            <div className="tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
              <span>PyAutoGUI</span>
            </div>

            <a
              href="https://github.com/HarshaSK19/Virtual-Mouse"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
              <span>→</span>
            </a>

            <div className="project-visual mouse-visual">
              <div className="visual-window">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="hand-visual">
                  <div className="hand-tracking-svg">
                    <HandTrackingVisual />
                  </div>

                  <div className="hand-label">
                    REAL-TIME HAND TRACKING
                  </div>
                </div>
              </div>
            </div>
          </article>
{/* PROJECT 2 */}
<article
            className="project-card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty("--mouse-x", "50%");
              e.currentTarget.style.setProperty("--mouse-y", "50%");
            }}
          >

  <div className="project-number">
    02
  </div>

  <p className="project-category">
    GENERATIVE AI
  </p>

  <h3>
    RAGX
  </h3>

<p className="project-description">
  A Retrieval-Augmented Generation system designed to
  improve the reliability of AI responses by retrieving
  relevant knowledge before generating answers and
  evaluating whether the response is supported by evidence.
</p>
  <div className="tags">
    <span>Python</span>
    <span>RAG</span>
    <span>LLM</span>
    <span>Semantic Search</span>
    <span>AI Evaluation</span>
  </div>

  <div className="building-badge">
    <span></span>
    CURRENTLY BUILDING
  </div>

  <div className="project-visual rag-visual">

    <div className="rag-orbit r1"></div>
    <div className="rag-orbit r2"></div>

    <div className="rag-center">
      <BrainIcon
        idPrefix="rag-brain"
        className="brain-svg"
      />
    </div>

    <div className="rag-label">
             RETRIEVE • GENERATE • VERIFY
    </div>

  </div>

</article>

</div>

</section>
     {/* =========================================
    SKILLS
========================================= */}

<section id="skills" className="skills-section">

  <div className="section-number">
    05 / SKILLS
  </div>

  <div className="skills-heading">

    <div className="section-label">
    </div>

    <h2>
      Tools I <span>work with.</span>
    </h2>

  </div>


  {/* CRAFTING INTERFACES */}

  <div className="skills-category">

    <div className="skills-category-title">
      <span></span>
      CRAFTING INTERFACES
      <span></span>
    </div>

    <div className="skills-icons-grid">

      {interfaceSkills.map((skill) => (
        <div className="skill-icon-item" key={skill.name}>

          <div className="skill-icon-circle">

            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />

          </div>

          <div className="skill-icon-glow"></div>

          <p>{skill.name}</p>

        </div>
      ))}

    </div>

  </div>


  {/* POWERING LOGIC */}

  <div className="skills-category logic-category">

    <div className="skills-category-title">
      <span></span>
      POWERING LOGIC
      <span></span>
    </div>

    <div className="skills-icons-grid">

      {logicSkills.map((skill) => (
        <div className="skill-icon-item" key={skill.name}>

          <div className="skill-icon-circle">

            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />

          </div>

          <div className="skill-icon-glow"></div>

          <p>{skill.name}</p>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-number">
          06 / CONTACT
        </div>

        <p className="eyebrow">
          <span></span>
          GET IN TOUCH
          <span></span>
        </p>

        <h2>
          Let's build something
          <span> intelligent.</span>
        </h2>

        <p className="contact-description">
          Have an idea, opportunity or project in mind?
          Let's connect.
        </p>

        <a
          href="mailto:mail2harshask@gmail.com"
          className="contact-button"
        >
          Get in touch →
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/HarshaSK19"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/harsha-sk-305b5238b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

         <a href="mailto:mail2harshask@gmail.com">
  Email ↗
</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          HARSHA <span>SK</span>
        </div>

        <p>
          BUILD • LEARN • CREATE
        </p>

        <p>
          © 2026 Harsha SK
        </p>
      </footer>
    </main>
  );
}

function SkillNode({
  className,
  title,
  subtitle,
}: {
  className: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className={`skill-node ${className}`}>
      <span className="node-dot" />

      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}