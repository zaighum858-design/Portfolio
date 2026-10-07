import { ProjectItem, ServiceItem, SkillItem } from '../types';

export const DEVELOPER_INFO = {
  name: 'Zaigham',
  title: 'Web Developer',
  tagline: 'Crafting responsive, modern websites and fluid web experiences.',
  email: 'zaighum858@gmail.com',
  location: 'Available Worldwide / Remote',
  status: 'AVAILABLE FOR PROJECTS',
  bio: `I'm Zaigham, a web developer focused on mastering modern web development and crafting polished, high-performance websites. I combine clean semantic structure with thoughtful UI interactions to deliver web experiences that feel effortless, responsive, and visually striking.`,
  avatarImage: '/src/assets/images/portrait_zaigham_simple_1791386290886.jpg',
  stats: [
    { label: 'Clean Code', value: '100%', detail: 'Semantic & accessible HTML/CSS' },
    { label: 'Responsive', value: 'Multi-Device', detail: 'Mobile, tablet, 4K desktop' },
    { label: 'Animation', value: '60 FPS', detail: 'GPU-accelerated micro-interactions' },
    { label: 'Availability', value: 'Open', detail: 'Freelance & contracts' },
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:zaighum858@gmail.com',
  }
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ultraedit-clone',
    number: '01 / WEBSITE',
    title: 'UltraEdit Website',
    category: 'Full Responsive Layout',
    tag: 'responsive',
    description: 'A responsive website recreated to practice real-world HTML and CSS layouts with pixel precision.',
    longDescription: 'A complete recreation and modernization of the renowned UltraEdit text editor website. Focused on clean multi-column layouts, sticky navigations, interactive feature grids, and full cross-browser responsiveness across all screen sizes.',
    image: '/src/assets/images/portfolio_ultraedit_project_1791385657483.jpg',
    techStack: ['HTML5', 'CSS3', 'Modern Flexbox', 'CSS Grid', 'Vanilla JS'],
    features: [
      'Pixel-perfect responsive hero layout with dual call-to-actions',
      'Multi-tier pricing comparison tables with sticky header states',
      'Semantic HTML5 structure optimized for screen-readers and SEO',
      'Fluid media queries supporting mobile viewports down to 320px'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `/* Responsive Breakpoints & Container */
.ultraedit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 5%;
}
@media (max-width: 768px) {
  .nav-menu { display: none; }
  .mobile-drawer { display: flex; }
}`
  },
  {
    id: 'personal-portfolio',
    number: '02 / PORTFOLIO',
    title: 'Personal Portfolio',
    category: 'Creative Web Portfolio',
    tag: 'ui-ux',
    description: 'A modern portfolio website focused on animations, responsive design and tactile UI interactions.',
    longDescription: 'Zaigham\'s signature portfolio environment designed with an obsidian dark theme, glowing ambient accents, interactive code terminals, and smooth micro-interactions that communicate craft and technical skill.',
    image: '/src/assets/images/avatar_zaigham_developer_1791385704382.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Keyframes', 'Lucide Icons'],
    features: [
      'Multi-color theme engine (Flame Orange, Amber, Emerald, Cyan, Rose)',
      'Interactive developer illustration with live typing laptop screen',
      'Built-in interactive CLI developer terminal for keyboard enthusiasts',
      'Integrated live CSS playground for direct hands-on testing'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `// Dynamic Theme Accent State
const [theme, setTheme] = useState<AccentTheme>('orange');

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);`
  },
  {
    id: 'interactive-physics-lab',
    number: '03 / JAVASCRIPT',
    title: 'Interactive Project',
    category: 'Dynamic DOM & Canvas',
    tag: 'javascript',
    description: 'An interactive web project built while developing JavaScript skills and particle physics logic.',
    longDescription: 'An exploratory canvas lab exploring math-driven animations, mouse-follower particle trails, dynamic coordinate calculations, and event-driven interactive widgets in pure JavaScript.',
    image: '/src/assets/images/portfolio_interactive_project_1791385691234.jpg',
    techStack: ['JavaScript (ES6+)', 'HTML5 Canvas', 'RequestAnimationFrame', 'Physics Vector Math'],
    features: [
      'Real-time mouse collision & particle spring physics',
      'Touch-responsive drag-and-drop interactions for mobile devices',
      'Custom math algorithms for trajectory calculation and friction',
      'Zero external graphics libraries for peak 60fps performance'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `// Vector particle attraction calculation
function updateParticle(p, mouseX, mouseY) {
  const dx = mouseX - p.x;
  const dy = mouseY - p.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 120) {
    p.vx -= (dx / dist) * 0.8;
    p.vy -= (dy / dist) * 0.8;
  }
}`
  },
  {
    id: 'modern-landing-page',
    number: '04 / LANDING PAGE',
    title: 'Modern Landing Page',
    category: 'High-Conversion Architecture',
    tag: 'landing',
    description: 'A clean landing page designed with modern spacing, typography and visual effects.',
    longDescription: 'A sleek, conversion-focused product landing page designed to communicate value clearly in the first 5 seconds. Featuring balanced typography, high-impact feature callouts, and smooth scroll transitions.',
    image: '/src/assets/images/portfolio_landing_project_1791385680067.jpg',
    techStack: ['HTML5', 'Modern CSS', 'Tailwind CSS', 'Intersection Observer'],
    features: [
      'Visual hierarchy driven by balanced typography math and spacing',
      'Scroll-triggered staggered reveal effects using IntersectionObserver',
      'Interactive FAQ accordion and feature highlight tabs',
      'Performance-optimized assets scoring 98+ on Core Web Vitals'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `// Intersection Observer for graceful scroll reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, { threshold: 0.15 });`
  },
  {
    id: 'dashboard-ui',
    number: '05 / UI',
    title: 'Dashboard UI',
    category: 'Analytics & Web App Interface',
    tag: 'ui-ux',
    description: 'A dashboard interface created to practice layouts, components and responsive UI.',
    longDescription: 'A high-contrast dark dashboard interface showcasing data tables, metric trend widgets, filterable card matrices, and responsive sidebar navigation with full drawer toggle states.',
    image: '/src/assets/images/portfolio_dashboard_project_1791385668350.jpg',
    techStack: ['React', 'TypeScript', 'CSS Grid', 'SVG Charts', 'Flexbox'],
    features: [
      'Collapsible navigation rail and responsive off-canvas drawer',
      'Tabular data tables with sorting and filter controls',
      'Custom SVG sparkline graphics without bloated charting packages',
      'Accessible dark mode contrast calibrated for extended reading comfort'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <MetricCard title="Total Visitors" value="48.2k" change="+12.4%" />
  <MetricCard title="Conversion Rate" value="4.8%" change="+0.6%" />
  <MetricCard title="Avg. Load Time" value="1.1s" change="-18%" />
</div>`
  },
  {
    id: 'experimental-lab',
    number: '06 / FUTURE',
    title: 'Experimental Web Lab',
    category: 'Future Explorations & Next-Gen Tech',
    tag: 'javascript',
    description: 'New creative projects and open-source experiments added as development skills continue to grow.',
    longDescription: 'An active incubator of web development experiments: explore full-stack integration prototypes, micro-interactions, responsive prototypes, and interactive mini-games created to test new CSS and JavaScript techniques.',
    image: '/src/assets/images/portfolio_interactive_project_1791385691234.jpg',
    techStack: ['React 19', 'Next-Gen CSS', 'Web Animations API', 'TypeScript'],
    features: [
      'Prototyping grounds for upcoming client and open-source projects',
      'Micro-benchmarks for layout rendering and CSS paint operations',
      'Constantly evolving codebase reflecting Zaigham\'s ongoing skill growth',
      'Community demo snippets ready to inspect and customize'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `// Future explorations: Web Animation API
element.animate([
  { transform: 'scale(1) rotate(0deg)', opacity: 1 },
  { transform: 'scale(1.05) rotate(2deg)', opacity: 0.9 },
  { transform: 'scale(1) rotate(0deg)', opacity: 1 }
], { duration: 2400, iterations: Infinity, easing: 'ease-in-out' });`
  },
  {
    id: 'crypto-defi-ui',
    number: '07 / FINTECH',
    title: 'Apex DeFi Protocol UI',
    category: 'FinTech & Web3 Analytics',
    tag: 'ui-ux',
    description: 'A dark-mode cryptocurrency analytics dashboard with real-time liquidity pools and interactive token charts.',
    longDescription: 'High-performance decentralized finance interface featuring reactive token orderbooks, glassmorphic trade slips, and custom SVG price visualizers calibrated for low latency and high contrast.',
    image: '/src/assets/images/portfolio_crypto_project_1791387255249.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SVG Visualizers'],
    features: [
      'Reactive staking calculator with interactive APR slider',
      'High-contrast dark mode palette reducing eye fatigue',
      'Tabular token pair lists with responsive horizontal scrolling',
      'Zero external bloated charting libraries for optimal load speed'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `// Realtime APR Calculation Hook
const calculateYield = (stakeAmount: number, lockDays: number) => {
  const baseRate = 0.142;
  const multiplier = 1 + (lockDays / 365) * 0.45;
  return stakeAmount * baseRate * multiplier;
};`
  },
  {
    id: 'creative-agency-portfolio',
    number: '08 / SHOWCASE',
    title: 'Vanguard Creative Studio',
    category: 'Avant-Garde Typography & Motion',
    tag: 'landing',
    description: 'An editorial portfolio website designed for a creative agency, featuring brutalist typography and fluid page transitions.',
    longDescription: 'High-impact editorial website crafted with oversized display type, measured whitespace rhythm, and hardware-accelerated cursor interactions designed to showcase high-retention video showreels and brand identities.',
    image: '/src/assets/images/portfolio_creative_studio_1791387267793.jpg',
    techStack: ['HTML5', 'Modern CSS', 'Intersection Observer', 'JavaScript'],
    features: [
      'Fluid typographic clamp scaling across all screen sizes',
      'Magnetic interactive buttons with spring physics feedback',
      'Oversized editorial headers with balanced text wrapping',
      'Accessible WCAG-AA compliant contrasts'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `/* Fluid Typography Clamp */
.editorial-display {
  font-size: clamp(3rem, 7vw, 7.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}`
  },
  {
    id: 'audiophile-ecommerce',
    number: '09 / E-COMMERCE',
    title: 'Aether Acoustic Storefront',
    category: 'Product Landing & Storefront',
    tag: 'responsive',
    description: 'A luxury audio tech ecommerce experience showcasing studio headphones with acoustic spectrum visualizers.',
    longDescription: 'A premium product showcase designed for high-fidelity audio equipment. Includes interactive frequency response curves, finish configurators, and streamlined checkout drawers built for responsive touch devices.',
    image: '/src/assets/images/portfolio_audiophile_ecommerce_1791387281702.jpg',
    techStack: ['React', 'Tailwind CSS', 'CSS Keyframes', 'TypeScript'],
    features: [
      'Interactive 360-degree color finish picker',
      'Frequency response sound curve visualizer',
      'Touch-friendly mobile drawer for cart and specifications',
      'Core Web Vitals score exceeding 95 on mobile'
    ],
    liveUrl: '#',
    githubUrl: '#',
    codeSnippet: `<div className="flex items-center gap-3">
  {finishes.map(finish => (
    <button
      key={finish.id}
      onClick={() => setSelectedFinish(finish.id)}
      className="w-6 h-6 rounded-full border-2 border-white/20 hover:scale-110"
      style={{ backgroundColor: finish.hex }}
    />
  ))}
</div>`
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    icon: '</>',
    title: 'Web Development',
    subtitle: 'Clean, Semantic, Modern Code',
    description: 'Building modern websites with clean HTML, CSS and JavaScript, structured for long-term maintainability, speed, and cross-browser reliability.',
    deliverables: [
      'W3C-compliant semantic HTML5 markup',
      'Fast, lightweight vanilla JS and React components',
      'Clean modular architecture with zero bloat',
      'SEO-friendly structure and rich social preview tags'
    ],
    workflow: [
      'Codebase blueprinting & requirements analysis',
      'Component modularization & architecture',
      'Robust cross-browser validation',
      'Performance audit & production deploy'
    ]
  },
  {
    id: 'responsive-design',
    icon: '◈',
    title: 'Responsive Design',
    subtitle: 'Flawless on Every Screen Size',
    description: 'Creating websites that look professional and work smoothly across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
    deliverables: [
      'Fluid mobile-first grid systems & flexbox layouts',
      'Touch-friendly navigation drawers and gesture zones',
      'Adaptive typography math and fluid clamp scales',
      'Retina-ready asset scaling and responsive images'
    ],
    workflow: [
      'Mobile viewport layout planning (320px–480px)',
      'Tablet breakpoint adjustments (768px–1024px)',
      'Desktop high-res container tuning (1440px+)',
      'Cross-device physical touch validation'
    ]
  },
  {
    id: 'ui-implementation',
    icon: '✦',
    title: 'UI Implementation',
    subtitle: 'From Ideas & Mockups into Real Code',
    description: 'Turning design concepts and wireframes into clean, interactive, and user-friendly web interfaces with fluid animations.',
    deliverables: [
      'Pixel-accurate translation from Figma / design drafts',
      'Subtle 60fps micro-animations and hover states',
      'Accessible WCAG-compliant color contrasts & focus rings',
      'Polished modal systems, tabs, and form interactions'
    ],
    workflow: [
      'Design tokens & color palette extraction',
      'Interactive component state design (hover, focus, active)',
      'Micro-motion and transition tuning (<= 200ms)',
      'Interactive UX polish & user testing'
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'HTML5', level: 95, category: 'core', description: 'Semantic structure, accessibility, SEO optimization' },
  { name: 'CSS3', level: 92, category: 'styling', description: 'Modern cascade, custom variables, fluid typography' },
  { name: 'JavaScript', level: 88, category: 'core', description: 'ES6+, asynchronous APIs, DOM manipulation, clean algorithms' },
  { name: 'Responsive Design', level: 94, category: 'styling', description: 'Fluid layouts, mobile-first breakpoints, clamp scaling' },
  { name: 'Tailwind CSS', level: 90, category: 'styling', description: 'Utility-first architecture, responsive variants, design tokens' },
  { name: 'Flexbox', level: 96, category: 'styling', description: '1D alignment, space distribution, layout mechanics' },
  { name: 'CSS Grid', level: 90, category: 'styling', description: '2D grid templates, auto-fill/auto-fit, bento grids' },
  { name: 'Web Animations', level: 86, category: 'styling', description: 'Hardware-accelerated CSS keyframes & transitions' },
  { name: 'Git & GitHub', level: 85, category: 'tools', description: 'Version control, branch management, collaboration' },
  { name: 'UI / UX Basics', level: 88, category: 'core', description: 'Visual hierarchy, typography scale, whitespace balance' },
  { name: 'TypeScript Basics', level: 80, category: 'frameworks', description: 'Type safety, interfaces, cleaner component contracts' },
  { name: 'React', level: 84, category: 'frameworks', description: 'Hooks, component lifecycles, state architecture' },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Zaigham translated our layout concepts into clean, responsive code in record time. His attention to mobile breakpoints and subtle transitions made the website shine.",
    author: "Hamza Malik",
    role: "Product Designer",
    project: "Landing Page Redesign"
  },
  {
    quote: "Working with Zaigham was effortless. Clean code, zero fluff, and always open to refining the micro-details. Our site looks professional on every device.",
    author: "Omar S.",
    role: "Freelance Creative",
    project: "UltraEdit Layout Clone"
  }
];
