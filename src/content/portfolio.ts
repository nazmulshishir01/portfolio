// Portfolio content data model
// Update with your actual information

export const personalInfo = {
  name: "Alex Chen",
  role: "Frontend Developer",
  tagline: "Building exceptional digital experiences with React & Next.js",
  bio: "I'm a passionate frontend developer with 5+ years of experience crafting beautiful, performant web applications. I specialize in React, Next.js, and TypeScript, with a keen eye for design and user experience.",
  location: "San Francisco, CA",
  email: "hello@alexchen.dev",
  phone: "+1 (555) 123-4567",
  availability: "Available for freelance projects",
  social: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen_dev",
  },
};

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
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  highlights?: string[];
  problem?: string;
  solution?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    tagline: "Modern shopping experience with real-time inventory",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include real-time inventory management, secure payments, and a responsive admin dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "Prisma"],
    features: [
      "Real-time inventory tracking",
      "Secure Stripe payments",
      "Admin dashboard",
      "Order management",
      "Product search & filtering",
      "Responsive design",
    ],
    githubUrl: "https://github.com/alexchen/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    images: ["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg"],
    highlights: ["50k+ monthly users", "99.9% uptime", "4.8 star rating"],
    problem:
      "Traditional e-commerce platforms are often slow, lack real-time updates, and provide poor mobile experiences.",
    solution:
      "Built a modern, fast, and responsive e-commerce solution with Next.js SSR for optimal performance and SEO.",
    featured: true,
  },
  {
    title: "Task Management App",
    slug: "task-management-app",
    tagline: "Collaborative project management for modern teams",
    description:
      "A Trello-inspired task management application with real-time collaboration, drag-and-drop functionality, and team workspaces.",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React DnD"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop boards",
      "Team workspaces",
      "Task assignments",
      "Due date tracking",
      "Activity timeline",
    ],
    githubUrl: "https://github.com/alexchen/taskflow",
    liveUrl: "https://taskflow-demo.vercel.app",
    images: ["/images/projects/taskflow-1.jpg"],
    highlights: ["10k+ active users", "Real-time sync", "Offline support"],
    problem:
      "Existing task management tools are either too complex or lack real-time collaboration features.",
    solution:
      "Created an intuitive, real-time collaborative workspace with Firebase for seamless team coordination.",
    featured: true,
  },
  {
    title: "AI Content Generator",
    slug: "ai-content-generator",
    tagline: "AI-powered content creation platform",
    description:
      "An AI-powered content generation tool that uses OpenAI's GPT-4 to create blog posts, social media content, and marketing copy.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Stripe"],
    features: [
      "Multiple content types",
      "Custom templates",
      "History & favorites",
      "Credit-based billing",
      "Export options",
      "Team collaboration",
    ],
    githubUrl: "https://github.com/alexchen/ai-writer",
    liveUrl: "https://ai-writer-demo.vercel.app",
    images: ["/images/projects/ai-writer-1.jpg"],
    highlights: ["GPT-4 powered", "5k+ content pieces generated", "SaaS model"],
    problem: "Creating quality content is time-consuming and expensive for small businesses.",
    solution:
      "Developed an AI-powered tool that generates high-quality content in seconds at a fraction of the cost.",
    featured: true,
  },
  {
    title: "Real Estate Listings",
    slug: "real-estate-listings",
    tagline: "Beautiful property search experience",
    description:
      "A modern real estate platform with advanced search filters, interactive maps, and virtual tour integration.",
    stack: ["Next.js", "TypeScript", "Mapbox", "Prisma", "PostgreSQL"],
    features: [
      "Advanced search filters",
      "Interactive maps",
      "Virtual tours",
      "Saved searches",
      "Agent contact forms",
      "Property comparisons",
    ],
    githubUrl: "https://github.com/alexchen/realestate",
    images: ["/images/projects/realestate-1.jpg"],
    problem: "Traditional real estate websites offer poor user experience and outdated interfaces.",
    solution:
      "Built a modern, fast property search platform with interactive maps and immersive virtual tours.",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    tagline: "Track your fitness journey",
    description:
      "A comprehensive fitness tracking app with workout logging, progress charts, and goal setting features.",
    stack: ["React Native", "TypeScript", "Firebase", "Chart.js"],
    features: [
      "Workout logging",
      "Progress charts",
      "Goal setting",
      "Exercise library",
      "Calendar view",
      "Social sharing",
    ],
    githubUrl: "https://github.com/alexchen/fittrack",
    images: ["/images/projects/fittrack-1.jpg"],
    problem: "Most fitness apps are bloated with features users don't need and have poor UX.",
    solution: "Created a focused, intuitive fitness tracker that prioritizes the features that matter most.",
    featured: false,
  },
  {
    title: "Portfolio Template",
    slug: "portfolio-template",
    tagline: "Modern developer portfolio starter",
    description:
      "An open-source portfolio template for developers featuring dark mode, animations, and easy customization.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dark/light mode",
      "Smooth animations",
      "SEO optimized",
      "Easy customization",
      "Contact form",
      "Blog support",
    ],
    githubUrl: "https://github.com/alexchen/portfolio-template",
    liveUrl: "https://portfolio-starter.vercel.app",
    images: ["/images/projects/portfolio-1.jpg"],
    highlights: ["500+ GitHub stars", "Open source", "MIT licensed"],
    problem: "Developer portfolios often look generic and lack the polish to stand out.",
    solution: "Built a premium-feeling portfolio template with modern animations and easy content management.",
    featured: true,
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
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise SaaS products. Architecting scalable React applications and mentoring junior developers.",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple React applications. Implemented design systems and improved performance by 40%.",
    type: "work",
  },
  {
    title: "Junior Developer",
    company: "WebAgency",
    location: "Los Angeles, CA",
    period: "2018 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Gained expertise in modern JavaScript frameworks.",
    type: "work",
  },
  {
    title: "B.S. Computer Science",
    company: "University of California",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    description:
      "Graduated with honors. Focused on web technologies and software engineering principles.",
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
