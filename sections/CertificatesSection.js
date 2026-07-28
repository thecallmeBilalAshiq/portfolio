export default function CertificatesSection() {
  return (
    <section id="certificates" className="section section-bg-muted">
      <div className="container">
        <div className="section-title-container" data-aos="fade-up">
          <h2 className="section-title shiny-3d-title">Certifications & Awards</h2>
          <p className="section-description">
            Professional credentials, honors, and competitive achievements demonstrating specialized skills.
          </p>
        </div>

        <div className="certs-awards-grid">
          {/* Column 1: Professional Certifications */}
          <div className="certs-column" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="subsection-title">
              <i className="fas fa-certificate" style={{ color: '#6c63ff', marginRight: '0.5rem' }}></i>
              Professional Certifications
            </h3>
            <div className="certificates-grid">
              {/* PSEB Verified Freelancer */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fas fa-building-columns" style={{ color: '#008080' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">Verified Freelancer</h3>
                      <p className="certificate-issuer">
                        <i className="fas fa-award"></i> Pakistan Software Export Board - PSEB
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> June 2026
                  </p>
                  <p className="certificate-details">
                    Verified Freelancer certified by Pakistan Software Export Board, demonstrating professional freelancing skills and industry credibility.
                  </p>
                  <a
                    href="https://portal.techdestination.com/verify-certificate/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpc3RyYXRpb25ObyI6IkZMMjEvUFNFQi8yMDI2LzI2NTA3IiwidHlwZSI6ImZyZWVsYW5jZXIiLCJpYXQiOjE3ODA5MjUzOTIsImV4cCI6MTc4ODcwMTM5Mn0.DSxDz-VLDeXQxf40NXR--490ogp3YpOj8cfloqj39kM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-award"></i> View Credential
                  </a>
                </div>
              </div>

              {/* Git & GitHub - Google */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fab fa-google" style={{ color: '#4285F4' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">Git & GitHub</h3>
                      <p className="certificate-issuer">
                        <i className="fab fa-google"></i> Google & Coursera
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </p>
                  <p className="certificate-details">
                    Certified in advanced version control, repository management, branch merging workflows, and standard team collaboration practices.
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/DZ8JGT5UQ7Y3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-external-link-alt"></i> View Credential
                  </a>
                </div>
              </div>

              {/* Deep Learning Specialization - Udemy */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fas fa-graduation-cap" style={{ color: '#A435F0' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">Deep Learning Specialization</h3>
                      <p className="certificate-issuer">
                        <i className="fas fa-university"></i> Udemy
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </p>
                  <p className="certificate-details">
                    Deep-dive training in Neural Networks, Backpropagation optimization, CNNs for computer vision, and LSTM/RNN architectures.
                  </p>
                  <a
                    href="https://www.udemy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-external-link-alt"></i> View Credential
                  </a>
                </div>
              </div>

              {/* Python and Flask - Udemy */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fab fa-python" style={{ color: '#3776AB' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">Python and Flask</h3>
                      <p className="certificate-issuer">
                        <i className="fab fa-python"></i> Udemy
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </p>
                  <p className="certificate-details">
                    Mastered full-stack development using Flask, SQL/SQLAlchemy database models, RESTful API design, and user authentication.
                  </p>
                  <a
                    href="https://www.udemy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-external-link-alt"></i> View Credential
                  </a>
                </div>
              </div>

              {/* Machine Learning Foundations - AWS */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fab fa-aws" style={{ color: '#FF9900' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">Machine Learning Foundations</h3>
                      <p className="certificate-issuer">
                        <i className="fab fa-aws"></i> Amazon Web Services (AWS)
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> April 2025
                  </p>
                  <p className="certificate-details">
                    Explored core ML models, math fundamentals, feature engineering, and cloud deployment pipelines utilizing Amazon SageMaker.
                  </p>
                  <a
                    href="https://www.credly.com/badges/222b7f9e-bf43-4bb8-9113-3adc35b40a18/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-external-link-alt"></i> View Credential
                  </a>
                </div>
              </div>

              {/* WordPress - Digiskills */}
              <div className="certificate-card">
                <div className="certificate-card-inner">
                  <div className="cert-header">
                    <div className="cert-logo-wrap">
                      <i className="fab fa-wordpress" style={{ color: '#21759B' }}></i>
                    </div>
                    <div>
                      <h3 className="certificate-title">WordPress Website Development</h3>
                      <p className="certificate-issuer">
                        <i className="fab fa-wordpress"></i> Digiskills
                      </p>
                    </div>
                  </div>
                  <p className="certificate-date">
                    <i className="fas fa-calendar-alt"></i> December 2023
                  </p>
                  <p className="certificate-details">
                    3-month extensive program focusing on custom themes, page builders, WooCommerce setups, and SEO optimization.
                  </p>
                  <a
                    href="https://digiskills.pk/verify/WJ3GT9MK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <i className="fas fa-external-link-alt"></i> View Credential
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Awards & Competition Honors */}
          <div className="awards-column" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="subsection-title">
              <i className="fas fa-trophy" style={{ color: '#ffd700', marginRight: '0.5rem' }}></i>
              Awards & Competition Honors
            </h3>
            <div className="awards-list">
              {/* NeuroSecure Winner */}
              <div className="award-card">
                <div className="award-card-inner">
                  <span className="award-badge">Winner</span>
                  <div className="award-top-row">
                    <div className="award-logo-wrap">
                      <img src="/logos/fast_logo.png" alt="FAST-NUCES Logo" />
                    </div>
                    <div className="award-icon-box">
                      <i className="fas fa-trophy" style={{ color: '#ffd700' }}></i>
                    </div>
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">1st Position - Idea Competition</h3>
                    <p className="award-org">
                      <i className="fas fa-university"></i> FAST-NUCES
                    </p>
                    <p className="award-description">
                      Secured first place for presenting and pitching "NeuroSecure" — a real-time AI privacy system leveraging OpenCV, YOLO, and MediaPipe to block shoulder-surfing threats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dean List of Honors */}
              <div className="award-card">
                <div className="award-card-inner">
                  <span className="award-badge">Dean List of Honors</span>
                  <div className="award-top-row">
                    <div className="award-logo-wrap">
                      <img src="/logos/fast_logo.png" alt="FAST-NUCES Logo" />
                    </div>
                    <div className="award-icon-box">
                      <i className="fas fa-medal" style={{ color: '#43cea2' }}></i>
                    </div>
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">Dean List of Honors</h3>
                    <p className="award-org">
                      <i className="fas fa-laptop-code"></i> FAST-NUCES
                    </p>
                    <p className="award-description">
                      Got a CGPA of 3.6+ in my last semester, consistently ranking among the top students in my class.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vine-a-thon */}
              <div className="award-card">
                <div className="award-card-inner">
                  <span className="award-badge">3rd Place</span>
                  <div className="award-top-row">
                    <div className="award-logo-wrap">
                      <i className="fab fa-google" style={{ color: '#4285F4' }}></i>
                    </div>
                    <div className="award-icon-box">
                      <i className="fas fa-award" style={{ color: '#ff8c00' }}></i>
                    </div>
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">3rd Position - Vine-a-thon Hackathon</h3>
                    <p className="award-org">
                      <i className="fab fa-google"></i> Google Developers Group (GDG)
                    </p>
                    <p className="award-description">
                      Ranked third place in the Google Developer Students Competition for rapid prototype design and software engineering innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* ICPC 2026 */}
              <div className="award-card">
                <div className="award-card-inner">
                  <span className="award-badge">Round II</span>
                  <div className="award-top-row">
                    <div className="award-logo-wrap">
                      <i className="fas fa-trophy" style={{ color: '#FFD700' }}></i>
                    </div>
                    <div className="award-icon-box">
                      <i className="fas fa-code"></i>
                    </div>
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">Round II Qualifier - ICPC 2026</h3>
                    <p className="award-org">
                      <i className="fas fa-trophy"></i> International Collegiate Programming Contest
                    </p>
                    <p className="award-description">
                      Successfully advanced to the second regional round of the prestigious global algorithmic problem-solving competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
