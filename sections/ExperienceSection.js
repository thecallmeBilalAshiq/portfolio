import ExperienceCard from '@/components/ExperienceCard';
import { experienceData } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title-container">
          <span className="section-subtitle">My Experience</span>
          <p className="section-description">My professional journey and work experience.</p>
        </div>

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
