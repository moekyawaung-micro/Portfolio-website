import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/shared/ProjectCard";
import Reveal from "../components/shared/Reveal";

const categories = ["All", "Productivity", "API", "Developer Tools", "Architecture"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const normalizedQuery = query.trim().toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.subtitle.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.tech.some((item) => item.toLowerCase().includes(normalizedQuery)) ||
        project.highlights.some((item) => item.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <h1>Projects</h1>
          <p className="section-intro">
            A broader collection of Android applications and engineering-focused
            projects demonstrating architecture, UI design, API integration,
            local persistence, and production-oriented mobile development.
          </p>
        </Reveal>

        <Reveal className="projects-toolbar">
          <input
            type="text"
            className="project-search"
            placeholder="Search by title, tech, or feature..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className="filter-group">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-chip ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Reveal>
            <p className="empty-state">No projects match your search or selected filter.</p>
          </Reveal>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
