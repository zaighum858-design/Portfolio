import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
            My{' '}
            <span
              className="italic font-normal"
              style={{ color: 'var(--accent)' }}
            >
              Skills.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
            Languages, tools, and techniques I work with regularly.
          </p>
        </div>

        {/* Clean Skills Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS_DATA.map((skill, idx) => (
            <div
              key={idx}
              className="p-4.5 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {skill.level}%
                </span>
              </div>

              {/* Simple subtle track */}
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: 'var(--accent)',
                  }}
                />
              </div>

              <p className="text-[11px] text-zinc-500 line-clamp-1">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
