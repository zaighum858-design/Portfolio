import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-white/10 bg-[#060504] pt-14 pb-12 text-xs text-zinc-400">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="inline-flex items-center gap-2 text-base font-bold text-white">
              <span
                className="w-6 h-6 rounded-md grid place-items-center font-bold text-xs"
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

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Web developer focused on building modern, responsive, and user-friendly websites with clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-semibold text-white text-xs">
              Quick Links
            </h4>
            <div className="flex flex-col gap-1.5 text-zinc-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-semibold text-white text-xs">
              Connect
            </h4>
            <div className="flex flex-col gap-1.5 text-zinc-400">
              <a
                href={DEVELOPER_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={DEVELOPER_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="hover:text-white transition-colors flex items-center gap-2"
                style={{ color: 'var(--accent)' }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © 2026 <span style={{ color: 'var(--accent)' }}>Zaigham</span>. Built with clean HTML, CSS & JavaScript.
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
