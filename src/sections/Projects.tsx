import { projects } from '../data/portfolio';
import type { HoverHandlers, Project } from '../types/portfolio';

interface ProjectCardProps extends HoverHandlers {
  project: Project;
}

function ProjectCard({ project, onEnter, onLeave }: ProjectCardProps) {
  return (
    <a
      className={`project-card reveal ${project.featured ? 'featured' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {project.featured ? (
        <>
          <div className="project-content">
            <ProjectMeta project={project} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectStack stack={project.stack} />
          </div>
          <div className="project-visual">
            <div className="project-visual-bars">
              {project.bars?.map((bar, index) => (
                <div
                  key={index}
                  className="vis-bar"
                  style={{
                    height: bar.height + 'px',
                    animationDelay: bar.delay + 's',
                  }}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-num">{project.id}</div>
          <ProjectMeta project={project} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ProjectStack stack={project.stack} />
        </>
      )}
    </a>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="project-meta">
      <span className="project-year">{project.year}</span>
      <span className="project-type">{project.type}</span>
    </div>
  );
}

function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <div className="project-stack">
      {stack.map((tech) => (
        <span key={tech} className="tag">
          {tech}
        </span>
      ))}
    </div>
  );
}

export function Projects({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="projects" className="section border-t border-[#222]">
      <div className="container">
        <div className="section-label">
          <span>03</span> Projects
        </div>
        <div style={{ marginBottom: '48px' }} className="reveal">
          <h2>
            Selected
            <br />
            <em>contributions.</em>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEnter={onEnter}
              onLeave={onLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
