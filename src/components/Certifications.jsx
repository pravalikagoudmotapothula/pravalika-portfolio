import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Code, 
  Brain, 
  Trophy, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Code: Code,
  Brain: Brain,
  Trophy: Trophy,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <Award size={14} />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Formal coursework completions and competitive hackathon achievements across full-stack engineering and machine learning.
          </p>
        </div>

        {/* 2x2 Grid of Certification Cards */}
        <div className="row g-4">
          {certifications.map((item, index) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                className="col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card cert-card h-100 p-4 d-flex flex-column">
                  {/* Top Header Row */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="cert-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="cert-badge">
                      <ShieldCheck size={13} className="text-accent" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Category */}
                  <span className="smaller text-accent fw-bold text-uppercase tracking-wider mb-1">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="cert-title mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="cert-desc mb-4 flex-grow-1">
                    {item.description}
                  </p>

                  {/* Key Competencies Covered */}
                  <div className="pt-3 border-top border-secondary-subtle">
                    <span className="smaller text-muted fw-bold d-block mb-2">
                      Core Topics Covered:
                    </span>
                    <div className="d-flex flex-wrap gap-1">
                      {item.keySkills.map((skill, sIdx) => (
                        <span key={sIdx} className="cert-skill-pill">
                          <CheckCircle2 size={11} className="text-accent flex-shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cert-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
        }

        .cert-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          background: var(--badge-bg);
          color: var(--accent-primary);
          border: 1px solid var(--badge-border);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .cert-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .cert-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.6rem;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          border-radius: 9999px;
          font-size: 0.75rem;
          color: var(--badge-text);
        }

        .tracking-wider {
          letter-spacing: 0.06em;
        }

        .smaller {
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
}
