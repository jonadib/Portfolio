'use client';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <span className="handwritten-footer">Adib</span>
          </h3>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                Connect
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="mailto:mujahidulislamadib@gmail.com">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/jonadib" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/md-mujahidul-islam-adib-017b42287/" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.231-1.661-2.231-1.405 0-2.432.905-2.832 1.993-.146.358-.182.856-.182 1.354v4.453h-3.635s.049-7.222 0-7.975h3.635v1.128c-.009.015-.022.029-.031.044h.031v-.044c.551-1.048 1.53-2.541 3.724-2.541 2.719 0 4.761 1.777 4.761 5.588v4.453zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.962.77-1.71 1.914-1.71.745 0 1.917.748 1.917 1.71 0 .951-.172 1.71-1.916 1.71zm1.458 11.597H3.446V9.477h3.349v10.975zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Md Mujahidul Islam Adib. All rights reserved.</p>
        <p className="built-with">Built with ✨ by Adib</p>
      </div>
    </footer>
  );
}
