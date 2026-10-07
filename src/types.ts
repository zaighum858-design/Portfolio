export type AppTheme = 'cyber-green' | 'deep-purple' | 'dark-orange';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: 'all' | 'responsive' | 'ui-ux' | 'javascript' | 'landing';
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  codeSnippet?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  workflow: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'core' | 'frameworks' | 'styling' | 'tools';
  description: string;
}
