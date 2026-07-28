export default function VolunteerCard({ item }) {
  return (
    <div className="volunteer-card">
      <div className="volunteer-card-inner">
        <div className="volunteer-header">
          <div className="volunteer-title-area">
            <div className="volunteer-logo-wrap">
              <img src={item.logo} alt={`${item.organization} logo`} />
            </div>
            <div>
              <h3 className="volunteer-role">{item.role}</h3>
              <p className="volunteer-organization">{item.organization}</p>
            </div>
          </div>
          <span className="volunteer-date">
            <i className="fas fa-calendar-alt"></i> {item.date}
          </span>
        </div>
        <p className="volunteer-description">{item.description}</p>
      </div>
    </div>
  );
}
