function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && (
        <div className="project-image-wrapper">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      )}

      <p className="project-subtitle">{project.subtitle}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p className="project-architecture">
        <strong>Architecture:</strong> {project.architecture}
      </p>

      <div className="tech-list">
        {project.tech.map((item) => (
          <span className="tech-badge" key={item}>
            {item}
          </span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-secondary">
          Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
