import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Sparkles, 
  Database, 
  Terminal, 
  BrainCircuit, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Sparkles: Sparkles,
  Database: Database,
  Terminal: Terminal,
  BrainCircuit: BrainCircuit,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & Cloud' },
    { id: 'concepts', label: 'Core Concepts' },
  ];

  const displayedCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, modern frameworks, machine learning tooling, and software engineering principles.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`skill-filter-btn ${isActive ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="row g-4">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, catIdx) => {
              const IconComp = categoryIcons[category.icon] || Code2;
              return (
                <motion.div
                  key={category.id}
                  className="col-md-6 col-lg-4"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: catIdx * 0.05 }}
                >
                  <div className="glass-card skill-category-card h-100 p-4">
                    {/* Header of category */}
                    <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-secondary-subtle">
                      <div className="skill-cat-icon-box">
                        <IconComp size={22} />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-0 text-primary-custom">{category.title}</h3>
                        <span className="smaller text-muted">{category.skills.length} competencies</span>
                      </div>
                    </div>

                    {/* Skill Badges List */}
                    <div className="d-flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="skill-pill-item">
                          <CheckCircle2 size={13} className="text-accent flex-shrink-0" />
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level-tag">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Verification Note */}
        <div className="text-center mt-4">
          <p className="text-muted smaller mb-0">
            * All competencies represent hands-on project implementations and formal academic/coursework curricula.
          </p>
        </div>
      </div>

      <style>{`
        .skill-filter-btn {
          padding: 0.45rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 9999px;
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .skill-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .skill-filter-btn.active {
          background: var(--accent-gradient);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .skill-category-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-4px);
        }

        .skill-cat-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 0.75rem;
          background: var(--badge-bg);
          color: var(--accent-primary);
          border: 1px solid var(--badge-border);
        }

        .skill-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }

        .skill-pill-item:hover {
          background: var(--badge-bg);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-level-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
          border-left: 1px solid var(--border-subtle);
          padding-left: 0.4rem;
          margin-left: 0.1rem;
        }

        .text-primary-custom {
          color: var(--text-primary);
        }

        .smaller {
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
}
