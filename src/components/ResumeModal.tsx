import React from 'react';
import { X, Printer } from 'lucide-react';
import { DEVELOPER_INFO, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#12100e] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="font-mono text-xs font-bold text-zinc-400">
            Resume — Zaigham
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/[0.04] text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-serif-display font-medium text-white">
                Zaigham
              </h2>
              <p className="text-xs font-medium" style={{ color: 'var(--accent)' }}>
                Web Developer
              </p>
            </div>

            <div className="text-xs text-zinc-400 space-y-0.5">
              <div>Email: {DEVELOPER_INFO.email}</div>
              <div>Status: Available for projects</div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-1.5">
              Summary
            </h3>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
              Web developer focused on clean HTML5 semantic structure, modern responsive CSS layouts, and vanilla JavaScript. Passionate about building fast, intuitive web interfaces with clean hand-written code.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                'HTML5 Semantic',
                'CSS3 (Flexbox & Grid)',
                'JavaScript (ES6+)',
                'Responsive Design',
                'Tailwind CSS',
                'React',
                'Git & GitHub',
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2">
              Highlighted Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white">
                      {proj.title}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
          <span>{DEVELOPER_INFO.email}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-bold text-black"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--btn-text)',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
