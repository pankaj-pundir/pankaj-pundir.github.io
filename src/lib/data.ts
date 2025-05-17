
import type { Project, WorkItem, BlogPost } from './types';

export const userInfo = {
  name: 'Pankaj Pundir',
  title: 'B.Tech CSE Graduate | AI & Computer Vision Developer',
  bio: "Hey, I'm Pankaj Pundir. I completed my B.Tech in Computer Science and Engineering. I'm skilled in Computer Vision, Deep Learning, coding, and logical thinking. Creating Desktop applications (Kivy) and web designing are hobbies of mine. The drive to create General AI is a core professional ambition. My technical skills include Python, C++, Computer Vision, Machine Learning, Deep Learning, and Kivy. I also enjoy watching movies, traveling, competitive coding, and have interests in meditation, hypnotism, and card tricks, which help me find patterns and understand people.",
  skills: ['Python', 'C++', 'OpenCV', 'Git', 'PyTorch', 'PySpark', 'Angular', 'Data Science', 'Computer Vision', 'Deep Learning', 'Kivy', 'Machine Learning'],
  socials: {
    github: 'https://github.com/pankaj-pundir', // From previous data, ensure it's correct
    linkedin: 'https://www.linkedin.com/in/pankaj-pundir',
    twitter: 'https://www.twitter.com/twt_curious_guy', // Using the one from header nav
    medium: 'https://medium.com/@pankajpundir', // From previous data, ensure it's correct or remove if not wanted
    email: 'pankaj.pundir369@gmail.com',
    facebook: 'https://www.facebook.com/pankaj.pundir.92',
    skype: 'https://www.skype.com/pankaj.pundir369', // This is a profile link
  },
  profileImage: "/images/profilepic.jpg", 
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ColorTuner',
    description: 'This software is made to visualize and extract the colors from the images with exact HSV coding. Thus very useful for color extraction, and color detection tuning.',
    imageUrl: '/images/portfolio/colorTuner.gif',
    videoUrl: '',
    tags: ['Image Processing', 'App design', 'Color Extractor', 'Kivy', 'Python'],
    liveLink: '#', 
    sourceLink: 'https://github.com/pankaj-pundir/ColorTuner',
  },
  {
    id: '2',
    title: 'Graph Reader (FigSense)',
    description: 'A fully automated GUI to read graphical data like bar and line chart and extract the information for the user. Line and bar charts can be extracted from images as well as pdf and classifying the images in categories. Finally extracting points, line, and textual data. Merging all the information and provide meaningful data to the user.',
    imageUrl: '/images/portfolio/graphReader.jpg',
    tags: ['Kivy', 'OpenCV', 'Computer Vision', 'Python'],
    liveLink: '#', 
    sourceLink: '#', 
  },
  {
    id: '3',
    title: 'Dexterous',
    description: 'Software to replace GPS. It track position of object with accelerometer and gyroscope, thus mapping 3D object position.',
    imageUrl: '/images/portfolio/dexterous.jpg',
    tags: ['matplotlib', 'sensors', 'Python', '3D Tracking'],
    liveLink: '#', 
    sourceLink: '#', 
  },
  {
    id: '4',
    title: 'Instant Attendance',
    description: 'To decrease the attendance time in college. OTP method is implemented with sharing a secret code with the students to mark the attendance parallelly. This process decreases the time as compared to serial attendance.',
    imageUrl: '/images/portfolio/attendance.gif',
    tags: ['PHP', 'CSS', 'JS', 'Web Development'],
    liveLink: '#', 
    sourceLink: '#', 
  },
  {
    id: '5',
    title: 'Project Video Demo',
    description: 'YouTube video showcasing a project.',
    imageUrl: 'https://placehold.co/600x400.png', // Placeholder image as it's a video
    videoUrl: 'https://www.youtube.com/embed/JgTtuUGkSzw',
    tags: ['Video Demo'],
    liveLink: 'https://www.youtube.com/watch?v=JgTtuUGkSzw', // Link to the actual video page
    sourceLink: '#',
  }
];

export const workHistory: WorkItem[] = [];

export const blogPosts: BlogPost[] = [];
