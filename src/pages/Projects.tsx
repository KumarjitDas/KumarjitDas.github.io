import { Link } from "react-router-dom";
import { projectList } from "../data/projects";

function Projects() {
  return (
    <div className="page-content">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've been working on.</p>
      <div className="project-list">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <Link to={`/projects/${project.id}`} className="button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
