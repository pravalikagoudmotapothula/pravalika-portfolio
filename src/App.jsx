import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="portfolio-app-root">
      {/* Top Sticky Blurred Navbar */}
      <Navbar 
        currentTheme={theme} 
        onThemeChange={setTheme} 
        themes={themes} 
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
