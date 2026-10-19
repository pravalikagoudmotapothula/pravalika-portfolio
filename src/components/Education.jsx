import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Formal qualifications and foundational training in Computer Science, software engineering, and analytical sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container mx-auto">
          {/* Vertical central spine line */}
          <div className="timeline-spine" aria-hidden="true" />

          {educationTimeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`timeline-entry ${isEven ? 'left-entry' : 'right-entry'}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Central Glowing Marker Node */}
                <div className="timeline-marker">
                  <div className="marker-inner">
                    <GraduationCap size={16} />
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card-wrapper">
                  <div className="glass-card timeline-card p-4 p-md-4">
                    {/* Top Row: Degree & Period */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                      <span className="timeline-score-badge">
                        <Award size={13} />
                        <span>{item.score}</span>
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="timeline-degree mb-1">
                      {item.degree}
                    </h3>

                    {/* Institution & Location */}
                    <div className="d-flex flex-wrap align-items-center gap-3 mb-3 text-muted smaller">
                      <span className="fw-semibold text-accent">{item.institution}</span>
                      <span className="d-flex align-items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </span>
                      <span className="badge rounded-pill bg-success-subtle text-success border border-success-subtle">
                        {item.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="timeline-desc mb-3">
                      {item.description}
                    </p>

                    {/* Coursework / Focus pills */}
                    <div className="timeline-courses">
                      <span className="smaller text-muted fw-bold d-block mb-1">Key Focus Areas:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {item.courses.map((course, cIdx) => (
                          <span key={cIdx} className="course-pill">
                            <CheckCircle2 size={11} className="text-accent flex-shrink-0" />
                            <span>{course}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 900px;
          padding: 2rem 0;
        }

        .timeline-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--border-subtle) 100%);
          transform: translateX(-50%);
          border-radius: 9999px;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .timeline-spine {
            left: 20px;
          }
        }

        .timeline-entry {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 3.5rem;
          width: 100%;
        }

        .timeline-entry:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translate(-50%, 0);
          z-index: 3;
        }

        @media (max-width: 768px) {
          .timeline-marker {
            left: 20px;
          }
        }

        .marker-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-card-solid);
          border: 3px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 20px var(--accent-glow-strong);
          transition: transform 0.3s ease;
        }

        .timeline-entry:hover .marker-inner {
          transform: scale(1.15);
          background: var(--accent-gradient);
          color: #ffffff;
        }

        .timeline-card-wrapper {
          width: calc(50% - 40px);
        }

        .left-entry .timeline-card-wrapper {
          margin-right: auto;
        }

        .right-entry .timeline-card-wrapper {
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .timeline-card-wrapper {
            width: calc(100% - 50px);
            margin-left: 50px !important;
          }
        }

        .timeline-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
        }

        .timeline-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-primary);
        }

        .timeline-score-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #22c55e;
        }

        .timeline-degree {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .timeline-desc {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .course-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.5rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 0.375rem;
          font-size: 0.725rem;
          color: var(--text-secondary);
        }

        .smaller {
          font-size: 0.775rem;
        }
      `}</style>
    </section>
  );
}
