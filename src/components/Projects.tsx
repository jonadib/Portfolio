'use client';

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <div className="projects-header">
            <div className="projects-title">
              <span className="project-label">⚡ SELECTED WORK</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="projects-status">
              <span>⚙️ BUILT, NOT IMAGINED</span>
              <p>Every card below maps to a real repo / demo</p>
            </div>
          </div>

          <div className="projects-grid">
            {/* Project Card 1: Pixelency */}
            <div className="project-card">
              <div className="project-header">
                <h3>Pixelency | Digital Design Agency</h3>
                <span className="category-badge">AGENCY</span>
              </div>
              <p className="project-teaser">
                A professional digital design agency showcasing innovative brand identity,
                web design, and creative solutions for modern businesses.
              </p>

              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">+3 more</span>
              </div>

              <ul className="project-highlights">
                <li>Stunning portfolio showcasing award-winning design projects</li>
                <li>Interactive case studies with detailed project breakdowns</li>
                <li>Smooth animations and engaging user experience design</li>
              </ul>

              <div className="project-footer">
                <span className="footer-label">AGENCY</span>
                <div className="footer-links">
                  <a href="https://pixelency.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2: RU Market */}
            <div className="project-card">
              <div className="project-header">
                <h3>RU Market | University Marketplace</h3>
                <span className="category-badge">ECOMMERCE</span>
              </div>
              <p className="project-teaser">
                A dedicated buy-and-sell platform tailored for Rajshahi University
                students to trade essentials securely.
              </p>

              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">+4 more</span>
              </div>

              <ul className="project-highlights">
                <li>Student-only login verification for a secure trading environment</li>
                <li>Real-time categorized listings for gadgets, books, and dorm essentials</li>
                <li>Integrated chat system for direct buyer-seller interaction</li>
              </ul>

              <div className="project-footer">
                <span className="footer-label">PLATFORM</span>
                <div className="footer-links">
                  <a href="https://ru-market.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href="https://github.com/jonadib/RU-Market" target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3: RU CSE Q&A */}
            <div className="project-card">
              <div className="project-header">
                <h3>RU CSE Study | Collaborative Q&A</h3>
                <span className="category-badge">PLATFORM</span>
              </div>
              <p className="project-teaser">
                Knowledge-sharing hub for Computer Science students to collaborate on
                technical problems and coursework.
              </p>

              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">SupaBase</span>
                <span className="tech-tag">Tailwind</span>
                <span className="tech-tag">+2 more</span>
              </div>

              <ul className="project-highlights">
                <li>Modern Q&A interface with markdown support for code snippets</li>
                <li>Upvoting system and expert badges for high-quality answers</li>
                <li>Categorized discussion threads for specific CSE courses</li>
              </ul>

              <div className="project-footer">
                <span className="footer-label">WEB</span>
                <div className="footer-links">
                  <a href="https://ru-cse-q-a.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href="https://github.com/jonadib/RU-CSE-Study" target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4: Adib Motors */}
            <div className="project-card">
              <div className="project-header">
                <h3>Adib Motors | Bike Racer Stories</h3>
                <span className="category-badge">STORYTELLING</span>
              </div>
              <p className="project-teaser">
                An immersive storytelling platform celebrating the journey, achievements,
                and passion of professional bike racers through dynamic narratives.
              </p>

              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Three.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">+3 more</span>
              </div>

              <ul className="project-highlights">
                <li>Engaging race highlights and career milestone documentation</li>
                <li>Interactive 3D visualizations of track layouts and race data</li>
                <li>Photo galleries and video integration for immersive storytelling</li>
              </ul>

              <div className="project-footer">
                <span className="footer-label">STORY</span>
                <div className="footer-links">
                  <a href="https://adib-motors.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Marquee Section */}
      <section className="tech-marquee-section">
        <div className="marquee-container">
          {/* Row 1: Left to Right */}
          <div className="marquee-row row-ltr">
            <div className="marquee-content">
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#E34F26" d="M27.8 15.3l10.5 102.3 45.7 12.7 45.7-12.7 10.5-102.3z" />
                  <path fill="#EF652A" d="M118.4 24l-8.7 85.3-25.7 7.1V24z" />
                  <path
                    fill="#EBEBEB"
                    d="M84 41.6H50.2l-1.3 14.1H84l-2.6 28.1-17.4 4.7-17.4-4.7-.6-12.2h-14l1.2 24.3 30.8 8.4 30.8-8.4 4.3-46.3z"
                  />
                  <path fill="#FFF" d="M84 41.6H84.1v14.1H84zM84 83.8l-17.4 4.7v13l30.8-8.4 4.3-46.3H84.1z" />
                </svg>
                <span>HTML5</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#1572B6" d="M27.8 15.3l10.5 102.3 45.7 12.7 45.7-12.7 10.5-102.3z" />
                  <path fill="#33A9DC" d="M118.4 24l-8.7 85.3-25.7 7.1V24z" />
                  <path
                    fill="#EBEBEB"
                    d="M84 41.6H50.2l-1.3 14.1H84l-2.6 28.1-17.4 4.7-17.4-4.7-.6-12.2h-14l1.2 24.3 30.8 8.4 30.8-8.4 4.3-46.3z"
                  />
                  <path fill="#FFF" d="M84 41.6H84.1v14.1H84zM84 83.8l-17.4 4.7v13l30.8-8.4 4.3-46.3H84.1z" />
                </svg>
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#F7DF1E" d="M1.4 1.4h125.2v125.2H1.4z" />
                  <path d="M106.6 112.5c-1.3-3.6-2.5-7.1-4.2-10.4-1.7-3.3-3.8-6.1-6.7-8-3.3-2.1-7.1-3.3-11.3-3.3-4.2 0-8 1.2-11.3 3.3-2.9 1.9-5 4.7-6.7 8-1.7 3.3-2.9 6.8-4.2 10.4H50c1.3-4.6 2.5-9.2 4.6-13.4 2.1-4.2 4.6-8 8-11.3 4.2-3.8 9.2-5.9 15.1-5.9 5.9 0 10.9 2.1 15.1 5.9 3.4 3.3 5.9 7.1 8 11.3 2.1 4.2 3.3 8.8 4.6 13.4h-11.8z" />
                </svg>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#007396"
                    d="M57.6 102.4c0 3 4.1 5.3 10.2 5.3s10.2-2.3 10.2-5.3-4.1-5.3-10.2-5.3-10.2 2.3-10.2 5.3z"
                  />
                  <path
                    fill="#007396"
                    d="M38.4 114.1c0 4.1 13.1 7.4 29.4 7.4s29.4-3.3 29.4-7.4-13.1-7.4-29.4-7.4-29.4 3.3-29.4 7.4z"
                  />
                  <path
                    fill="#ED8B00"
                    d="M64.6 24c0 0 11.5 5.8 4.6 16.1-5.2 7.7-18.4 5.3-18.4 5.3s-10.9-2.3 10.3 10.9c5.2 3.4 13.8 8.6 11.5 17.2-2.3 8.6-16.1 12.6-16.1 12.6s-18.4 2.3-3.4-10.9c0-1.1 1.1-2.3 2.3-2.3s20.1-4.6 2.3-17.2C46.6 34.3 64.6 24 64.6 24z"
                  />
                </svg>
                <span>Java</span>
              </div>
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="marquee-content" aria-hidden="true">
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#E34F26" d="M27.8 15.3l10.5 102.3 45.7 12.7 45.7-12.7 10.5-102.3z" />
                  <path fill="#EF652A" d="M118.4 24l-8.7 85.3-25.7 7.1V24z" />
                  <path
                    fill="#EBEBEB"
                    d="M84 41.6H50.2l-1.3 14.1H84l-2.6 28.1-17.4 4.7-17.4-4.7-.6-12.2h-14l1.2 24.3 30.8 8.4 30.8-8.4 4.3-46.3z"
                  />
                  <path fill="#FFF" d="M84 41.6H84.1v14.1H84zM84 83.8l-17.4 4.7v13l30.8-8.4 4.3-46.3H84.1z" />
                </svg>
                <span>HTML5</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#1572B6" d="M27.8 15.3l10.5 102.3 45.7 12.7 45.7-12.7 10.5-102.3z" />
                  <path fill="#33A9DC" d="M118.4 24l-8.7 85.3-25.7 7.1V24z" />
                  <path
                    fill="#EBEBEB"
                    d="M84 41.6H50.2l-1.3 14.1H84l-2.6 28.1-17.4 4.7-17.4-4.7-.6-12.2h-14l1.2 24.3 30.8 8.4 30.8-8.4 4.3-46.3z"
                  />
                  <path fill="#FFF" d="M84 41.6H84.1v14.1H84zM84 83.8l-17.4 4.7v13l30.8-8.4 4.3-46.3H84.1z" />
                </svg>
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#F7DF1E" d="M1.4 1.4h125.2v125.2H1.4z" />
                  <path d="M106.6 112.5c-1.3-3.6-2.5-7.1-4.2-10.4-1.7-3.3-3.8-6.1-6.7-8-3.3-2.1-7.1-3.3-11.3-3.3-4.2 0-8 1.2-11.3 3.3-2.9 1.9-5 4.7-6.7 8-1.7 3.3-2.9 6.8-4.2 10.4H50c1.3-4.6 2.5-9.2 4.6-13.4 2.1-4.2 4.6-8 8-11.3 4.2-3.8 9.2-5.9 15.1-5.9 5.9 0 10.9 2.1 15.1 5.9 3.4 3.3 5.9 7.1 8 11.3 2.1 4.2 3.3 8.8 4.6 13.4h-11.8z" />
                </svg>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#007396"
                    d="M57.6 102.4c0 3 4.1 5.3 10.2 5.3s10.2-2.3 10.2-5.3-4.1-5.3-10.2-5.3-10.2 2.3-10.2 5.3z"
                  />
                  <path
                    fill="#007396"
                    d="M38.4 114.1c0 4.1 13.1 7.4 29.4 7.4s29.4-3.3 29.4-7.4-13.1-7.4-29.4-7.4-29.4 3.3-29.4 7.4z"
                  />
                  <path
                    fill="#ED8B00"
                    d="M64.6 24c0 0 11.5 5.8 4.6 16.1-5.2 7.7-18.4 5.3-18.4 5.3s-10.9-2.3 10.3 10.9c5.2 3.4 13.8 8.6 11.5 17.2-2.3 8.6-16.1 12.6-16.1 12.6s-18.4 2.3-3.4-10.9c0-1.1 1.1-2.3 2.3-2.3s20.1-4.6 2.3-17.2C46.6 34.3 64.6 24 64.6 24z"
                  />
                </svg>
                <span>Java</span>
              </div>
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="marquee-row row-rtl">
            <div className="marquee-content">
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <circle cx="64" cy="64" r="64" fill="#339933" />
                  <path
                    fill="#FFF"
                    d="M82.2 75c-1.1-1.2-2.4-2-3.8-2.6-1.4-.6-2.9-.9-4.5-.9-2.3 0-4.3.7-6.1 2.2-1.7 1.4-2.6 3.4-2.6 5.8 0 2.4.9 4.3 2.6 5.8 1.7 1.4 3.7 2.2 6.1 2.2 1.6 0 3.1-.3 4.5-.9 1.4-.6 2.7-1.4 3.8-2.6l4.6 4.6c-2.3 2.3-5.1 3.5-8.4 3.5-4.1 0-7.7-1.4-10.8-4.2-3.1-2.8-4.6-6.4-4.6-10.8s1.5-8 4.6-10.8c3.1-2.8 6.7-4.2 10.8-4.2 3.3 0 6.1 1.2 8.4 3.5l-4.6 4.6z"
                  />
                </svg>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#0095D5" d="M128 128H0V0h128v128z" />
                  <path fill="#FFF" d="M64 48L32 16h64L64 48zm0 32l32 32H32l32-32zM32 32h64L64 16 32 32z" />
                </svg>
                <span>Kotlin</span>
              </div>
              <div className="tech-item">
                <svg viewBox="-11.5 -10.23174 23 20.46348">
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span>React</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path d="M64 0l64 36.8v74.4L64 128 0 111.2V36.8L64 0z" />
                  <path fill="#FFF" d="M37.3 35.3h10.9L74.1 82V35.3h10.3v61.1H73.5L47.6 49.3v47.1H37.3z" />
                </svg>
                <span>Next.js</span>
              </div>
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="marquee-content" aria-hidden="true">
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <circle cx="64" cy="64" r="64" fill="#339933" />
                  <path
                    fill="#FFF"
                    d="M82.2 75c-1.1-1.2-2.4-2-3.8-2.6-1.4-.6-2.9-.9-4.5-.9-2.3 0-4.3.7-6.1 2.2-1.7 1.4-2.6 3.4-2.6 5.8 0 2.4.9 4.3 2.6 5.8 1.7 1.4 3.7 2.2 6.1 2.2 1.6 0 3.1-.3 4.5-.9 1.4-.6 2.7-1.4 3.8-2.6l4.6 4.6c-2.3 2.3-5.1 3.5-8.4 3.5-4.1 0-7.7-1.4-10.8-4.2-3.1-2.8-4.6-6.4-4.6-10.8s1.5-8 4.6-10.8c3.1-2.8 6.7-4.2 10.8-4.2 3.3 0 6.1 1.2 8.4 3.5l-4.6 4.6z"
                  />
                </svg>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path fill="#0095D5" d="M128 128H0V0h128v128z" />
                  <path fill="#FFF" d="M64 48L32 16h64L64 48zm0 32l32 32H32l32-32zM32 32h64L64 16 32 32z" />
                </svg>
                <span>Kotlin</span>
              </div>
              <div className="tech-item">
                <svg viewBox="-11.5 -10.23174 23 20.46348">
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span>React</span>
              </div>
              <div className="tech-item">
                <svg viewBox="0 0 128 128">
                  <path d="M64 0l64 36.8v74.4L64 128 0 111.2V36.8L64 0z" />
                  <path fill="#FFF" d="M37.3 35.3h10.9L74.1 82V35.3h10.3v61.1H73.5L47.6 49.3v47.1H37.3z" />
                </svg>
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
