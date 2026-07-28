import Navbar from '@/components/Navbar';
import AboutSection from '@/sections/AboutSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'About Me | Muhammad Bilal Ashiq',
  description: 'Detailed introduction, career objective, research journey, mission, vision, and leadership roles of Muhammad Bilal Ashiq.'
};

export default function AboutPage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <AboutSection />

      <section className="section" style={{ background: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <SectionTitle
            icon="fas fa-compass"
            subtitle="Mission & Vision"
            title="Career Purpose & Strategic Goals"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Career Objective
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                To leverage state-of-the-art AI architectures, large language model diagnostics, and robust backend engineering to build intelligent software platforms that solve critical enterprise challenges.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-rocket"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Our Mission
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Bridging the gap between cutting-edge academic artificial intelligence research and user-centric software applications through clean code, scalable system design, and rigorous performance testing.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Future Vision
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Pioneering autonomous AI agents and multimodal systems that enhance human productivity, improve healthcare diagnostic accuracy, and democratize access to high-tier educational tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
