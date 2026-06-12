'use client';

import MilkyWaySwarm from './MilkyWaySwarm';
import Typewriter from './Typewriter';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('projects');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="nebula"></div>
      <MilkyWaySwarm />
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-title">
          <span className="robotic">ADIB</span>
        </h1>
        <p className="hero-subtitle">
          <Typewriter />
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
