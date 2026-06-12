'use client';

import { useEffect, useRef } from 'react';

const skills = [
  { name: 'C', color: '#A8B9CC' },
  { name: 'C++', color: '#00599C' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Python', color: '#3776AB' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Git', color: '#F05032' },
  { name: 'Spline (3D)', color: '#B583FF' },
  { name: 'Lovable', color: '#FF6B9D' },
  { name: 'Vercel', color: '#FFFFFF' },
  { name: 'Lens Studio (AR - Snapchat)', color: '#FFFC00' },
  { name: 'House Effects (AR - TikTok)', color: '#25F4EE' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('skills-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies & tools I work with</p>

        <div className="skills-chip-grid" ref={sectionRef}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-chip"
              style={
                {
                  '--chip-color': skill.color,
                  '--chip-delay': `${index * 0.08}s`,
                } as React.CSSProperties
              }
            >
              <span className="chip-dot" />
              <span className="chip-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
