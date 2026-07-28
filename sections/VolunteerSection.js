import SectionTitle from '@/components/SectionTitle';
import VolunteerCard from '@/components/VolunteerCard';
import { volunteerData } from '@/data/volunteer';

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="volunteer-section">
      <div className="container">
        <SectionTitle
          icon="fas fa-hands-helping"
          subtitle="06. Community & Leadership"
          title="Volunteer Experience"
        />

        <div className="volunteer-grid">
          {volunteerData.map((item, idx) => (
            <VolunteerCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
