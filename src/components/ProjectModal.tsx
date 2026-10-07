import React from 'react';
import { ProjectItem } from '../types';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#12100e] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span
              className="text-xs font-mono font-bold"
              style={{ color: 'var(--accent)' }}
            >
              {project.number}
            </span>
            <h3 className="text-base font-bold text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Main Image */}
          <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[320px] object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
              About The Project
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Points */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400 mb-2">
              Key Details
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-500">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400 mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-medium text-zinc-400 hover:text-white cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onInquire(project.title);
              onClose();
            }}
            className="px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--btn-text)',
            }}
          >
            <span>Inquire About Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
