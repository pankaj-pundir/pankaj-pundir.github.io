
import type { Project, WorkItem, BlogPost } from './types';

export const userInfo = {
  name: 'Pankaj Pundir',
  title: 'A.I enthusiast | Polymath',
  bio: "Hey, I'm Pankaj Pundir. I completed my B.Tech in Computer Science and Engineering. I'm skilled in Computer Vision, Deep Learning, coding, and logical thinking. Creating Desktop applications (Kivy) and web designing are hobbies of mine. The drive to create General AI is a core professional ambition. My technical skills include Python, C++, Computer Vision, Machine Learning, Deep Learning, and Kivy. I also enjoy watching movies, traveling, competitive coding, and have interests in meditation, hypnotism, and card tricks, which help me find patterns and understand people.",
  skills: ['Python', 'C++', 'OpenCV', 'Git', 'PyTorch', 'PySpark', 'Angular', 'Data Science', 'Computer Vision', 'Deep Learning', 'Kivy', 'Machine Learning', 'Dash', 'Plotly', 'Airflow', 'Big Data Technologies', 'Backend Development', 'API Integration', 'Business Rule Engine', 'Regulatory Reporting', 'Workflow Development', 'Image Classification', 'Text Categorization', 'Assistive Technology', 'PHP', 'CSS', 'JavaScript', 'matplotlib', 'Software Engineering'],
  socials: {
    github: 'https://github.com/pankaj-pundir',
    linkedin: 'https://www.linkedin.com/in/pankaj-pundir',
    twitter: 'https://www.twitter.com/twt_curious_guy',
    email: 'pankaj.pundir369@gmail.com',
  },
  profileImage: "/assets/images/profilepic.jpg", 
};

//  images are saved in the path /public/assets/images/*
export const projects: Project[] = [
  {
    id: '1',
    title: 'ColorTuner',
    description: 'This software is made to visualize and extract the colors from the images with exact HSV coding. Thus very useful for color extraction, and color detection tuning.',
    imageUrl: '/assets/images//colorTuner.gif',
    videoUrl: '',
    tags: ['Kivy', 'Python', 'Image Processing', 'App design', 'Color Extractor'],
    liveLink: '#',
    sourceLink: 'https://github.com/pankaj-pundir/ColorTuner',
  },
  {
    id: '2',
    title: 'Graph Reader (FigSense)',
    description: 'A fully automated GUI to read graphical data like bar and line chart and extract the information for the user. Line and bar charts can be extracted from images as well as pdf and classifying the images in categories. Finally extracting points, line, and textual data. Merging all the information and provide meaningful data to the user.',
    imageUrl: '/assets/images/graphReader.jpg',
    tags: ['Kivy', 'OpenCV', 'Computer Vision', 'Python'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '3',
    title: 'Dexterous',
    description: 'Software to replace GPS. It track position of object with accelerometer and gyroscope, thus mapping 3D object poesition.',
    imageUrl: '/assets/images/dexterous.jpg',
    tags: ['matplotlib', 'sensors', 'Python', '3D Tracking'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '4',
    title: 'Instant Attendance',
    description: 'To decrease the attendance time in college. OTP method is implemented with sharing a secret code with the students to mark the attendance parallelly. This process decreases the time as compared to serial attendance.',
    imageUrl: '/assets/images/attendance.gif',
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
    id: '6', // New ID
    company: 'Google',
    companyLogoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1752710400&v=beta&t=_zAJJHkDhi7EvfyEGIEBojzv4ci4mmIAm6I_5Xqnua8',
    role: 'Software Engineer 3', // Assuming a generic role, please update if needed
    duration: 'June 2024 - Present',
    description: [
      'Working on private cloud technologies and ensuring Backup and Restore works efficiently', // Placeholder description
    ],
    technologies: ['Software Engineering','Kubernetes','Go'], // Placeholder, please update
    status: 'current',
  },
  {
    id: '7', // New ID
    company: 'PhonePe',
    companyLogoUrl: 'https://media.licdn.com/dms/image/v2/D560BAQHLOrShxWW33g/company-logo_200_200/company-logo_200_200/0/1732870614932/phonepe_internet_logo?e=1752710400&v=beta&t=z4qwuh1wuNPC1V7aVbhwzcLwXJ2rir_w55jsArglG9Y',
    role: 'Software Engineer 2', // Assuming a generic role, please update if needed
    duration: 'April 2024 - May 2024',
    description: [
      'Worked on NCMC project and experienced the sheer data volume', // Placeholder description
    ],
    technologies: ['Software Engineering','Java'], // Placeholder, please update
    status: 'past',
  },
  {
    id: '1',
    company: 'GROWW',
    companyLogoUrl: 'https://resources.groww.in/web-assets/img/website-logo/groww-logo-light.svg',
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
    companyLogoUrl: 'https://nexen.bnymellon.com/app/shared-wl-assets/17/img/whitelabel/mmi/logo_bny.png',
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
    companyLogoUrl: 'https://nexen.bnymellon.com/app/shared-wl-assets/17/img/whitelabel/mmi/logo_bny.png',
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
    companyLogoUrl: 'http://www.iitrpr.ac.in/sites/default/files/image.jpg',
    role: 'Research Intern',
    duration: 'May 2019 – Jul 2019 | Punjab, India',
    description: [
      'Chart Image classification using Deep learning and ML Techniques',
      'Designed Region-based text categorization technique for Chart images.',
    ],
    technologies: ['Deep Learning', 'Machine Learning', 'Image Classification', 'Text Categorization'],
    status: 'past',
  },
  {
    id: '5',
    company: 'IIT ROPAR',
    companyLogoUrl: 'http://www.iitrpr.ac.in/sites/default/files/image.jpg',
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

