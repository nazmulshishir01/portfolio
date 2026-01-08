// Portfolio content data model
// Update with your actual information

export const personalInfo = {
  name: "Md. Nazmul Islam",
  role: "Full Stack Developer",
  tagline: "Building scalable and user-centric web applications with the MERN stack",
  bio: "I am a dedicated Full Stack Developer specialized in the MERN stack. My programming journey began with a curiosity for how things work on the web, which evolved into a passion for building robust applications. I enjoy solving complex problems and crafting seamless user experiences. When I'm not coding, I love exploring new technologies, reading tech blogs, and traveling.",
  location: "Mirpur DOHS, Dhaka, Bangladesh",
  email: "nazmulshishir28@gmail.com",
  phone: "+880 1937921124",
  availability: "Available for new opportunities",
  resumeUrl: "https://drive.google.com/file/d/0B4vIMNelzwCYVVFFVUNaLUtXcFhJLTZ1R0NRUHJfUUxOLTFR/view?usp=sharing&resourcekey=0-_q7rilbddh_LUVbwl_m1Sg",
  social: {
    github: "https://github.com/nazmulshishir01",
    linkedin: "https://www.linkedin.com/in/nazmul-shishir",
    twitter: "https://x.com/Nazmulshishir01",
    facebook: "https://www.facebook.com/nazmulshishir.me",
    youtube: "https://www.youtube.com/@nazmulshishir",
  },
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Lines of Code", value: "15k+" },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 85 },
    { name: "Redux", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 82 },
    { name: "PostgreSQL", level: 70 },
    { name: "REST APIs", level: 88 },
    { name: "GraphQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "VS Code", level: 92 },
    { name: "Figma", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Vercel", level: 88 },
    { name: "Jest", level: 78 },
    { name: "Cypress", level: 72 },
  ],
};

export type Project = {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  githubUrl?: string; // Client repository
  liveUrl?: string;
  images: string[];
  highlights?: string[];
  problem?: string;
  solution?: string;
  featured: boolean;
  challenges?: string;
  futurePlans?: string;
};

export const projects: Project[] = [
  {
    title: "HomeHero",
    slug: "homehero",
    tagline: "Local Household Service Finder",
    description:
      "A modern web application that connects users with trusted local service providers. Browse services, book appointments, and leave ratings/reviews — while providers can manage their own services with full CRUD operations.",
    stack: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User Authentication (Firebase)",
      "Service Discovery & Booking",
      "Provider Service Management (CRUD)",
      "Rating & Review System",
      "Dark/Light Theme",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/nazmulshishir01/homehero-client",
    liveUrl: "https://homehero-bd.web.app",
    images: ["/images/projects/homeherocover.png"],
    highlights: ["Service Booking", "Role-based Dashboards", "Review System"],
    problem:
      "Finding reliable household service providers locally is often difficult and lacks transparency.",
    solution:
      "Built a centralized platform for discovering, comparing, and booking local services with user reviews.",
    featured: true,
    challenges: "Ensuring secure role-based access for providers and users, and managing complex booking logic with date conflicts was a key challenge.",
    futurePlans: "Implementing real-time chat between users and providers, and adding a payment gateway for upfront booking fees.",
  },
  {
    title: "ScholarStream",
    slug: "scholarstream",
    tagline: "Scholarship Management Platform",
    description:
      "A comprehensive full-stack MERN application designed to connect students with scholarship opportunities worldwide. Universities can post scholarships while students can search, browse, and apply seamlessly.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase"],
    features: [
      "Role-Based Access Control",
      "Scholarship Management",
      "Stripe Payment Integration",
      "Application Tracking",
      "Advanced Search & Filtering",
      "Admin Dashboard with Analytics",
    ],
    githubUrl: "https://github.com/nazmulshishir01/scholarstream-client",
    liveUrl: "https://scholarstream-project.web.app",
    images: ["/images/projects/scholarstreamcover.png"],
    highlights: ["MERN Stack", "Stripe Payments", "Role Management"],
    problem:
      "Students often struggle to find and apply for relevant scholarships in one centralized place.",
    solution:
      "Developed a robust platform connecting students with opportunities, featuring role-based workflows for seamless management.",
    featured: true,
    challenges: "Designing a robust role-based access control (RBAC) system with different dashboards and permissions for Students, Moderators, and Admins.",
    futurePlans: "Adding an AI-based recommendation engine to suggest scholarships based on student profiles and academic history.",
  },
  {
    title: "SkillSwap",
    slug: "skillswap",
    tagline: "Local Skill Exchange Platform",
    description:
      "An interactive platform that allows individuals to offer, learn, and trade skills locally. Users can browse various skills, view details, book sessions, and connect with skill providers.",
    stack: ["React", "Tailwind CSS", "Firebase", "AOS", "Swiper.js"],
    features: [
      "Skill Listings & Details",
      "Session Booking System",
      "Secure Authentication",
      "Profile Management",
      "Interactive Animations",
      "Toast Notifications",
    ],
    githubUrl: "https://github.com/nazmulshishir01/skillswap",
    liveUrl: "https://skillswap-4d128.web.app/",
    images: ["/images/projects/skillswapcover.png"],
    highlights: ["Skill Exchange", "Smooth Animations", "Booking System"],
    problem:
      "People want to learn new skills or offer their expertise but lack a dedicated local platform to connect.",
    solution:
      "Created an easy-to-use platform for listing and booking skill sessions with a focus on user experience and interactivity.",
    featured: true,
    challenges: "Creating a smooth and responsive UI with complex animations using AOS and Swiper while maintaining high performance across devices.",
    futurePlans: "Introducing a virtual currency system for skill trading and adding video call integration for remote learning sessions.",
  },
];

export type TimelineItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "education";
};

export const timeline: TimelineItem[] = [
  {
    title: "Junior Web Developer",
    company: "Upstal Limited",
    location: "Dhaka, Bangladesh",
    period: "2023 - Continue",
    description:
      "Assisted in the development of corporate websites and internal tools. Collaborated with senior developers to implement responsive designs and fix bugs.",
    type: "work",
  },
  {
    title: "B.Sc in Computer Science",
    company: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2014 - 2018",
    description:
      "Completed degree with strong focus on software engineering, data structures, and algorithms. Active member of the university computer club.",
    type: "education",
  },
  {
    title: "Higher Secondary Certificate",
    company: "Adamjee Cantonment College",
    location: "Dhaka, Bangladesh",
    period: "2011- 2012",
    description:
      "Passed with GPA 5.00. Science group background with interest in mathematics and physics.",
    type: "education",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and modern JavaScript.",
    icon: "code",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, accessible interfaces with smooth animations.",
    icon: "palette",
  },
  {
    title: "API Integration",
    description:
      "Connecting frontends to backends, third-party services, and building full-stack solutions.",
    icon: "plug",
  },
  {
    title: "Performance Optimization",
    description:
      "Auditing and improving web performance, Core Web Vitals, and user experience.",
    icon: "zap",
  },
  {
    title: "Technical Consulting",
    description:
      "Helping teams choose the right technologies and architect scalable solutions.",
    icon: "message-circle",
  },
  {
    title: "Code Reviews & Mentoring",
    description:
      "Providing code reviews, best practices guidance, and mentoring for development teams.",
    icon: "users",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
