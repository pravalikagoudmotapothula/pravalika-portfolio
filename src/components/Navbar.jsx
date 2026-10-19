import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ currentTheme, onThemeChange, themes }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll state for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Simple active section detection based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].id;
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`custom-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="custom-navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="navbar-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <span className="logo-sparkle"><Sparkles size={18} /></span>
            <span className="logo-text">PRAVALIKA</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center nav-links-container">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="d-flex align-items-center gap-2 gap-sm-3">
            {/* Theme Switcher */}
            <ThemeSwitcher 
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
              themes={themes}
            />

            {/* Resume Download Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Pravalika_M_Resume.pdf"
              className="btn-resume-nav d-none d-sm-inline-flex"
              title="Download Pravalika's Resume (PDF)"
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="btn-mobile-toggle d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mobile-drawer d-lg-none"
          >
            <div className="container py-3">
              <div className="d-flex flex-column gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="mobile-active-dot" />}
                    </button>
                  );
                })}

                <div className="pt-2 border-top border-secondary-subtle mt-2">
                  <a
                    href={personalInfo.resumeUrl}
                    download="Pravalika_M_Resume.pdf"
                    className="btn-primary-gradient w-100 justify-content-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FileDown size={16} />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }

        .custom-navbar-wrapper.scrolled {
          background: var(--bg-nav);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.65rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .logo-sparkle {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
        }

        .logo-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dot {
          color: var(--accent-primary);
        }

        .nav-links-container {
          background: var(--bg-card);
          padding: 0.3rem 0.5rem;
          border-radius: 9999px;
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(12px);
        }

        .nav-item-btn {
          position: relative;
          padding: 0.45rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          border-radius: 9999px;
        }

        .nav-item-btn:hover {
          color: var(--text-primary);
        }

        .nav-item-btn.active {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .nav-active-pill {
          position: absolute;
          inset: 0;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          border-radius: 9999px;
          z-index: -1;
        }

        .btn-resume-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          font-size: 0.825rem;
          font-weight: 600;
          border-radius: 9999px;
          background: var(--accent-gradient);
          color: #ffffff !important;
          box-shadow: 0 2px 10px var(--accent-glow);
          transition: all 0.25s ease;
        }

        .btn-resume-nav:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px var(--accent-glow-strong);
        }

        .btn-mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .btn-mobile-toggle:hover {
          border-color: var(--accent-primary);
        }

        .mobile-drawer {
          background: var(--bg-card-solid);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: var(--badge-bg);
          color: var(--accent-primary);
        }

        .mobile-active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-primary);
        }
      `}</style>
    </header>
  );
}
