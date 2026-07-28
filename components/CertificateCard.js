export default function CertificateCard({ cert }) {
  return (
    <div className="certificate-card">
      <div className="certificate-card-inner">
        <div className="cert-header">
          <div className="cert-logo-wrap">
            <i className={cert.icon} style={{ color: cert.iconColor }}></i>
          </div>
          <div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-issuer">
              <i className={cert.icon}></i> {cert.issuer}
            </p>
          </div>
        </div>
        <p className="certificate-date">
          <i className="fas fa-calendar-alt"></i> {cert.date}
        </p>
        <p className="certificate-details">{cert.details}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <i className="fas fa-award"></i> {cert.linkLabel || 'View Credential'}
        </a>
      </div>
    </div>
  );
}
