import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Eye 
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Endeavors</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack web platforms, computer vision systems, and conversational AI solutions engineered with modern software design principles.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-lg-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="glass-card project-card h-100 d-flex flex-column"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image preview with hover zoom */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-image-gradient" />
                  
                  {/* Floating badge */}
                  <div className="project-card-badge">
                    <span>{project.badge}</span>
                  </div>

                  {/* Hover action overlay */}
                  <div className="project-hover-overlay">
                    <span className="btn-quick-view">
                      <Eye size={16} />
                      <span>View Project Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  {/* Category & Status */}
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-accent smaller fw-bold text-uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="project-status-dot">
                      <span className="dot" />
                      <span className="smaller text-muted">{project.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="project-title mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="project-desc mb-4 flex-grow-1">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary-subtle">
                    <button
                      type="button"
                      className="btn-details-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <div className="d-flex align-items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          onClick={(e) => e.stopPropagation()}
                          title="View Source on GitHub"
                          aria-label="View Source on GitHub"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Open Live Application"
                          aria-label="Open Live Application"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .project-card {
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.35s ease, 
                      border-color 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        @media (max-width: 576px) {
          .project-image-container {
            height: 190px;
          }
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        .project-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, var(--bg-card) 100%);
        }

        .project-card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.75rem;
          background: rgba(10, 11, 22, 0.82);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          border-radius: 9999px;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          z-index: 2;
        }

        .project-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .project-card:hover .project-hover-overlay {
          opacity: 1;
        }

        .btn-quick-view {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: var(--accent-gradient);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 9999px;
          box-shadow: 0 4px 20px var(--accent-glow);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .project-card:hover .btn-quick-view {
          transform: translateY(0);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          transition: color 0.2s ease;
        }

        .project-card:hover .project-title {
          color: var(--accent-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.925rem;
          line-height: 1.6;
        }

        .project-status-dot {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .project-status-dot .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        .btn-details-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent-primary);
          transition: gap 0.2s ease;
        }

        .btn-details-link:hover {
          gap: 0.55rem;
        }

        .project-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .project-icon-link:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 12px var(--accent-glow);
          transform: translateY(-2px);
        }

        .tracking-wider {
          letter-spacing: 0.07em;
        }
      `}</style>
    </section>
  );
}
