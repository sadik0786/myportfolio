import { Code2, MonitorSmartphone, Globe, Database, Palette, Smartphone } from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Sadik Ali",
    role: "Senior Frontend Developer",
    experience: "4.5+ Years Experience",
    description: "Building world-class, premium digital experiences with modern web technologies.",
    coreTech: ["React.js", "Next.js", "TypeScript", "Flutter"],
  },
  about: {
    summary: "Passionate Senior Frontend Developer with over 4.5 years of experience in building highly scalable, responsive, and performant web applications. I specialize in the React ecosystem (Next.js, React.js) and TypeScript, focusing on crafting pixel-perfect, premium user interfaces that provide exceptional user experiences.",
    objective: "My goal is to leverage my expertise in modern frontend technologies to build innovative, world-class products. I thrive in challenging environments where I can solve complex problems, contribute to architectural decisions, and create visually stunning, accessible applications.",
  },
  skills: {
    Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    UI: ["Material UI", "Bootstrap", "Tailwind CSS", "Framer Motion"],
    Mobile: ["Flutter"],
    Backend: ["Node.js", "PHP", "Rest Api"],
    Database: ["MySQL", "MongoDB", "Supabase", "Firebase", "PostgreSQL"],
    Tools: ["Git", "GitHub", "VS Code"],
  },
  experience: [
    {
      id: 1,
      company: "Innovage Technologies Pvt Ltd",
      role: "Senior Frontend Developer",
      duration: "Oct 2021 – Present",
      description: "Leading frontend development, architecting scalable React applications, and mentoring junior developers.",
    },
    {
      id: 2,
      company: "Noesis Tech",
      role: "Junior Web Developer",
      duration: "Dec 2019 – Jul 2020",
      description: "Developed and maintained web applications, integrated APIs, and improved UI/UX performance.",
    },
    {
      id: 3,
      company: "Idnus Systems & Services Pvt Ltd",
      role: "Web Designer",
      duration: "Jul 2019 – Dec 2019",
      description: "Designed responsive user interfaces and translated design mockups into functional code.",
    },
    {
      id: 4,
      company: "GInfomedia Solution",
      role: "Web Developer",
      duration: "Dec 2018 – Apr 2019",
      description: "Worked on frontend web development tasks, creating landing pages and corporate websites.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "5nance",
      description: "Financial services platform offering investment options and portfolio management.",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        { label: "Partner", url: "https://partner.5nance.com" },
        { label: "Products", url: "https://products.5nance.com/login" }, // Added generic domain since products.com was listed, assumed 5nance products
      ],
      image: "/projects/5nance.jpg" // Placeholder for structure, we won't show it if missing
    },
    {
      id: 2,
      title: "Salatuk App",
      description: "A comprehensive mobile application providing accurate prayer times and Qibla direction for Muslims worldwide.",
      tech: ["Flutter", "Dart", "Firebase", "Geolocation"],
      links: [],
    },
    {
      id: 3,
      title: "HRMS Portal",
      description: "A Human Resource Management System featuring role-based login and comprehensive leave management.",
      tech: ["Flutter", "MySQL", "Node.js", "REST APIs"],
      links: [],
    },
  ],
  achievements: [
    { label: "Years Experience", value: 4, suffix: ".5+" },
    { label: "Projects Completed", value: 20, suffix: "+" },
    { label: "Satisfied Clients", value: 15, suffix: "+" },
    { label: "Code Commits", value: 5000, suffix: "+" },
  ],
  services: [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and accessible web applications using modern technologies.",
      icon: Code2,
    },
    {
      id: 2,
      title: "Next.js Development",
      description: "Creating SEO-friendly, server-rendered applications with optimal performance.",
      icon: Globe,
    },
    {
      id: 3,
      title: "React Development",
      description: "Developing interactive and dynamic single-page applications.",
      icon: Database, // Generic icon
    },
    {
      id: 4,
      title: "Flutter Development",
      description: "Building beautiful, natively compiled applications for mobile from a single codebase.",
      icon: Smartphone,
    },
    {
      id: 5,
      title: "API Integration",
      description: "Connecting frontend applications seamlessly with robust backend services.",
      icon: MonitorSmartphone,
    },
    {
      id: 6,
      title: "Responsive Design",
      description: "Ensuring applications look and function flawlessly across all devices and screen sizes.",
      icon: Palette,
    },
  ],
  contact: {
    location: "Mumbai, India",
    email: "alisadik99@gmail.com",
    github: "https://github.com/sadik0786",
    linkedin: "https://www.linkedin.com/in/sadik-ali-175239207/",
  },
  apps: [
    {
      id: 1,
      title: "Salatuk App",
      icon: "/image/salatuk_icon.png",
      file: "/downloads/salatuk.apk",
      version: "1.0.0",
      size: "29.1 MB",
      platform: "Android",
      active: true,
    },
    {
      id: 2,
      title: "Family Wallet App",
      icon: "/image/familywallet.png",
      file: "/downloads/familywallet.apk",
      version: "1.0.0",
      size: "20.4 MB",
      platform: "Android",
      active: true,
    },
    {
      id: 3,
      title: "MasjidHub App",
      icon: "/image/masjidhub_logo.png",
      file: "/downloads/masjidhub.apk",
      version: "1.0.0",
      size: "19.8 MB",
      platform: "Android",
      active: false,
    },
    {
      id: 4,
      title: "Runzy App",
      icon: "/image/runzy.png",
      file: "/downloads/runzy.apk",
      version: "1.0.0",
      size: "19.8 MB",
      platform: "Android",
      active: false,
    },
    {
      id: 5,
      title: "ZenHr App",
      icon: "/image/zenhr_logo.png",
      file: "/downloads/zenhr.apk",
      version: "1.0.0",
      size: "19.8 MB",
      platform: "Android",
      active: false,
    },
    {
      id: 6,
      title: "taskmate App",
      icon: "/image/taskmate.png",
      file: "/downloads/taskmate.apk",
      version: "1.0.0",
      size: "19.8 MB",
      platform: "Android",
      active: false,
    }
  ]
};
