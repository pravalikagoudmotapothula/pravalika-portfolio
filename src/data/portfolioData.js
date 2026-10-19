export const personalInfo = {
  name: "Pravalika M",
  role: "Software Developer | Open to Opportunities",
  tagline: "Building scalable web applications, computer vision systems, and intelligent software.",
  email: "pravalikagoud80@gmail.com",
  phone: "+91 9177993188",
  location: "Hyderabad, Telangana, India",
  availability: "Available for Software Developer Internships & Full-Time Roles",
  github: "https://github.com/pravalikagoud",
  linkedin: "https://www.linkedin.com/in/pravalikagoud/",
  resumeUrl: "/resume.pdf",
  profileImage: "/assets/profile.jpg",
  subtitles: [
    "Full Stack Developer",
    "Software Developer",
    "AI & Machine Learning Enthusiast",
    "React Developer"
  ],
  bio: "I'm a Computer Science student and aspiring software developer passionate about building scalable web applications and intelligent solutions. My interests span full-stack development, machine learning, and computer vision. I enjoy solving challenging problems, learning emerging technologies, and transforming ideas into practical software projects.",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "B.E. CSE CGPA", value: "8.40", note: "MLR Institute of Technology" },
  { label: "Featured Projects", value: "4+", note: "Full-Stack & AI Systems" },
  { label: "Core Technologies", value: "15+", note: "Languages, Frameworks & DBs" },
  { label: "Graduation Year", value: "2027", note: "Computer Science & Engg" },
];

export const aboutHighlights = [
  {
    icon: "GraduationCap",
    title: "Strong Academic Foundation",
    description: "Pursuing B.E. in CSE at MLR Institute of Technology (8.40 CGPA) with prior Diploma in CSE (83.3%) and a perfect 10.0 CGPA in SSC.",
  },
  {
    icon: "Layers",
    title: "Full-Stack Web Engineering",
    description: "Designing responsive, intuitive user interfaces with React.js and architecting robust, modular RESTful backends using Node.js, Express, and Flask.",
  },
  {
    icon: "Cpu",
    title: "AI & Machine Learning",
    description: "Building deep learning CNN models for biometric iris detection, computer vision pipelines with OpenCV, and conversational NLP agents.",
  },
  {
    icon: "Lightbulb",
    title: "Algorithmic Problem Solving",
    description: "Applying Data Structures, Object-Oriented principles, and agile methodologies to solve practical, real-world software engineering challenges.",
  },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Core & Advanced" },
      { name: "Python", level: "AI/ML & Scripting" },
      { name: "JavaScript", level: "ES6+ / Modern" },
      { name: "C#", level: "OOP Fundamentals" },
      { name: "C++", level: "DSA & Systems" },
      { name: "SQL", level: "Queries & Joins" },
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Responsive / Grid" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Components & Hooks" },
      { name: "Bootstrap 5", level: "Grid & Responsive" },
      { name: "HTML5", level: "Accessibility & DOM" },
      { name: "CSS3", level: "Custom Properties" },
      { name: "JavaScript", level: "Async / Fetch / DOM" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Event-Driven Runtime" },
      { name: "Express.js", level: "Routing & Middleware" },
      { name: "Flask", level: "Microservices & APIs" },
      { name: "REST APIs", level: "JSON & HTTP Endpoints" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "Sparkles",
    skills: [
      { name: "TensorFlow", level: "Neural Networks" },
      { name: "OpenCV", level: "Vision & Processing" },
      { name: "CNNs", level: "Image Classification" },
      { name: "Deep Learning", level: "Model Architecture" },
      { name: "Computer Vision", level: "Feature Extraction" },
      { name: "NLP", level: "Intent Classification" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Relational Schema" },
      { name: "MongoDB Atlas", level: "NoSQL Documents" },
      { name: "DBMS", level: "Normalization & ACID" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud Platforms",
    icon: "Terminal",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration & CI" },
      { name: "Docker", level: "Containerization" },
      { name: "Postman", level: "API Testing" },
      { name: "AWS", level: "Cloud Essentials" },
      { name: "VS Code", level: "Primary IDE" },
      { name: "npm", level: "Package Management" },
      { name: "Linux / Unix Shell", level: "CLI & Bash" },
    ],
  },
  {
    id: "concepts",
    title: "Core Concepts",
    icon: "BrainCircuit",
    skills: [
      { name: "Data Structures & Algorithms", level: "Problem Solving" },
      { name: "Object-Oriented Programming", level: "Design Patterns" },
      { name: "Agile / Scrum", level: "Iterative Dev" },
    ],
  },
];

export const projects = [
  {
    id: "quick-hiring",
    title: "Quick Hiring — Job Portal Website",
    badge: "Full Stack Web Application",
    shortDescription: "A full-stack job portal with role-based access control for candidates and recruiters, job postings, applicant tracking, client-side validation, and REST API integration.",
    image: "/assets/project-job-portal.jpg",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    category: "Full Stack",
    highlights: [
      "Engineered secure role-based access control (RBAC) separating candidate portals from recruiter management interfaces.",
      "Built dynamic job posting pipelines allowing recruiters to manage listings, requirements, and deadlines.",
      "Implemented an applicant tracking system (ATS) enabling real-time status progression from application to interview.",
      "Designed comprehensive client-side and server-side form validations ensuring data integrity and fast responsiveness."
    ],
    architecture: "React Single Page Application communicating with an Express.js REST API layer connected to a normalized MySQL relational database.",
    githubUrl: "https://github.com/pravalikagoud",
    liveUrl: null,
    status: "Completed",
  },
  {
    id: "eye-iris-monitoring",
    title: "Eye Monitoring & Iris Detection System",
    badge: "Computer Vision & AI",
    shortDescription: "A computer vision system for ocular feature extraction and iris detection, using image preprocessing and a Flask inference service.",
    image: "/assets/project-iris.jpg",
    technologies: ["Python", "OpenCV", "TensorFlow", "CNNs", "Flask"],
    category: "AI & ML",
    highlights: [
      "Implemented real-time ocular region of interest (ROI) extraction and pupil landmark localization using OpenCV.",
      "Trained a custom Convolutional Neural Network (CNN) in TensorFlow for accurate iris pattern boundary detection.",
      "Built advanced image preprocessing pipelines including adaptive histogram equalization and noise reduction filters.",
      "Exposed a lightweight Python Flask inference microservice providing sub-second ocular analysis over HTTP."
    ],
    architecture: "Python OpenCV frame preprocessing pipeline feeding a trained TensorFlow CNN model, served via a Flask REST microservice.",
    githubUrl: "https://github.com/pravalikagoud",
    liveUrl: null,
    status: "Completed",
  },
  {
    id: "conversational-chatbot",
    title: "AI-Powered Conversational Chatbot",
    badge: "Natural Language Processing",
    shortDescription: "A conversational agent that uses NLP intent classification and fallback workflows to respond to user queries.",
    image: "/assets/project-chatbot.jpg",
    technologies: ["Python", "NLP", "Flask", "REST APIs", "JSON"],
    category: "AI & ML",
    highlights: [
      "Engineered NLP tokenization, lemmatization, and bag-of-words intent classification to understand diverse user queries.",
      "Implemented intelligent fallback workflows and context recovery when intent classification falls below confidence thresholds.",
      "Created dynamic response templates and contextual dialog flows managed via modular JSON structures.",
      "Integrated with a Flask REST API backend enabling seamless embeddability into web and mobile frontends."
    ],
    architecture: "Natural Language Processing model with intent classification pipeline, dynamic JSON pattern matching, and Flask REST endpoints.",
    githubUrl: "https://github.com/pravalikagoud",
    liveUrl: null,
    status: "Completed",
  },
  {
    id: "travel-booking-platform",
    title: "Travel Booking & Itinerary Platform",
    badge: "Interactive Web Platform",
    shortDescription: "A trip reservation platform with itinerary filtering, seat availability checks, booking workflows, and simulated payment checkout.",
    image: "/assets/project-travel.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "MySQL"],
    category: "Full Stack",
    highlights: [
      "Developed interactive itinerary exploration with multi-parameter filtering by price, destination, and dates.",
      "Constructed a real-time seat availability visualization and interactive seat map selection component.",
      "Implemented multi-step booking workflows with state persistence to guide users smoothly through checkout.",
      "Engineered simulated checkout processing with form validation and dynamic printable itinerary receipt generation."
    ],
    architecture: "Modular Vanilla JavaScript client architecture connected with backend endpoints and a structured MySQL travel catalog.",
    githubUrl: "https://github.com/pravalikagoud",
    liveUrl: null,
    status: "Completed",
  },
];

export const educationTimeline = [
  {
    institution: "MLR Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    score: "CGPA: 8.40 / 10.0",
    period: "2024 – 2027 (Expected)",
    status: "In Progress",
    description: "Focusing on Software Engineering, Data Structures & Algorithms, Deep Learning, Cloud Computing, and Full-Stack Development.",
    location: "Hyderabad, India",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Artificial Intelligence"]
  },
  {
    institution: "Madhira Institute of Technology & Science",
    degree: "Diploma in Computer Science and Engineering",
    score: "Percentage: 83.3%",
    period: "2021 – 2024",
    status: "Graduated with Distinction",
    description: "Built strong engineering foundations in Object-Oriented Programming (Java & C++), Relational Databases, Web Technologies, and Computer Architecture.",
    location: "Telangana, India",
    courses: ["Java Programming", "Web Development", "C/C++ Programming", "RDBMS & SQL", "Computer Hardware & Networks"]
  },
  {
    institution: "Tekurthi Model School",
    degree: "Secondary School Certificate (SSC)",
    score: "CGPA: 10.0 / 10.0",
    period: "2020 – 2021",
    status: "Completed with Perfect GPA",
    description: "Achieved a perfect 10.0 CGPA, demonstrating top academic excellence in Mathematics, Science, and English.",
    location: "Telangana, India",
    courses: ["Mathematics", "Physical Sciences", "Biological Sciences", "Social Studies", "English Language"]
  },
];

export const certifications = [
  {
    id: 1,
    title: "AI-Powered Web Development and Java Programming",
    category: "Full Stack & AI",
    badge: "Verified Coursework",
    description: "Comprehensive training in building modern AI-assisted web applications and scalable enterprise software using Core & Advanced Java.",
    keySkills: ["Core Java", "Advanced Java", "AI Web Integration", "RESTful APIs"],
    icon: "Award"
  },
  {
    id: 2,
    title: "Core & Advanced Java, OOP, Data Structures, and REST APIs",
    category: "Software Engineering",
    badge: "Verified Coursework",
    description: "In-depth coursework mastering Object-Oriented principles, complex data structures, algorithms, and backend RESTful architectures.",
    keySkills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Backend Architecture"],
    icon: "Code"
  },
  {
    id: 3,
    title: "Machine Learning and Deep Learning Specialist",
    category: "AI & Data Science",
    badge: "Technical Training",
    description: "Hands-on implementation of Convolutional Neural Networks (CNNs), Computer Vision with OpenCV, and Supervised/Unsupervised Learning.",
    keySkills: ["TensorFlow", "OpenCV", "CNN Architectures", "Model Training & Evaluation"],
    icon: "Brain"
  },
  {
    id: 4,
    title: "24-Hour Rapid Prototyping Hackathon Achievement",
    category: "Hackathon & Innovation",
    badge: "Competitive Achievement",
    description: "Recognized for designing, engineering, and deploying an end-to-end working software prototype within 24 intense hours under sprint conditions.",
    keySkills: ["Rapid Prototyping", "Team Collaboration", "Agile Execution", "Product Pitching"],
    icon: "Trophy"
  },
];
