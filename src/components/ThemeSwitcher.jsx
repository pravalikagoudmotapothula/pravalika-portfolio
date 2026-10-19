import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher({ currentTheme, onThemeChange, themes }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeTheme = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className="position-relative" ref={dropdownRef}>
      <button
        type="button"
        className="btn-theme-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme selection"
        aria-expanded={isOpen}
      >
        <div className="theme-trigger-swatch">
          <span 
            className="swatch-dot" 
            style={{ background: activeTheme.colors[1] }} 
          />
        </div>
        <span className="theme-trigger-name d-none d-md-inline">{activeTheme.name}</span>
        <ChevronDown size={14} className={`theme-chevron ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="theme-dropdown-menu"
          >
            <div className="theme-dropdown-header">
              <Palette size={14} className="text-accent" />
              <span>Color Themes</span>
            </div>
            <div className="theme-dropdown-list">
              {themes.map((t) => {
                const isSelected = t.id === currentTheme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    className={`theme-option-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => {
                      onThemeChange(t.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="theme-option-left">
                      <div className="color-preview-dots">
                        {t.colors.map((c, i) => (
                          <span
                            key={i}
                            className="color-dot"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <div className="theme-option-text">
                        <span className="theme-title">{t.name}</span>
                        <span className="theme-desc">{t.description}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <motion.div
                        layoutId="activeThemeCheck"
                        className="theme-check-icon"
                      >
                        <Check size={16} />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .btn-theme-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 9999px;
          color: var(--text-primary);
          font-size: 0.825rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }
        .btn-theme-trigger:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 0 16px var(--accent-glow);
        }
        .theme-trigger-swatch {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swatch-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.4);
          box-shadow: 0 0 8px currentColor;
        }
        .theme-chevron {
          transition: transform 0.2s ease;
          color: var(--text-muted);
        }
        .rotate-180 {
          transform: rotate(180deg);
        }
        .theme-dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 270px;
          background: var(--bg-card-solid);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-hover);
          border-radius: 1rem;
          padding: 0.5rem;
          box-shadow: var(--shadow-card), 0 10px 40px var(--accent-glow);
          z-index: 1050;
        }
        .theme-dropdown-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.6rem 0.6rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-primary);
        }
        .theme-dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .theme-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.55rem 0.7rem;
          border-radius: 0.625rem;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid transparent;
          transition: all 0.2s ease;
          text-align: left;
        }
        .theme-option-btn:hover {
          background: var(--badge-bg);
          border-color: var(--badge-border);
        }
        .theme-option-btn.active {
          background: var(--badge-bg);
          border-color: var(--accent-primary);
        }
        .theme-option-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .color-preview-dots {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .theme-option-text {
          display: flex;
          flex-direction: column;
        }
        .theme-title {
          font-size: 0.825rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .theme-desc {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.1;
        }
        .theme-check-icon {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
