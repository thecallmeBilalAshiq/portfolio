export default function AwardCard({ award }) {
  return (
    <div className="award-card">
      <div className="award-card-inner">
        <span className="award-badge">{award.badge}</span>
        <div className="award-top-row">
          <div className="award-logo-wrap">
            {award.logo ? (
              <img src={award.logo} alt={`${award.org} Logo`} />
            ) : (
              <i className={award.logoIcon} style={{ color: award.logoColor }}></i>
            )}
          </div>
          <div className="award-icon-box">
            <i className={award.icon} style={{ color: award.iconColor }}></i>
          </div>
        </div>
        <div className="award-content">
          <h3 className="award-title">{award.title}</h3>
          <p className="award-org">
            <i className="fas fa-university"></i> {award.org}
          </p>
          <p className="award-description">{award.description}</p>
        </div>
      </div>
    </div>
  );
}
