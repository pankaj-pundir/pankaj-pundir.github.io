export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface WorkItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
  status?: 'current' | 'past';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  slug: string; // for routing to full post if implemented
}

export type LinkCategory = 'vibeCoding' | 'portfolio' | 'blog' | 'project' | 'other';

export interface LinkItem {
  id: string;
  url: string;
  title: string;
  description?: string;
  category: LinkCategory;
}
