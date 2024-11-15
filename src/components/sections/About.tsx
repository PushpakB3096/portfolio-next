const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <span className="subtitle">About Me</span>
        <h2>Who I Am</h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="image-wrapper">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Profile" />
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="text">Years<br />Experience</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <p className="lead-text">Crafting digital experiences through clean and efficient code.</p>
          <p className="description">I'm a passionate developer who loves creating beautiful and functional web experiences. With a focus on user-centric design and clean code, I bring ideas to life through technology.</p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-count="50">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="30">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="15">15+</div>
              <div className="stat-label">Awards Received</div>
            </div>
          </div>

          <div className="skills-container">
            <div className="skills-group">
              <h3>Technical Skills</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-info">
                    <span>Frontend Development</span>
                    <span>90%</span>
                  </div>
                  <div className="progress-line"><span className="frontend"></span></div>
                </div>
                <div className="skill-bar">
                  <div className="skill-info">
                    <span>Backend Development</span>
                    <span>80%</span>
                  </div>
                  <div className="progress-line"><span className="backend"></span></div>
                </div>
                <div className="skill-bar">
                  <div className="skill-info">
                    <span>UI/UX Design</span>
                    <span>75%</span>
                  </div>
                  <div className="progress-line"><span className="design"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;