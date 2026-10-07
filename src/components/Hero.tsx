import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Terminal as TerminalIcon, User, CornerDownLeft, Code2 } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { playUiClick } from '../utils/sound';
import { ThreeCanvas } from './ThreeCanvas';
import { AppTheme } from '../types';

interface HeroProps {
  currentTheme?: AppTheme;
}

const ROLES = [
  'Web Developer',
  'Front-End Developer',
  'UI Builder',
  'Creative Coder',
];

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ currentTheme = 'dark-orange' }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeView, setActiveView] = useState<'photo' | 'terminal'>('photo');

  // Interactive 3D Card Tilt State with dynamic specular sheen
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<CommandLog[]>([
    {
      cmd: 'whoami',
      output: <span>Zaigham — Web Developer focused on clean HTML, modern CSS & responsive UI.</span>,
    },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Smooth typing effect
  useEffect(() => {
    const currentWord = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Handle 3D Tilt Movement with Pronounced Depth and Specular Sheen
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -14; // Visible -14 to 14 deg tilt!
    const rY = ((x - centerX) / centerX) * 14;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // Terminal Command Execution
  const runCommand = (cmdText: string) => {
    playUiClick(880);
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-0.5 text-zinc-300">
            <div>Available commands:</div>
            <div className="text-zinc-400">
              <span className="text-emerald-400 font-bold">whoami</span> · <span className="text-emerald-400 font-bold">skills</span> · <span className="text-emerald-400 font-bold">projects</span> · <span className="text-emerald-400 font-bold">contact</span> · <span className="text-emerald-400 font-bold">clear</span>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <span className="text-zinc-300">
            Zaigham — Web developer passionate about clean structure, responsive design, and smooth interactions.
          </span>
        );
        break;

      case 'skills':
        output = (
          <div className="text-zinc-300">
            HTML5, CSS3, JavaScript, Responsive Design, Flexbox, CSS Grid, React, Tailwind CSS, Git.
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-zinc-300 space-y-0.5">
            <div>1. UltraEdit Website Layout</div>
            <div>2. Personal Portfolio Engine</div>
            <div>3. Apex DeFi Protocol UI</div>
            <div>4. Vanguard Creative Studio</div>
            <div>Type <span className="text-amber-400 font-bold">contact</span> to get in touch.</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <span className="text-zinc-300">
            Email: <a href="mailto:zaighum858@gmail.com" className="underline text-amber-400">zaighum858@gmail.com</a> · Available for projects.
          </span>
        );
        break;

      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;

      default:
        output = (
          <span className="text-zinc-400">
            command not found: {trimmed}. Type <span className="text-amber-400 font-bold">help</span>.
          </span>
        );
        break;
    }

    setTerminalLogs((prev) => [...prev, { cmd: cmdText, output }]);
    setTerminalInput('');
    setTimeout(() => {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(terminalInput);
  };

  const themeHex =
    currentTheme === 'cyber-green'
      ? '#10b981'
      : currentTheme === 'deep-purple'
      ? '#a855f7'
      : '#ff6500';

  return (
    <section
      id="home"
      className="min-h-[90vh] pt-32 pb-20 flex items-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D WebGL Canvas Backdrop + Interactive 3D Card (Photo & Terminal) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center order-2 md:order-1 relative">
            
            {/* 3D WebGL Interactive Floating Geometry Backdrop (Visible to naked eye!) */}
            <div className="absolute -top-12 -left-12 -right-12 -bottom-12 pointer-events-none z-0 opacity-80 flex items-center justify-center">
              <ThreeCanvas accentColor={themeHex} />
            </div>

            {/* View Switcher Pills */}
            <div className="relative z-10 flex items-center gap-1 p-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-3.5 shadow-lg">
              <button
                onClick={() => {
                  playUiClick(800);
                  setActiveView('photo');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeView === 'photo'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Portrait</span>
              </button>
              <button
                onClick={() => {
                  playUiClick(850);
                  setActiveView('terminal');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeView === 'terminal'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Terminal</span>
              </button>
            </div>

            {/* 3D Perspective Card Container */}
            <div
              className="relative z-10 w-full max-w-[340px]"
              style={{ perspective: '800px' }}
            >
              <div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-3xl p-3 bg-[#110f0d]/90 border border-white/20 shadow-2xl transition-all duration-200 backdrop-blur-md overflow-hidden"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                  transformStyle: 'preserve-3d',
                  boxShadow: isHovered
                    ? `0 30px 60px -15px rgba(0, 0, 0, 0.85), 0 0 40px var(--accent-soft)`
                    : '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
                }}
              >
                {/* Specular 3D Holographic Light Sheen */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-200 z-30"
                  style={{
                    background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, transparent 80%)`,
                  }}
                />

                {activeView === 'photo' ? (
                  /* Photo View with Real Layered 3D Depth */
                  <div>
                    <div
                      className="w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative shadow-inner"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      <img
                        src={DEVELOPER_INFO.avatarImage}
                        alt="Zaigham"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-104"
                      />
                    </div>

                    <div
                      className="pt-3 pb-1 px-2 flex items-center justify-between"
                      style={{ transform: 'translateZ(35px)' }}
                    >
                      <div>
                        <h3 className="text-sm font-bold text-white leading-tight">Zaigham</h3>
                        <p className="text-xs text-zinc-400">Web Developer</p>
                      </div>

                      <button
                        onClick={() => {
                          playUiClick(850);
                          setActiveView('terminal');
                        }}
                        className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white transition-colors cursor-pointer bg-white/[0.03]"
                        title="Open interactive terminal"
                      >
                        <Code2 className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                        <span>terminal &gt;</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Clean Terminal View */
                  <div
                    className="w-full h-[340px] rounded-2xl bg-[#0a0907] border border-white/10 p-3.5 flex flex-col justify-between font-mono text-xs"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    {/* Terminal Header */}
                    <div>
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">zaigham@dev:~</span>
                      </div>

                      {/* Quick Command Chips */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {['whoami', 'skills', 'projects', 'contact'].map((c) => (
                          <button
                            key={c}
                            onClick={() => runCommand(c)}
                            className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
                          >
                            ${c}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Terminal Scrollable Logs */}
                    <div className="flex-1 overflow-y-auto space-y-2 py-1 text-[11px] leading-relaxed">
                      {terminalLogs.map((log, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-zinc-500">
                            <span className="text-emerald-400 font-bold">$ </span>
                            <span className="text-zinc-200">{log.cmd}</span>
                          </div>
                          <div className="text-zinc-400 pl-2 border-l border-white/10">
                            {log.output}
                          </div>
                        </div>
                      ))}
                      <div ref={terminalBottomRef} />
                    </div>

                    {/* Terminal Command Input */}
                    <form onSubmit={handleTerminalSubmit} className="pt-2 border-t border-white/10 flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold text-xs">&gt;</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type 'help'..."
                        className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-600 text-xs font-mono"
                      />
                      <button
                        type="submit"
                        className="p-1 rounded text-zinc-400 hover:text-white cursor-pointer"
                      >
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <p className="relative z-10 text-[11px] text-zinc-500 mt-3 text-center">
              Real-time 3D WebGL space · Interactive mouse tilt & terminal
            </p>
          </div>

          {/* Right Column: Clean Intro */}
          <div className="md:col-span-7 flex flex-col justify-center order-1 md:order-2">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-zinc-400 bg-white/[0.03] border border-white/10 w-fit mb-5 shadow-sm">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span className="text-[11px] font-medium tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif-display text-5xl sm:text-6xl font-normal tracking-tight text-white leading-[1.05]">
              Hi, I'm{' '}
              <span
                className="italic font-normal transition-all"
                style={{
                  color: 'var(--accent)',
                  textShadow: `0 4px 30px var(--accent-soft)`,
                }}
              >
                Zaigham.
              </span>
            </h1>

            {/* Natural Subtitle with Role */}
            <div className="mt-3 text-sm sm:text-base font-medium flex items-center gap-2 text-zinc-300">
              <span>A</span>
              <span
                className="font-semibold underline decoration-2 underline-offset-4"
                style={{ textDecorationColor: 'var(--accent)' }}
              >
                {displayText}
              </span>
              <span
                className="w-1.5 h-4 inline-block animate-pulse"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span>based on the web.</span>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl font-light">
              I build modern, responsive, and user-friendly websites with clean code, thoughtful design, and smooth interactions.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={() => playUiClick(900)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--btn-text)',
                  boxShadow: `0 8px 24px var(--accent-soft)`,
                }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => playUiClick(950)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Simple Honest Highlights */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center gap-6 sm:gap-10 text-xs text-zinc-400">
              <div>
                <strong className="text-white block text-sm font-bold font-mono">100%</strong>
                <span>Responsive</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div>
                <strong className="text-white block text-sm font-bold font-mono">Clean</strong>
                <span>Semantic Code</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div>
                <strong className="text-white block text-sm font-bold font-mono">60 FPS</strong>
                <span>Fluid Physics</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
