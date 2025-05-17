
import type { Project, WorkItem, BlogPost } from './types';

export const userInfo = {
  name: 'Pankaj Pundir',
  title: 'B.Tech CSE Graduate | AI & Computer Vision Developer',
  bio: "Hey, I'm Pankaj Pundir. I completed my B.Tech in Computer Science and Engineering. I'm skilled in Computer Vision, Deep Learning, coding, and logical thinking. Creating Desktop applications (Kivy) and web designing are hobbies of mine. The drive to create General AI is a core professional ambition. My technical skills include Python, C++, Computer Vision, Machine Learning, Deep Learning, and Kivy. I also enjoy watching movies, traveling, competitive coding, and have interests in meditation, hypnotism, and card tricks, which help me find patterns and understand people.",
  skills: ['Python', 'C++', 'OpenCV', 'Git', 'PyTorch', 'PySpark', 'Angular', 'Data Science', 'Computer Vision', 'Deep Learning', 'Kivy', 'Machine Learning', 'Dash', 'Plotly', 'Airflow', 'Big Data Technologies', 'Backend Development', 'API Integration', 'Business Rule Engine', 'Regulatory Reporting', 'Workflow Development', 'Image Classification', 'Text Categorization', 'Data Extraction', 'Assistive Technology', 'PHP', 'CSS', 'JavaScript', 'matplotlib'],
  socials: {
    github: 'https://github.com/pankaj-pundir',
    linkedin: 'https://www.linkedin.com/in/pankaj-pundir',
    twitter: 'https://www.twitter.com/twt_curious_guy',
    medium: 'https://medium.com/@pankajpundir',
    email: 'pankaj.pundir369@gmail.com',
    facebook: 'https://www.facebook.com/pankaj.pundir.92',
    skype: 'skype:pankaj.pundir369?chat', // Standard Skype URI
  },
  profileImage: "/images/profilepic.jpg", // User needs to place this in public/images/
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ColorTuner',
    description: 'This software is made to visualize and extract the colors from the images with exact HSV coding. Thus very useful for color extraction, and color detection tuning.',
    imageUrl: '/images/portfolio/colorTuner.gif', // User needs to place this in public/images/portfolio/
    videoUrl: '',
    tags: ['Kivy', 'Python', 'Image Processing', 'App design', 'Color Extractor'],
    liveLink: '#',
    sourceLink: 'https://github.com/pankaj-pundir/ColorTuner',
  },
  {
    id: '2',
    title: 'Graph Reader (FigSense)',
    description: 'A fully automated GUI to read graphical data like bar and line chart and extract the information for the user. Line and bar charts can be extracted from images as well as pdf and classifying the images in categories. Finally extracting points, line, and textual data. Merging all the information and provide meaningful data to the user.',
    imageUrl: '/images/portfolio/graphReader.jpg', // User needs to place this in public/images/portfolio/
    tags: ['Kivy', 'OpenCV', 'Computer Vision', 'Python'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '3',
    title: 'Dexterous',
    description: 'Software to replace GPS. It track position of object with accelerometer and gyroscope, thus mapping 3D object position.',
    imageUrl: '/images/portfolio/dexterous.jpg', // User needs to place this in public/images/portfolio/
    tags: ['matplotlib', 'sensors', 'Python', '3D Tracking'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '4',
    title: 'Instant Attendance',
    description: 'To decrease the attendance time in college. OTP method is implemented with sharing a secret code with the students to mark the attendance parallelly. This process decreases the time as compared to serial attendance.',
    imageUrl: '/images/portfolio/attendance.gif', // User needs to place this in public/images/portfolio/
    tags: ['PHP', 'CSS', 'JavaScript', 'Web Development'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '5',
    title: 'Project Video Demo',
    description: 'YouTube video showcasing a project.',
    imageUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://www.youtube.com/embed/JgTtuUGkSzw',
    tags: ['Video Demo', 'YouTube'],
    liveLink: 'https://www.youtube.com/watch?v=JgTtuUGkSzw',
    sourceLink: '#',
  }
];

export const workHistory: WorkItem[] = [
  {
    id: '1',
    company: 'GROWW',
    companyLogoUrl: 'https://placehold.co/100x40.png',
    role: 'Software Engineer 2 (Credit Team)',
    duration: 'Feb 2022 - March 2024 | Banglore, India',
    description: [
      'Designed and developed real-time loans flow for groww users.',
      'Integrated major banks [IDFC] and NBFCs [ABFL,GCS].',
      'Designed User journey and contributed on Business rule engine to determine user Credit worthiness and generate Real Time offers.',
    ],
    technologies: ['Backend Development', 'API Integration', 'Business Rule Engine'],
    status: 'past',
  },
  {
    id: '2',
    company: 'BANK OF NEW YORK MELLON',
    companyLogoUrl: 'https://placehold.co/100x40.png',
    role: 'Software Engineer',
    duration: 'July 2020 - Feb 2022 | Pune, India',
    description: [
      'Developed understanding on Bank functionalities.',
      'Used Pyspark, Jupyter and Pandas to analyse data and create pipeline for Regulatory Reporting.',
      'Built intuitive dashboard using Python, Dash and Plotly, for visualising and extracting insights form data.',
    ],
    technologies: ['PySpark', 'Jupyter', 'Pandas', 'Python', 'Dash', 'Plotly', 'Data Analysis', 'Regulatory Reporting'],
    status: 'past',
  },
  {
    id: '3',
    company: 'BANK OF NEW YORK MELLON',
    companyLogoUrl: 'https://placehold.co/100x40.png',
    role: 'Software Engineer Intern',
    duration: 'Jan - June 2020 | Pune, India',
    description: [
      'Applying Software engineering best practices.',
      'Responsible for developing Workflows with PySpark and using Airflow scheduler. Working on Big Data Technologies.',
    ],
    technologies: ['PySpark', 'Airflow', 'Big Data Technologies', 'Workflow Development'],
    status: 'past',
  },
  {
    id: '4',
    company: 'IIT ROPAR',
    companyLogoUrl: 'https://placehold.co/100x40.png',
    role: 'Research Intern',
    duration: 'May 2019 – Jul 2019 | Punjab, India',
    description: [
      'Chart Image classification using Deep learning and ML Techniques.',
      'Designed Region-based text categorization technique for Chart images.',
    ],
    technologies: ['Deep Learning', 'Machine Learning', 'Image Classification', 'Text Categorization'],
    status: 'past',
  },
  {
    id: '5',
    company: 'IIT ROPAR',
    companyLogoUrl: 'https://placehold.co/100x40.png',
    role: 'Research Intern',
    duration: 'May 2018 – Jul 2018 | Punjab, India',
    description: [
      'Done Research and derived a method for Data Extraction and classification of line and bar charts.',
      'Design and deliver technology to assist people with disabilities.',
    ],
    technologies: ['Data Extraction', 'Data Classification', 'Research', 'Assistive Technology'],
    status: 'past',
  },
];

export const blogPosts: BlogPost[] = [];
