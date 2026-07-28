import PhotoCarousel from '@/components/PhotoCarousel';
import TerminalWidget from '@/components/TerminalWidget';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="about-bg-orb about-bg-orb-1"></div>
      <div className="about-bg-orb about-bg-orb-2"></div>
      <div className="about-bg-orb about-bg-orb-3"></div>

      <div className="container">
        <div className="section-title-container" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="shiny-3d-title">About Me</h2>
          <p className="section-description">
            Here's a brief introduction about myself, my core profile, and specialized skill domains.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-container" data-aos="fade-right" data-aos-duration="1000">
            <div className="about-image-wrapper">
              <img
                src="https://avatars.githubusercontent.com/u/138978969"
                alt="Muhammad Bilal Ashiq"
                className="about-image"
              />
            </div>
          </div>

          <div className="about-content" data-aos="fade-left" data-aos-duration="1000">
            <div className="about-text-block">
              <div className="about-corner-tl"></div>
              <div className="about-corner-tr"></div>
              <div className="about-corner-bl"></div>
              <div className="about-corner-br"></div>
              <div className="about-scanline"></div>
              <span className="about-code-bracket">// core.profile</span>
              <span className="about-status-dot">System Online</span>
              <p className="about-text">
                I am a passionate <span className="about-highlight">software engineer</span> and{' '}
                <span className="about-highlight">researcher</span> with a deep focus on{' '}
                <span className="about-accent">Artificial Intelligence</span> and{' '}
                <span className="about-accent">Machine Learning</span>. Currently, I specialize in building
                intelligent, data-driven systems, training{' '}
                <span className="about-secondary">deep learning neural architectures</span>, and developing
                robust, full-scale software applications that solve complex, real-world problems.
              </p>
              <p className="about-text">
                With experience spanning from <span className="about-accent">AI/ML development</span>{' '}
                (including <span className="about-highlight">RAG diagnostics</span> and{' '}
                <span className="about-highlight">transformer chatbots</span>) to core{' '}
                <span className="about-secondary">software engineering</span>, I combine solid system design
                practices with cutting-edge academic AI research. I am dedicated to writing{' '}
                <span className="about-accent">clean, high-performance</span>, and maintainable code that
                bridges the gap between state-of-the-art AI models and user-centric applications.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Carousel */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <PhotoCarousel />
        </div>

        {/* Interactive AI Core Terminal */}
        <div data-aos="zoom-in" data-aos-duration="1000">
          <TerminalWidget />
        </div>

        {/* About Cards Grid */}
        <div className="about-cards">
          <div className="about-card" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
            <div className="about-card-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h4 className="about-card-title">Artificial Intelligence</h4>
            <p className="about-card-text">Designing deep learning models, transformers, and NLP pipelines</p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
            <div className="about-card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h4 className="about-card-title">Machine Learning</h4>
            <p className="about-card-text">Building data pipelines, model training, and analytical reasoning</p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
            <div className="about-card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h4 className="about-card-title">Software Development</h4>
            <p className="about-card-text">End-to-end full-stack architectures and clean software systems</p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
            <div className="about-card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4 className="about-card-title">Problem Solving</h4>
            <p className="about-card-text">Formulating elegant solutions to high-complexity technical problems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
