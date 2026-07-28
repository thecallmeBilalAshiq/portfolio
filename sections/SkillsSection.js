import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionTitle
          icon="fas fa-layer-group"
          subtitle="05. Tech Stack"
          title="Technical Skills & Proficiencies"
        />

        <div className="skills-3d-grid">
          {skillsData.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
