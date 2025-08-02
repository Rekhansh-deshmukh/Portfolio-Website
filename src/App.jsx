import React, { useEffect } from "react";
import "./index.css";

function FrostParticles() {
  useEffect(() => {
    const container = document.getElementById("frostParticles");
    if (!container) return;
    container.innerHTML = "";
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "frost-particle";
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      container.appendChild(particle);
    }
  }, []);
  return <div className="frost-particles" id="frostParticles"></div>;
}

function App() {
  // TODO: Break into components (Hero, SocialGrid, Skills, Achievements, Projects, etc.)
  return (
    <>
      <FrostParticles />
      <div className="container">
        <main>
          <div className="bento-grid">
            {/* Workspace Photo Card */}
            <div className="bento-item workspace-card">
              <img src="https://picsum.photos/seed/workspace/600/600.jpg" alt="Creative Workspace" />
              <div className="workspace-overlay">
                <div className="workspace-title">Creative Workspace</div>
                <div className="workspace-subtitle">Where innovation meets design excellence</div>
              </div>
            </div>
            {/* Hero Section (moved below workspace) */}
            <div className="bento-item hero scrollable" id="about">
              <div style={{display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10}}>
                <h1 style={{marginBottom: 0, marginTop: 2}}>Rekhansh Raje Deshmukh</h1>
                <a href="resume.pdf" className="btn" target="_blank" rel="noopener">Resume</a>
                <div className="available-badge" style={{marginBottom: 0}}>Available To Work</div>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 10, flexWrap: "wrap"}}>
                <div className="subtitle" style={{marginBottom: 0}}>I'm a Developer</div>
                <div className="tags" style={{marginBottom: 0}}>
                  <span className="tag">India</span>
                  <span className="tag">Data</span>
                  <span className="tag">AI</span>
                </div>
              </div>
              <p className="description">Creating beautiful digital experiences with user-centered design. Passionate about crafting intuitive interfaces that solve real problems and delight users.</p>
            </div>
            {/* Social Grid */}
            <div className="social-grid">
              <a href="https://twitter.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-twitter social-icon"></i>
                <div className="social-name">Twitter</div>
              </a>
              <a href="https://linkedin.com/in/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-linkedin social-icon"></i>
                <div className="social-name">LinkedIn</div>
              </a>
              <a href="https://github.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-github social-icon"></i>
                <div className="social-name">GitHub</div>
              </a>
              <a href="https://dribbble.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-dribbble social-icon"></i>
                <div className="social-name">Dribbble</div>
              </a>
              <a href="https://instagram.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-instagram social-icon"></i>
                <div className="social-name">Instagram</div>
              </a>
              <a href="https://behance.net/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-behance social-icon"></i>
                <div className="social-name">Behance</div>
              </a>
              <a href="https://youtube.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-youtube social-icon"></i>
                <div className="social-name">YouTube</div>
              </a>
              <a href="https://facebook.com/pragadeswaran" target="_blank" rel="noopener" className="social-item">
                <i className="fab fa-facebook social-icon"></i>
                <div className="social-name">Facebook</div>
              </a>
            </div>
            {/* Right of Social Grid Card */}
            <div className="bento-item right-of-social" style={{gridColumn: "5 / span 4", gridRow: "3 / span 1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "120px"}}>
              <h2 style={{fontSize: "1.1rem", color: "var(--accent)", marginBottom: 10}}>Right Side Card</h2>
              <div style={{color: "var(--text-secondary)", fontSize: "0.95rem"}}>This card is to the right of the Social Grid. Add your content here.</div>
            </div>
            {/* Hero Section */}
            <div className="bento-item hero scrollable" id="about">
              <div style={{display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10}}>
                <h1 style={{marginBottom: 0, marginTop: 2}}>Rekhansh Raje Deshmukh</h1>
                <a href="resume.pdf" className="btn" target="_blank" rel="noopener">Resume</a>
                <div className="available-badge" style={{marginBottom: 0}}>Available To Work</div>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 10, flexWrap: "wrap"}}>
                <div className="subtitle" style={{marginBottom: 0}}>I'm a Developer</div>
                <div className="tags" style={{marginBottom: 0}}>
                  <span className="tag">India</span>
                  <span className="tag">Data</span>
                  <span className="tag">AI</span>
                </div>
              </div>
              <p className="description">Creating beautiful digital experiences with user-centered design. Passionate about crafting intuitive interfaces that solve real problems and delight users.</p>
            </div>
            {/* Skills */}
            <div className="bento-item skills scrollable">
              <h2>Technical Skills</h2>
              <div className="skill-list">
                <div className="skill-item">Figma</div>
                <div className="skill-item">Webflow</div>
                <div className="skill-item">Framer</div>
                <div className="skill-item">HTML/CSS</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Vue.js</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">TypeScript</div>
                <div className="skill-item">Tailwind CSS</div>
                <div className="skill-item">SEO</div>
                <div className="skill-item">Photoshop</div>
                <div className="skill-item">Illustrator</div>
                <div className="skill-item">After Effects</div>
              </div>
            </div>
            {/* Achievements */}
            <div className="bento-item achievements scrollable">
              <h2>Achievements</h2>
              <div className="achievements-list">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="achievement-content">
                    <h3>Design Excellence</h3>
                    <p>Best UI Design Award 2022</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="achievement-content">
                    <h3>Client Satisfaction</h3>
                    <p>98% Positive Reviews</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="achievement-content">
                    <h3>Fast Delivery</h3>
                    <p>Average 2-week turnaround</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="achievement-content">
                    <h3>Top Rated</h3>
                    <p>5-star rating on platforms</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="bento-item projects scrollable" id="portfolio">
              <h2>
                Featured Projects
                <span style={{fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 400}}>Click to view</span>
              </h2>
              <div className="projects-grid">
                {/* Project cards - repeat for each project */}
                <div className="project-card">
                  <a href="https://example.com/nathan-portfolio" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">Nathan Portfolio</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">Portfolio</span>
                      <span className="tag">Animation</span>
                      <span className="tag">Responsive</span>
                    </div>
                    <div className="project-description">A modern portfolio website showcasing creative work with smooth animations and responsive design.</div>
                    <div className="project-category">Web Design</div>
                  </a>
                </div>
                <div className="project-card">
                  <a href="https://example.com/nexgen-agency" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">NexGen Agency</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">Agency</span>
                      <span className="tag">Redesign</span>
                      <span className="tag">Marketing</span>
                    </div>
                    <div className="project-description">Complete website redesign for a digital marketing agency with improved loading speed and conversion rates.</div>
                    <div className="project-category">Web Dev</div>
                  </a>
                </div>
                <div className="project-card">
                  <a href="https://example.com/tech-startup" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">Tech Startup</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">Startup</span>
                      <span className="tag">Fintech</span>
                      <span className="tag">App</span>
                    </div>
                    <div className="project-description">Mobile app UI/UX design for a fintech startup with intuitive user flows and polished design system.</div>
                    <div className="project-category">UI/UX</div>
                  </a>
                </div>
                <div className="project-card">
                  <a href="https://example.com/ecommerce" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">E-commerce Platform</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">E-commerce</span>
                      <span className="tag">Full-stack</span>
                      <span className="tag">Payments</span>
                    </div>
                    <div className="project-description">Full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.</div>
                    <div className="project-category">Web Dev</div>
                  </a>
                </div>
                <div className="project-card">
                  <a href="https://example.com/mobile-app" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">Fitness App</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">Fitness</span>
                      <span className="tag">Mobile</span>
                      <span className="tag">Tracking</span>
                    </div>
                    <div className="project-description">Mobile app design for fitness tracking with workout planning and progress visualization.</div>
                    <div className="project-category">UI/UX</div>
                  </a>
                </div>
                <div className="project-card">
                  <a href="https://example.com/corporate-site" target="_blank" rel="noopener">
                    <div className="project-title-row">
                      <div className="project-title">Corporate Website</div>
                      <div className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <div className="project-tags" style={{display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap"}}>
                      <span className="tag">Corporate</span>
                      <span className="tag">Brand</span>
                      <span className="tag">Accessibility</span>
                    </div>
                    <div className="project-description">Professional website for a multinational corporation focused on brand consistency and accessibility.</div>
                    <div className="project-category">Web Design</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
