const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-brand">
              <h3>Portfolio<span className="accent">.</span></h3>
              <p>Crafting digital experiences with clean and efficient code. Available for freelance
                opportunities.</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-icon" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:hello@yourname.com">hello@yourname.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <ul className="footer-legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;