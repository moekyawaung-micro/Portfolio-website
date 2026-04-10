import { projects } from "../../data/projects";
import ProjectCard from "../shared/ProjectCard";
import Reveal from "../shared/Reveal";

function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2>Featured Projects</h2>
          <p className="section-intro">
            A selection of Android applications and engineering-focused side projects
            demonstrating modern Android development, scalable architecture, and
            production-oriented implementation.
          </p>
        </Reveal>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
