export default function SectionTitle({ icon, subtitle, title, titleIcon, description, extraClass = '' }) {
  const headingText = title || subtitle;

  return (
    <div className={`section-title-container ${extraClass}`}>
      <h2 className="section-title shiny-3d-title">
        {icon && <i className={icon} style={{ marginRight: '0.5rem' }}></i>}
        {titleIcon && <span className="education-title-icon"><i className={titleIcon}></i></span>}
        {headingText}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
