import Navbar from '@/components/Navbar';
import SkillsSection from '@/sections/SkillsSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Skills & Tech Stack | Muhammad Bilal Ashiq',
  description: 'Technical skills, AI/ML tools, programming languages, databases, and software engineering proficiencies of Muhammad Bilal Ashiq.'
};

export default function SkillsPage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <SkillsSection />

      {/* Soft Skills Section */}
      <section className="section" style={{ background: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <SectionTitle
            icon="fas fa-users-cog"
            subtitle="Soft Skills"
            title="Professional Leadership & Soft Skills"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: 'fas fa-brain', title: 'Problem Solving', desc: 'Formulating efficient algorithmic strategies for complex problems.' },
              { icon: 'fas fa-users', title: 'Team Leadership', desc: 'Directing development teams, managing student societies, and mentoring.' },
              { icon: 'fas fa-comments', title: 'Technical Communication', desc: 'Translating deep AI concepts into clear executive presentations.' },
              { icon: 'fas fa-clock', title: 'Project Management', desc: 'Prioritizing deliverables, agile sprints, and operational efficiency.' }
            ].map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ fontSize: '1.5rem', color: '#6366f1', marginBottom: '0.75rem' }}>
                  <i className={skill.icon}></i>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  {skill.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
