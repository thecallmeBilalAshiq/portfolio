import EducationCard from '@/components/EducationCard';
import { educationData } from '@/data/education';

export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-title-container education-title-container" data-aos="fade-up" data-aos-duration="900" style={{ textAlign: 'center' }}>
          <h2 className="section-title shiny-3d-title">
            <i className="fas fa-graduation-cap" style={{ marginRight: '0.5rem' }}></i>
            Academic Timeline & Education
          </h2>
          <p className="section-description">
            A visual timeline of the institutions, foundations, and milestones that shaped my engineering journey.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
