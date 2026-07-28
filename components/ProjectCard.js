import Link from 'next/link';

export default function ProjectCard({ project }) {
  const links = project.links || [
    ...(project.demoUrl ? [{ label: 'Demo', url: project.demoUrl, icon: 'fas fa-external-link-alt' }] : []),
    ...(project.githubUrl ? [{ label: 'GitHub', url: project.githubUrl, icon: 'fab fa-github' }] : [])
  ];

  return (
    <div className="project-card" data-category={(project.categories || []).join(' ')}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {(project.tags || []).map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <Link
            href={`/projects/${project.id}`}
            className="project-link"
            style={{ background: 'var(--primary)', color: '#ffffff', border: 'none' }}
          >
            <i className="fas fa-info-circle"></i> Details
          </Link>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className={link.icon}></i> {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
