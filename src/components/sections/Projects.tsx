import Link from 'next/link';
import { projects } from '@/lib/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="subtitle">Portfolio</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-filter">
        <button className="filter-btn active" data-filter="all">All</button>
        <button className="filter-btn" data-filter="web">Web Apps</button>
        <button className="filter-btn" data-filter="mobile">Mobile</button>
        <button className="filter-btn" data-filter="design">UI/UX</button>
      </div>

      <div className="project-grid" id="project-grid">
        <div className="project-card" data-category="web">
          <a href="project.html?id=analytics-dashboard&from=home" className="project-link-wrapper">
            <div className="project-content">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Analytics Dashboard" />
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>D3.js</span>
                </div>
                <h3>Analytics Dashboard</h3>
                <p>Real-time analytics dashboard with interactive data visualization.</p>
              </div>
            </div>
          </a>
        </div>

        <div className="project-card" data-category="mobile">
          <a href="project.html?id=food-delivery-app" className="project-link-wrapper">
            <div className="project-content">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                  alt="Food Delivery App" />
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span>Flutter</span>
                  <span>Firebase</span>
                  <span>Maps API</span>
                </div>
                <h3>Food Delivery App</h3>
                <p>Mobile app for food delivery with real-time tracking.</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="projects-cta">
        <a href="projects.html" className="view-all-btn">
          View All Projects
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;