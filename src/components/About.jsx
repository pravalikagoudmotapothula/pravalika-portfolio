import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Layers, 
  Cpu, 
  Lightbulb, 
  MessageSquare,
  Sparkles,
  Award
} from 'lucide-react';
import { personalInfo, stats, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Layers: Layers,
  Cpu: Cpu,
  Lightbulb: Lightbulb,
};

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Discover</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A little about my journey, passions, and core engineering focus.
          </p>
        </div>

        {/* Main Content Grid: Circular Image Left, Story & Highlights Right */}
        <div className="row align-items-center gy-5">
          {/* Left Column: Circular Profile Image with modern framing */}
          <motion.div 
            className="col-lg-5 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-visual-container">
              <div className="about-avatar-wrapper">
                {/* Decorative border rings */}
                <div className="about-ring-dashed" />
                <div className="about-avatar-circle">
                  <img
                    src={personalInfo.profileImage}
                    alt="Pravalika M - About Me"
                    className="about-avatar-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Status pill under image */}
              <div className="about-badge-card mt-4">
                <Award size={18} className="text-accent flex-shrink-0" />
                <div className="text-start">
                  <div className="fw-bold small text-primary-custom">B.E. Computer Science</div>
                  <div className="text-muted smaller">MLR Institute of Technology</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Pillars */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Introduction Paragraph from prompt */}
            <div className="glass-card p-4 p-md-5 mb-4">
              <h3 className="h4 fw-bold mb-3 text-primary-custom">
                Crafting Scalable Code & Intelligent Solutions
              </h3>
              <p className="about-story-text mb-4">
                {personalInfo.bio}
              </p>

              {/* 4 Core Pillars Grid */}
              <div className="row g-3">
                {aboutHighlights.map((highlight, index) => {
                  const IconComponent = iconMap[highlight.icon] || Sparkles;
                  return (
                    <div key={index} className="col-sm-6">
                      <div className="highlight-mini-card">
                        <div className="highlight-icon-box">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="highlight-title">{highlight.title}</h4>
                          <p className="highlight-desc">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connect Button */}
              <div className="mt-4 pt-3 border-top border-secondary-subtle d-flex flex-wrap align-items-center justify-content-between gap-3">
                <span className="text-muted small">
                  Ready to collaborate on innovative software solutions?
                </span>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="btn-primary-gradient"
                >
                  <MessageSquare size={16} />
                  <span>Let's Connect</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verifiable Statistics Row */}
        <div className="row g-3 mt-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className="col-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="glass-card stat-card text-center p-3 p-md-4">
                <div className="stat-number gradient-text">{item.value}</div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-subtext">{item.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-visual-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-ring-dashed {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px dashed var(--accent-secondary);
          opacity: 0.5;
        }

        .about-badge-card {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          box-shadow: var(--shadow-card);
        }

        .text-primary-custom {
          color: var(--text-primary);
        }

        .about-story-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
        }

        .highlight-mini-card {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: 0.75rem;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          height: 100%;
        }

        .highlight-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 0.5rem;
          background: var(--bg-card);
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .highlight-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .highlight-desc {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 0;
        }

        .stat-card {
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-number {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .stat-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .smaller {
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
}
