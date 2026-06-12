'use client';

import { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = document.querySelectorAll('.skill-row');
    rows.forEach((row) => skillObserver.observe(row));

    return () => {
      rows.forEach((row) => skillObserver.unobserve(row));
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Proficient in modern web technologies and cloud computing platforms</p>

        <div className="projects-skills-grid">
          {/* Programming Languages */}
          <div className="project-skill-card">
            <div className="card-header">
              <div className="header-left">
                <span className="category-icon">💻</span>
                <h3>Programming Languages</h3>
              </div>
              <span className="skill-count">5+</span>
            </div>
            <div className="skills-list">
              <div className="skill-row">
                <span className="skill-name">JavaScript (ES6+)</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '92%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">92%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">TypeScript</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '88%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">88%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Java</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '85%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">85%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Python</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '80%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">80%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">C / C++</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '90%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">90%</span>
              </div>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="project-skill-card">
            <div className="card-header">
              <div className="header-left">
                <span className="category-icon">🎨</span>
                <h3>Frontend & UI</h3>
              </div>
              <span className="skill-count">6+</span>
            </div>
            <div className="skills-list">
              <div className="skill-row">
                <span className="skill-name">React / Next.js</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '95%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">95%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Tailwind CSS</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '90%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">90%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Framer Motion</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '85%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">85%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Canvas API / Three.js</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '82%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">82%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Vite / Webpack</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '88%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">88%</span>
              </div>
            </div>
          </div>

          {/* Backend & Databases */}
          <div className="project-skill-card">
            <div className="card-header">
              <div className="header-left">
                <span className="category-icon">⚙️</span>
                <h3>Backend & Databases</h3>
              </div>
              <span className="skill-count">5+</span>
            </div>
            <div className="skills-list">
              <div className="skill-row">
                <span className="skill-name">Node.js / Express</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '90%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">90%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">SupaBase / Firebase</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '85%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">85%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">PostgreSQL / MongoDB</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '82%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">82%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">REST APIs</span>
                <div className="animated-bar">
                  <div className="bar-fill" style={{ '--progress': '92%' } as React.CSSProperties}></div>
                </div>
                <span className="skill-value">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
