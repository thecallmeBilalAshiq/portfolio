export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">
              Bilal<span className="text-gradient">Ashiq</span>
            </div>
            <p className="footer-description">
              Software Developer | Full Stack Engineer | Problem Solver | Passionate about creating elegant
              solutions to complex problems
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/thecallmeBilalAshiq"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-ashiq/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://medium.com/@metheBilalAshiq"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-medium-m"></i>
              </a>
              <a
                href="https://www.youtube.com/@bilalhonyaar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">
                <i className="fas fa-chevron-right"></i> Home
              </a>
              <a href="#about" className="footer-link">
                <i className="fas fa-chevron-right"></i> About
              </a>
              <a href="#education" className="footer-link">
                <i className="fas fa-chevron-right"></i> Education
              </a>
              <a href="#experience" className="footer-link">
                <i className="fas fa-chevron-right"></i> Experience
              </a>
              <a href="#projects" className="footer-link">
                <i className="fas fa-chevron-right"></i> Projects
              </a>
              <a href="#contact" className="footer-link">
                <i className="fas fa-chevron-right"></i> Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-links">
              <a href="mailto:methebilalashiq@gmail.com" className="footer-link">
                <i className="fas fa-envelope"></i> methebilalashiq@gmail.com
              </a>
              <a href="tel:+923088660209" className="footer-link">
                <i className="fas fa-phone"></i> +92 308 866 0209
              </a>
              <a href="#" className="footer-link">
                <i className="fas fa-map-marker-alt"></i> Faisalabad, Pakistan
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; <span>{new Date().getFullYear()}</span> Muhammad Bilal Ashiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
