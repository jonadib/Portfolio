'use client';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-text">
              I'm a passionate Computer Science student and Software Engineer focused on building impactful
              digital solutions. My work revolves around creating platforms that solve real-world problems for
              students and communities, ranging from marketplaces to interactive learning tools. I specialize
              in frontend development and enjoy diving into the fundamentals of algorithms and data
              structures.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h4>Location</h4>
                <p>Rajshahi, Bangladesh</p>
              </div>
              <div className="detail-item">
                <h4>Background</h4>
                <p>BSc in Computer Science & Engineering</p>
              </div>
              <div className="detail-item">
                <h4>Current Focus</h4>
                <p>Machine Learning & Algorithm Visualization</p>
              </div>
              <div className="detail-item">
                <h4>Interests</h4>
                <p>Data Structures, Machine Learning, Web Development</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="/profile.jpg" alt="Md Mujahidul Islam Adib" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
