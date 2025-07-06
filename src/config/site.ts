export const siteConfig = {
  name: "Larry Mai",
  title: "Larry - Software Engineer",
  description: "Personal portfolio website showcasing my work and skills as a software engineer.",
  email: "larrymai33@gmail.com",
  location: "San Francisco, CA",
  
  // Social Media Links
  social: {
    github: "https://github.com/larrymai33",
    linkedin: "https://linkedin.com/in/larry-mai",
    resume: "/Resume.pdf"
  },

  // Hero Section
  hero: {
    title: "Your Name is a software engineer based in San Francisco, CA.",
    subtitle: "I love building software that helps people.",
  description: "Currently working on LLMs for Mercor. Used to work on 5G radio access networks at Corning. UCSB Class of 2022."
  },

  // Projects
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "Personal website (this one) showcasing my work and skills as a software engineer.",
      tech: ["Next.js", "Node.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      github: "https://github.com/larrymai33/Website",
      image: ""
      
    },
    {
      title: "Monitoring Application",
      description: "Application that monitors retail websites for item availability.",
      tech: ["Python"],
      github: "https://github.com/larrymai33/Target-Monitor",
      image: ""
    },
    {
      title: "Geographical Environmental Module",
      description: "Hardware and software device used for external environmental monitoring.",
      tech: ["C++", "Python", "Arduino", "Eagle"],
      demo: "https://web.ece.ucsb.edu/~yoga/capstone/static/img/projects/poster/gem_poster.pdf",
      image: ""
      
    },
  ],

  // Skills
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "C++", "Java", "HTML", "CSS"],
    areas: ["5G Wireless", "Machine Learning", "AI", "Full-Stack Development", "Embedded Systems",  "CI/CD",  "QA Testing/Automation", "DevOps" ],
    tools: ["Next.js", "Node.js", "Express", "Flask", "Git", "Docker", "Supabase","Jenkins","Kubernetes","AWS","GCP","Azure"]
  },

  // Contact
  contact: {
    title: "Get In Touch",
    description: "I'm always interested in hearing about new opportunities and interesting projects."
  }
}; 