import React, { useState, useEffect } from 'react';
import { Code, Database, Server, GitBranch, Terminal, Mail, Github, Linkedin, ExternalLink, Wallpaper } from 'lucide-react';
import './app.css';

const Portfolio = () => {
  const [binaryStrings, setBinaryStrings] = useState([]);
  const [activeSection, setActiveSection] = useState('home');

  // Generate random binary strings for background animation
  useEffect(() => {
    const generateBinary = () => {
      const strings = [];
      for (let i = 0; i < 20; i++) {
        const length = Math.floor(Math.random() * 20) + 10;
        const binary = Array(length).fill(0).map(() => Math.round(Math.random())).join('');
        strings.push({
          id: i,
          text: binary,
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setBinaryStrings(strings);
    };

    generateBinary();
    const interval = setInterval(() => {
      setBinaryStrings(prev => prev.map(str => ({
        ...str,
        y: (str.y + str.speed) % 100,
        text: Math.random() > 0.95 ? 
          Array(str.text.length).fill(0).map(() => Math.round(Math.random())).join('') : 
          str.text
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = [
    { name: 'Node.js', level: 90 },
    { name: '.Net', level: 85 },
    { name: 'MYSQL', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
  ];

  const projects = [
    {
      title: 'Mail Application',
      description: 'Developed an email system where users can send, receive, and manage emails.',
      tech: ['Node.js', 'MYSQL', 'React'],
      github: 'https://github.com/Menan-Mohamed/MailApplication',
      live: 'https://drive.google.com/file/d/1tbEfP3HJs0Uza8qfJW3InkVsJc5lfNzU/view?usp=sharing'
    },
    {
      title: 'Producer & Consumer Simulation',
      description: 'Built a web-based simulation of the Producer-Consumer problem in real time.',
      tech: ['React', 'WebSocket', 'Node.js', 'Threads'],
      github: 'https://github.com/Menan-Mohamed/Producer_Consumer',
      live: 'https://drive.google.com/file/d/17SGjchn9qbAPaVB1QHTaDdgdAs2DIz9k/view?usp=sharing'
    },
    {
      title: 'Virtual Painter',
      description: 'Designed a tool that lets users draw in the air using hand movements. Used OpenCV to track hand gestures and create virtual drawings.',
      tech: ['Python', 'Computer Vision'],
      github: 'https://github.com/Menan-Mohamed/VirtualPainter',
      live: 'https://drive.google.com/file/d/1Wn1t1mKspPzt1vLziii6Slbo1z1k0Ac6/view?usp=sharing'
    }
  ];

  return (
    <div className="portfolio">
      {/* Animated Binary Background */}
      <div className="binary-background">
        {binaryStrings.map(str => (
          <div
            key={str.id}
            className="binary-string"
            style={{
              left: `${str.x}%`,
              top: `${str.y}%`,
            }}
          >
            {str.text}
          </div>
        ))}
      </div>

      {/* Matrix-style lines */}
      <div className="matrix-lines">
        <div className="matrix-gradient"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-line"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="bracket">&lt;</span>
            FullStack.Dev
            <span className="bracket">/&gt;</span>
          </div>
          <div className="nav-menu">
            {['Home', 'Skills', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="Myname">
            <span className="bracket">&lt;</span>
            Menan.Mohamed.AboDahab
            <span className="bracket">/&gt;</span>
        </div>

        {/* Hero Section */}
        <section id="home" className="section hero-section">
          <div className="hero-container">
            <div className="hero-icon">
              <Terminal size={80} />
            </div>
            <h1 className="hero-title">
              <span className="title-hello">Hello</span>
              <span className="title-world">.World()</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer & System Engineer
            </p>
            <div className="hero-description">
              Designing responsive web applications with clean, efficient code.
              <br />
              Specializing in Back-end development, RESTful APIs, and database integration.
            </div>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="skills-container">
            <h2 className="section-title">
              Technical Skills
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-icons">
              <div className="skill-icon">
                <Database size={40} />
                <p>Database Design</p>
              </div>
              <div className="skill-icon">
                <Server size={40} />
                <p>Server Architecture</p>
              </div>
              <div className="skill-icon">
                <Code size={40} />
                <p>API Development</p>
              </div>
              <div className="skill-icon">
                <Wallpaper size={40} />
                <p>Frontend</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="projects-container">
            <h2 className="section-title">
              Featured Projects
            </h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card"
                >
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="contact-container">
            <h2 className="section-title">
              Get In Touch
            </h2>
            <p className="contact-description">
              Ready to build something amazing together? Let's discuss your next Full-Stack project.
            </p>
            <div className="contact-grid">
              <a
                href="mailto:aboeldahabmenan@gmail.com"
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={32} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/Menan-Mohamed"
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={32} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/menan-mohamed-bb6625264/"
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={32} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="contact-footer">
              <p>Available for freelance projects and full-time opportunities.</p>
              <p className="contact-tagline">Let's build the future, one API at a time.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FullStack Developer Portfolio. Built with React & CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;