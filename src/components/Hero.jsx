import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles,
  Code,
  Atom,
  Cpu,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  // Cycling animated subtitle
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      {/* Decorative ambient background blur orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container position-relative z-2">
        <div className="row align-items-center gy-5 gy-lg-0 min-vh-hero">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div 
            className="col-lg-7 col-xl-7 order-2 order-lg-1 text-center text-lg-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Status Badge */}
            <motion.div 
              className="section-badge mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="pulse-indicator" />
              <span>{personalInfo.role}</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Cycling Animated Subtitle */}
            <div className="hero-subtitle-container my-3">
              <span className="hero-subtitle-prefix">Specialized in </span>
              <div className="hero-subtitle-flip">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={subtitleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="gradient-text-alt font-mono fw-bold"
                  >
                    {personalInfo.subtitles[subtitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="hero-bio mb-4">
              Computer Science student building scalable web architectures, deep learning computer vision systems, and intuitive user experiences. Transforming complex challenges into elegant, high-performance software.
            </p>

            {/* Availability Indicator */}
            <div className="availability-box mb-4">
              <Sparkles size={16} className="text-accent flex-shrink-0" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* CTAs and Social Links */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
              <button 
                type="button" 
                onClick={scrollToProjects}
                className="btn-primary-gradient"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href={personalInfo.resumeUrl} 
                download="Pravalika_M_Resume.pdf"
                className="btn-outline-custom"
                id="hero-download-resume-btn"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social links */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 pt-2">
              <span className="text-muted small fw-semibold">Connect with me:</span>
              <div className="d-flex align-items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon-btn"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Image with Glowing Rings & Badges */}
          <motion.div 
            className="col-lg-5 col-xl-5 order-1 order-lg-2 text-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-avatar-wrapper">
              {/* Outer soft ambient glow */}
              <div className="hero-avatar-glow" aria-hidden="true" />

              {/* Rotating outer dashed ring */}
              <div className="hero-avatar-ring" aria-hidden="true" />

              {/* Main Circular Profile Image Container */}
              <div className="hero-avatar-circle">
                <img 
                  src={personalInfo.profileImage} 
                  alt="Pravalika M - Software Developer" 
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>

              {/* Floating Technology Badges */}
              {/* 1: Java */}
              <motion.div 
                className="floating-badge floating-badge-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Code size={16} className="text-warning" />
                <span>Java</span>
              </motion.div>

              {/* 2: React */}
              <motion.div 
                className="floating-badge floating-badge-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Atom size={16} className="text-info" />
                <span>React.js</span>
              </motion.div>

              {/* 3: Python */}
              <motion.div 
                className="floating-badge floating-badge-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Terminal size={16} className="text-success" />
                <span>Python</span>
              </motion.div>

              {/* 4: AI & ML */}
              <motion.div 
                className="floating-badge floating-badge-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Cpu size={16} className="text-accent" />
                <span>AI / ML</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 80px);
          padding: 3rem 0 5rem;
          overflow: hidden;
        }

        .min-vh-hero {
          min-height: calc(85vh - 80px);
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.28;
          pointer-events: none;
          z-index: 0;
        }

        .hero-orb-1 {
          width: 450px;
          height: 450px;
          background: var(--accent-primary);
          top: -100px;
          right: -100px;
        }

        .hero-orb-2 {
          width: 350px;
          height: 350px;
          background: var(--accent-secondary);
          bottom: -50px;
          left: -100px;
        }

        .hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .hero-subtitle-container {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          flex-wrap: wrap;
        }

        .hero-subtitle-prefix {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .hero-subtitle-flip {
          display: inline-block;
          min-width: 250px;
          text-align: left;
        }

        @media (max-width: 991px) {
          .hero-subtitle-container {
            justify-content: center;
          }
          .hero-subtitle-flip {
            text-align: center;
          }
        }

        .hero-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.7;
        }

        @media (max-width: 991px) {
          .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .availability-box {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          backdrop-filter: blur(8px);
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .social-icon-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
