import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} />
          <style>{`
            .back-to-top-btn {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              width: 46px;
              height: 46px;
              border-radius: 50%;
              background: var(--accent-gradient);
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 20px var(--accent-glow-strong);
              border: 1px solid rgba(255, 255, 255, 0.2);
              z-index: 999;
              transition: box-shadow 0.2s ease;
            }
            .back-to-top-btn:hover {
              box-shadow: 0 6px 25px var(--accent-glow-strong);
            }
            @media (max-width: 576px) {
              .back-to-top-btn {
                bottom: 1.25rem;
                right: 1.25rem;
                width: 40px;
                height: 40px;
              }
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
