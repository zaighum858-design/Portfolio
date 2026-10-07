import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ProjectsProps {
  onSelectProjectForContact: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'responsive' | 'ui-ux' | 'javascript' | 'landing'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.tag === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'responsive', label: 'Responsive' },
    { id: 'ui-ux', label: 'UI & Layouts' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'landing', label: 'Landing Pages' },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
              My{' '}
              <span
                className="italic font-normal"
                style={{ color: 'var(--accent)' }}
              >
                Projects.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
              A selection of websites, responsive layouts, and front-end exercises I've built.
            </p>
          </div>

          {/* Simple Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={12}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group p-5 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/25 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div
                  className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-neutral-900 border border-white/5"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-medium bg-black/75 text-zinc-300 backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>

                {/* Project Number */}
                <div
                  className="text-[11px] font-mono tracking-wider font-semibold mb-1"
                  style={{ color: 'var(--accent)', transform: 'translateZ(12px)' }}
                >
                  {project.number}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-white mb-2 group-hover:underline"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-4"
                  style={{ transform: 'translateZ(8px)' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom Card Bar */}
              <div
                className="pt-3 border-t border-white/10 flex items-center justify-between text-xs"
                style={{ transform: 'translateZ(12px)' }}
              >
                <span className="text-[11px] text-zinc-500 font-mono">
                  {project.techStack.slice(0, 2).join(' · ')}
                </span>
                <span className="font-semibold flex items-center gap-1 text-white group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => onSelectProjectForContact(title)}
      />
    </section>
  );
};
