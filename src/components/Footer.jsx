import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container py-5">
        <div className="row gy-4 align-items-center">
          
          {/* Brand & Tagline */}
          <div className="col-lg-4 text-center text-lg-start">
            <a 
              href="#hero" 
              className="footer-brand"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <Sparkles size={18} className="text-accent" />
              <span className="gradient-text fw-bold">PRAVALIKA M</span>
            </a>
            <p className="footer-tagline mt-2 mb-0">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="col-lg-5 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="footer-nav-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="col-lg-3 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-2 mb-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                title="Email"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-social-btn text-accent"
                title="Back to Top"
                aria-label="Back to top"
              >
                <ArrowUp size={17} />
              </button>
            </div>
            <span className="smaller text-muted d-block">
              Hyderabad, Telangana, India
            </span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom mt-4 pt-4 border-top border-secondary-subtle text-center">
          <p className="smaller text-muted mb-0">
            © {currentYear} <strong>{personalInfo.name}</strong>. Designed & engineered with React, Vite & Framer Motion.
          </p>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          position: relative;
          z-index: 10;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
        }

        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.85rem;
          max-width: 320px;
        }

        .footer-nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          padding: 0.25rem 0.4rem;
        }

        .footer-nav-link:hover {
          color: var(--accent-primary);
        }

        .footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .footer-social-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 12px var(--accent-glow);
          transform: translateY(-2px);
        }

        .smaller {
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  );
}
