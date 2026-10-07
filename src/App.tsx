import React, { useState, useEffect } from 'react';
import { AppTheme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<AppTheme>('dark-orange');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Web Development');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Synchronize theme with data-theme attribute on root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Subtle cursor spotlight tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080706] text-white selection:bg-[var(--accent)] selection:text-black">
      {/* Soft natural ambient warmth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Cursor tracking ambient light */}
        <div
          className="fixed pointer-events-none rounded-full blur-[140px] transition-opacity duration-300"
          style={{
            width: '600px',
            height: '600px',
            left: `${mousePos.x - 300}px`,
            top: `${mousePos.y - 300}px`,
            backgroundColor: 'var(--accent)',
            opacity: 0.08,
          }}
        />

        <div
          className="absolute -top-32 right-1/4 w-[450px] h-[450px] rounded-full blur-[160px] opacity-10 transition-colors duration-500"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div
          className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full blur-[170px] opacity-10 transition-colors duration-500"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          currentTheme={theme}
          onSelectTheme={setTheme}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero currentTheme={theme} />
          <About />
          <Services onSelectServiceForContact={handleSelectService} />
          <Projects onSelectProjectForContact={handleSelectService} />
          <Skills />
          <Contact initialService={selectedServiceForContact} />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setResumeOpen(true)} />
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
