const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="subtitle">Contact</span>
        <h2>Let's Work Together</h2>
        <p className="section-desc">Have a project in mind? Let's talk about it.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-card-content">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>hello@yourname.com</p>
              <a href="mailto:hello@yourname.com" className="contact-link">Send Email</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-content">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>San Francisco, CA</p>
              <a href="#" className="contact-link">View on Map</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-content">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="contact-link">Call Now</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form id="contact-form" className="contact-form">
            <div className="form-header">
              <h3>Send Message</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Your Name</label>
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Your Email</label>
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input type="text" id="subject" required />
                <label htmlFor="subject">Subject</label>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <textarea id="message" required />
                <label htmlFor="message">Your Message</label>
                <i className="fas fa-comment-alt"></i>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;