import React, { useState, useEffect } from 'react';
import { AppTheme } from '../types';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { playUiClick, setSoundEnabled, getSoundEnabled } from '../utils/sound';

interface NavbarProps {
  currentTheme: AppTheme;
  onSelectTheme: (theme: AppTheme) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  onSelectTheme,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      setTimeout(() => playUiClick(900), 50);
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const themes: { id: AppTheme; label: string; color: string }[] = [
    { id: 'dark-orange', label: 'Orange', color: '#ff6500' },
    { id: 'cyber-green', label: 'Green', color: '#10b981' },
    { id: 'deep-purple', label: 'Purple', color: '#a855f7' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#080706]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#home"
          onClick={() => playUiClick(700)}
          className="flex items-center gap-2.5 text-white font-bold tracking-tight text-base group"
        >
          <span
            className="w-7 h-7 rounded-lg grid place-items-center text-xs font-black transition-transform duration-200 group-hover:scale-105"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--btn-text)',
            }}
          >
            Z
          </span>
          <span>
            Zaigham<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => playUiClick(800)}
              className="text-xs font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Subtle Sound Toggle, Theme Dots & Contact */}
        <div className="hidden sm:flex items-center gap-3.5">
          
          {/* Subtle Tactile Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-1.5 rounded-full border transition-all cursor-pointer ${
              soundOn
                ? 'border-white/30 text-white bg-white/10'
                : 'border-white/10 text-zinc-500 hover:text-zinc-300'
            }`}
            title={soundOn ? 'Tactile sound effects ON (click to mute)' : 'Enable subtle tactile clicks'}
            aria-label="Toggle sound"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Simple 3-color palette switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  playUiClick(950);
                  onSelectTheme(t.id);
                }}
                className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                  currentTheme === t.id ? 'scale-125 ring-2 ring-white/70' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ backgroundColor: t.color }}
                title={`Theme: ${t.label}`}
                aria-label={`Switch to ${t.label} theme`}
              />
            ))}
          </div>

          {/* Resume link */}
          <button
            onClick={() => {
              playUiClick(850);
              onOpenResume();
            }}
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Resume
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={() => playUiClick(1100)}
            className="px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:opacity-90 active:scale-95 shadow-sm"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--btn-text)',
            }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex sm:hidden items-center gap-2.5">
          <button
            onClick={toggleSound}
            className="p-1 text-zinc-400"
            aria-label="Toggle sound"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-1.5">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  playUiClick(950);
                  onSelectTheme(t.id);
                }}
                className={`w-3.5 h-3.5 rounded-full ${
                  currentTheme === t.id ? 'ring-2 ring-white/70' : 'opacity-50'
                }`}
                style={{ backgroundColor: t.color }}
                aria-label={`Switch to ${t.label}`}
              />
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pt-3 pb-5 bg-[#0d0c0a] border-b border-white/10 flex flex-col gap-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playUiClick(800);
                setMobileMenuOpen(false);
              }}
              className="py-1.5 text-xs font-medium text-zinc-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                playUiClick(850);
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-zinc-400 hover:text-white"
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => {
                playUiClick(1100);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--btn-text)',
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
