import type { Project, WorkItem, BlogPost } from './types';

export const userInfo = {
  name: 'Pankaj Pundir',
  title: 'Technology Lead | Solution Architect | FullStack Developer | DevOps Engineer',
  bio: "A passionate and results-oriented Technology Lead with extensive experience in designing, developing, and deploying scalable and innovative software solutions. Proven expertise in full-stack development, cloud architecture, and DevOps practices. Adept at leading cross-functional teams and driving technical excellence.",
  skills: ['NodeJS', 'ReactJS', 'AngularJS', 'VueJS', 'NextJS', 'JavaScript', 'TypeScript', 'NestJS', 'Python', 'Java', 'Go', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'Microservices', 'Serverless', 'Agile', 'Scrum'],
  socials: {
    github: 'https://github.com/pankaj-pundir',
    linkedin: 'https://www.linkedin.com/in/pankajpundir/',
    twitter: 'https://twitter.com/PankajPundirEX',
    medium: 'https://medium.com/@pankajpundir',
    email: 'pankajpundir@example.com', // Add your actual email here
  },
  profileImage: "https://placehold.co/300x300.png", // You can replace this with your actual image URL
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS, payment gateway integration, and advanced analytics.',
    imageUrl: 'https://placehold.co/600x400.png',
    videoUrl: '', 
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'AWS'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '2',
    title: 'Real-time Collaboration Tool',
    description: 'A web application for real-time document editing and collaboration, built with WebSockets and CRDTs.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    liveLink: '#',
  },
  {
    id: '3',
    title: 'AI-Powered Data Visualization Dashboard',
    description: 'A dashboard that uses machine learning to analyze and visualize complex datasets, providing actionable insights.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    tags: ['Python', 'Flask', 'D3.js', 'TensorFlow', 'GCP'],
    sourceLink: '#',
  },
];

export const workHistory: WorkItem[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    role: 'Lead FullStack Developer',
    duration: 'Jan 2022 - Present',
    description: [
      'Leading a team of 8 developers in building and maintaining enterprise-level web applications.',
      'Architecting scalable solutions using microservices and cloud-native technologies.',
      'Implementing CI/CD pipelines for automated testing and deployment.',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Kubernetes', 'Terraform'],
    status: 'current',
  },
  {
    id: '2',
    company: 'Innovate Hub',
    role: 'Senior Software Engineer',
    duration: 'June 2019 - Dec 2021',
    description: [
      'Developed and launched several key features for a SaaS product, improving user engagement by 20%.',
      'Mentored junior engineers and contributed to code quality improvement initiatives.',
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'Azure', 'Docker'],
    status: 'past',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Serverless Architectures',
    date: '2024-07-15',
    summary: 'An in-depth guide to designing and implementing serverless solutions on AWS, Azure, and GCP.',
    imageUrl: 'https://placehold.co/600x400.png',
    slug: 'mastering-serverless-architectures',
  },
  {
    id: '2',
    title: 'The Future of Frontend: Trends to Watch in 2025',
    date: '2024-06-28',
    summary: 'Exploring upcoming trends in frontend development, including new frameworks, tools, and best practices.',
    imageUrl: 'https://placehold.co/600x400.png',
    slug: 'future-of-frontend-2025',
  },
  {
    id: '3',
    title: 'Deep Dive into Microservices Communication Patterns',
    date: '2024-05-10',
    summary: 'A technical overview of various communication patterns for microservices, such as synchronous, asynchronous, and event-driven approaches.',
    slug: 'microservices-communication-patterns',
  },
];
