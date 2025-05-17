
import type { Project, WorkItem, BlogPost } from './types';

export const userInfo = {
  name: 'Pankaj Pundir',
  title: 'B.Tech CSE Graduate | AI & Computer Vision Developer',
  bio: "Hey, I'm Pankaj Pundir. I completed my B.Tech in Computer Science and Engineering. I'm skilled in Computer Vision, Deep Learning, coding, and logical thinking. Creating Desktop applications (Kivy) and web designing are hobbies of mine. The drive to create General AI is a core professional ambition. My technical skills include Python, C++, Computer Vision, Machine Learning, Deep Learning, and Kivy. I also enjoy watching movies, traveling, competitive coding, and have interests in meditation, hypnotism, and card tricks, which help me find patterns and understand people.",
  skills: ['Python', 'C++', 'OpenCV', 'Git', 'PyTorch', 'PySpark', 'Angular', 'Data Science', 'Computer Vision', 'Deep Learning', 'Kivy', 'Machine Learning'],
  socials: {
    github: 'https://github.com/pankaj-pundir', // Please update with your actual GitHub
    linkedin: 'https://www.linkedin.com/in/pankajpundir/', // Please update
    twitter: 'https://twitter.com/PankajPundirEX', // Please update
    medium: 'https://medium.com/@pankajpundir', // Please update
    email: 'pankajpundir@example.com', // Please update with your actual email
  },
  profileImage: "https://placehold.co/300x300.png", 
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ColorTuner',
    description: 'An image processing software focused on color tuning and manipulation, likely built with Kivy.',
    imageUrl: 'https://placehold.co/600x400.png',
    videoUrl: '',
    tags: ['Python', 'Kivy', 'Image Processing', 'Desktop App'],
    liveLink: '#', // Update with actual link if available
    sourceLink: '#', // Update with actual link if available
  },
  {
    id: '2',
    title: 'Graph Reader',
    description: 'A tool that extracts textual data from images of graphs using computer vision techniques.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Data Extraction'],
    liveLink: '#', // Update with actual link if available
    sourceLink: '#', // Update with actual link if available
  },
  {
    id: '3',
    title: 'Dexterous',
    description: 'Real-time 3D object tracking system utilizing sensor data.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Computer Vision', '3D Tracking', 'Sensors'],
    liveLink: '#', // Update with actual link if available
    sourceLink: '#', // Update with actual link if available
  },
  {
    id: '4',
    title: 'Instant Attendance',
    description: 'A quick attendance system based on secure code sharing with students.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Security', 'Application Development'],
    liveLink: '#', // Update with actual link if available
    sourceLink: '#', // Update with actual link if available
  },
];

// No formal work history provided in the text, clearing previous entries.
// If you have a resume with company details, you can add them here.
export const workHistory: WorkItem[] = [];

// No blog posts provided in the text, clearing previous entries.
export const blogPosts: BlogPost[] = [];
