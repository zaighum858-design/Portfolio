import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ServicesProps {
  onSelectServiceForContact: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
            My{' '}
            <span
              className="italic font-normal"
              style={{ color: 'var(--accent)' }}
            >
              Services.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
            Here's what I can help you build—clean, responsive, and thoughtfully designed.
          </p>
        </div>

        {/* 3 Clean 3D Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <TiltCard
              key={service.id}
              maxTilt={14}
              className="p-7 rounded-2xl bg-[#12100e] border border-white/10 hover:border-white/25 flex flex-col justify-between"
            >
              <div>
                {/* Simple Icon with 3D Pop */}
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center mb-5 font-mono text-base font-bold bg-white/[0.04] border border-white/10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: 'var(--accent)',
                    transform: 'translateZ(20px)',
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2.5"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-xs sm:text-sm text-zinc-400 leading-relaxed"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {service.description}
                </p>
              </div>

              <div
                className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between"
                style={{ transform: 'translateZ(15px)' }}
              >
                <span className="text-[11px] text-zinc-500">
                  Custom & Responsive
                </span>

                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
