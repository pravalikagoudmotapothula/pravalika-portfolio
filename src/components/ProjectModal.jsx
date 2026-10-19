import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal,
  Info
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="project-modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close button */}
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Details"
          >
            <X size={20} />
          </button>

          {/* Modal Header Image */}
          <div className="modal-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="modal-hero-image"
            />
            <div className="modal-image-overlay" />
            <div className="modal-badge-float">
              <span className="badge-chip">{project.badge}</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="modal-content-body p-4 p-md-5">
            {/* Title & Category */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <span className="text-accent fw-bold text-uppercase smaller tracking-wide">
                {project.category} Architecture
              </span>
              <span className="text-muted smaller">Status: {project.status}</span>
            </div>

            <h3 className="modal-project-title mb-3">{project.title}</h3>

            <p className="modal-project-desc mb-4">
              {project.shortDescription}
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-4">
              <h4 className="modal-subtitle mb-2">
                <Cpu size={16} className="text-accent" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="mb-4">
              <h4 className="modal-subtitle mb-2">
                <Layers size={16} className="text-accent" />
                <span>Key Engineering Highlights</span>
              </h4>
              <div className="d-flex flex-column gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-bullet">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="modal-arch-box p-3 rounded-3 mb-4">
              <div className="d-flex align-items-center gap-2 mb-1 fw-bold text-primary-custom smaller">
                <Terminal size={14} className="text-accent" />
                <span>System Architecture</span>
              </div>
              <p className="mb-0 text-muted smaller">{project.architecture}</p>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top border-secondary-subtle">
              <div className="d-flex align-items-center gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-custom py-2 px-3 smaller"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="text-muted smaller d-flex align-items-center gap-1">
                    <Info size={14} /> Repository available upon request
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-gradient py-2 px-3 smaller"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <button
                type="button"
                className="btn-outline-custom py-2 px-4 smaller"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .project-modal-dialog {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-card-solid);
          border: 1px solid var(--border-hover);
          border-radius: 1.25rem;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 40px var(--accent-glow);
          color: var(--text-primary);
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--accent-primary);
          transform: rotate(90deg);
        }

        .modal-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        @media (max-width: 576px) {
          .modal-image-wrapper {
            height: 200px;
          }
        }

        .modal-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .modal-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, var(--bg-card-solid) 100%);
        }

        .modal-badge-float {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          z-index: 2;
        }

        .badge-chip {
          padding: 0.35rem 0.85rem;
          background: var(--accent-gradient);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .modal-project-title {
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .modal-project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .modal-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .highlight-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-arch-box {
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
        }

        .tracking-wide {
          letter-spacing: 0.06em;
        }

        .smaller {
          font-size: 0.8rem;
        }
      `}</style>
    </AnimatePresence>
  );
}
