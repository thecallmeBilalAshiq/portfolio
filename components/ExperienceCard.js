export default function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <div className="experience-card-inner">
        <div className="experience-header">
          <div className="experience-logo">
            <img src={item.logo} alt={`${item.company} Logo`} />
          </div>
          <div className="experience-header-text">
            <h3 className="experience-company">{item.company}</h3>
            <span className="experience-date">
              <i className="fas fa-calendar-alt"></i> {item.date}
            </span>
          </div>
        </div>
        <p className="experience-position">{item.position}</p>
        <div className="experience-divider"></div>
        <ul className="experience-responsibilities">
          {item.responsibilities.map((resp, idx) => (
            <li key={idx} className="experience-responsibility">
              <i className="fas fa-circle"></i>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
