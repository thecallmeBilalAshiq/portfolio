import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import { experienceData } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          icon="fas fa-briefcase"
          title="Work Experience"
          description="A detailed timeline of my software engineering roles, internships, machine learning research, and industry contributions."
        />

        <div className="experience-section-wrapper">
          <div className="experience-container">
            {experienceData.map((item, idx) => (
              <ExperienceCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
