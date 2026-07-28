import Navbar from '@/components/Navbar';
import EducationSection from '@/sections/EducationSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Education & Academics | Muhammad Bilal Ashiq',
  description: 'Academic background, university degrees, teaching assistantships, and research achievements of Muhammad Bilal Ashiq.'
};

export default function EducationPage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <EducationSection />

      {/* TA & Research Breakdown */}
      <section className="section" style={{ background: '#ffffff', padding: '4rem 0' }}>
        <div className="container">
          <SectionTitle
            icon="fas fa-atom"
            subtitle="Academic Excellence"
            title="Teaching Assistantships & Research"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* TA Card */}
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Teaching Assistant (TA)
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>FAST NUCES (2023 - 2026)</span>
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Assisted faculty in conducting lab sessions, grading coursework, and mentoring students across 7 core computer science and mathematical subjects:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Information Security', 'Automata Theory', 'Numerical Computing', 'Linear Algebra', 'Calculus', 'Business Math'].map((course, idx) => (
                  <span key={idx} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.25rem 0.65rem', borderRadius: '6px', fontSize: '0.8rem', color: '#334155' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Research Card */}
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  <i className="fas fa-microscope"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Research Assistant (RA)
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>FAST NUCES Research Lab</span>
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Engineered ML data pipelines for processing LIGO/Virgo gravitational-wave datasets using Python, PyTorch, and TensorFlow for signal classification and anomaly detection.
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
