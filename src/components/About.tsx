import React from 'react';
import { User, Code, Compass } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
            About{' '}
            <span
              className="italic font-normal"
              style={{ color: 'var(--accent)' }}
            >
              Me.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
            A little background on who I am and how I approach web development.
          </p>
        </div>

        {/* 3 Core 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Who I Am */}
          <TiltCard
            maxTilt={13}
            className="p-7 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/25"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white/[0.04] border border-white/10"
              style={{ color: 'var(--accent)', transform: 'translateZ(18px)' }}
            >
              <User className="w-5 h-5" />
            </div>
            <h3
              className="text-lg font-bold text-white mb-2.5"
              style={{ transform: 'translateZ(14px)' }}
            >
              Who I Am
            </h3>
            <p
              className="text-xs sm:text-sm text-zinc-400 leading-relaxed"
              style={{ transform: 'translateZ(10px)' }}
            >
              I'm Zaigham, a web developer focused on learning modern web development and creating polished, user-friendly websites.
            </p>
          </TiltCard>

          {/* Card 2: What I Do */}
          <TiltCard
            maxTilt={13}
            className="p-7 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/25"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white/[0.04] border border-white/10"
              style={{ color: 'var(--accent)', transform: 'translateZ(18px)' }}
            >
              <Code className="w-5 h-5" />
            </div>
            <h3
              className="text-lg font-bold text-white mb-2.5"
              style={{ transform: 'translateZ(14px)' }}
            >
              What I Do
            </h3>
            <p
              className="text-xs sm:text-sm text-zinc-400 leading-relaxed"
              style={{ transform: 'translateZ(10px)' }}
            >
              I create responsive websites using HTML, CSS and JavaScript, with a focus on clean structure and good user experience.
            </p>
          </TiltCard>

          {/* Card 3: My Approach */}
          <TiltCard
            maxTilt={13}
            className="p-7 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/25"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white/[0.04] border border-white/10"
              style={{ color: 'var(--accent)', transform: 'translateZ(18px)' }}
            >
              <Compass className="w-5 h-5" />
            </div>
            <h3
              className="text-lg font-bold text-white mb-2.5"
              style={{ transform: 'translateZ(14px)' }}
            >
              My Approach
            </h3>
            <p
              className="text-xs sm:text-sm text-zinc-400 leading-relaxed"
              style={{ transform: 'translateZ(10px)' }}
            >
              I focus on simple layouts, responsive design, clean code and continuously improving my development skills.
            </p>
          </TiltCard>

        </div>

        {/* Short Personal Statement */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#12100e] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base font-bold text-white mb-1.5">
              My Philosophy
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Good websites don't need overly complicated code or distracting gimmicks. I focus on semantic HTML, clean CSS architecture, and making sure everything looks right on real devices.
            </p>
          </div>

          <a
            href="#projects"
            className="text-xs font-semibold px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors self-start sm:self-auto shrink-0"
          >
            See My Projects →
          </a>
        </div>

      </div>
    </section>
  );
};
