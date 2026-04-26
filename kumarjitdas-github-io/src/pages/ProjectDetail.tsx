import { Link, Navigate, useParams } from "react-router-dom";
import { projectList } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectList.find((p) => p.id === projectId);

  if (!project) {
    // If the project ID in the URL is not found, redirect to the projects page.
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="page-content">
      <Link to="/projects" className="back-link">
        &larr; Back to Projects
      </Link>
      <h2>{project.name}</h2>
      <p>{project.description}</p>

      {project.longDescription && (
        <div className="project-long-description">
          <pre>{project.longDescription}</pre>
        </div>
      )}

      <div className="project-links">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
