export default function SkillCard({ category }) {
  return (
    <div className={`skill-3d-card ${category.featured ? 'featured-ai-card' : ''}`}>
      <div className="skill-3d-card-inner">
        <div className="skill-card-header">
          <div className={`skill-card-icon-wrap ${category.accentClass}`}>
            <i className={category.icon}></i>
          </div>
          <h4>{category.category}</h4>
        </div>
        <div className="skill-badges-wrapper">
          {category.skills.map((skill, idx) => (
            <div key={idx} className="skill-pill">
              <i
                className={skill.icon}
                style={{
                  color: skill.color,
                  backgroundColor: skill.bg || 'transparent',
                  padding: skill.bg ? '1px 3px' : '0',
                  borderRadius: skill.bg ? '3px' : '0'
                }}
              ></i>{' '}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
