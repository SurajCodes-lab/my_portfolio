export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientLogo?: string;
  industry: string;
  role: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string[];
  websiteUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images?: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
}
