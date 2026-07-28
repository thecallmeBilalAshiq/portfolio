export default function EducationCard({ edu }) {
  return (
    <article className="education-card">
      <div className="education-card-surface">
        <div className="education-card-header">
          <div className="education-identity">
            <div className="education-logo-wrap">
              <img src={edu.institutionLogo} alt={`${edu.degree} logo`} />
            </div>
            <div className="education-heading-group">
              <span className="education-level">{edu.period}</span>
              <h3>{edu.degree}</h3>
              <p>{edu.title}</p>
            </div>
          </div>
          <span className="education-chip">
            <i className="fas fa-location-dot"></i> {edu.chip}
          </span>
        </div>

        <div className="education-visual">
          <div className="education-thumb">
            <img src={edu.campusImage} alt={`${edu.degree} campus`} loading="lazy" />
            <div className="education-thumb-overlay"></div>
          </div>
          <div className="education-visual-copy">
            <p className="education-institution">{edu.institutionName}</p>
            <p className="education-summary">{edu.summary}</p>
          </div>
        </div>

        <div className="education-meta-grid">
          {edu.metas.map((meta, idx) => (
            <div key={idx} className="education-meta">
              <span className="education-meta-label">{meta.label}</span>
              <span className="education-meta-value">{meta.value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
