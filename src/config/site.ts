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
    subtitle: "I love building software and hardware that helps people.",
  description: "Connect with me!"
  },

  // Projects
  projects: [
    {
      title: "Ochtagon.com",
      description: "UFC MMA pick-em game.",
      tech: ["FastAPI", "Node.js", "Tailwind CSS", "JavaScript", "PostgreSQL", "Docker", "Redis"],
      link: "ochtagon.com",
      year: "2025"
    },
    {
      title: "Personal Portfolio Website",
      description: "Personal website (this one) showcasing my work and skills as a software engineer.",
      tech: ["Next.js", "Node.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      github: "https://github.com/larrymai33/Website",
      year: "2025"
    },
    {
      title: "Monitoring Application",
      description: "Application that monitors retail websites for item availability.",
      tech: ["Python","API"],
      github: "https://github.com/larrymai33/Target-Monitor",
      year: "2025"
    },
    {
      title: "Geographical Environmental Module",
      description: "Hardware and software device used for external environmental monitoring.",
      tech: ["C++", "Python", "Arduino", "Eagle"],
      demo: "https://web.ece.ucsb.edu/~yoga/capstone/static/img/projects/poster/gem_poster.pdf",
      github: "https://github.com/larrymaiucsb/Gem",
      year: "2022"
    },
    {
      title: "Budgeting Chrome Extension",
      description: "Created a full stack chrome extension that helps users budget their money.",
      tech: ["HTML", "CSS", "JavaScript", "Chrome Extension API"],
      github: "https://github.com/larrymaiucsb/Buget",
      year: "2019"
    },
    {
      title: "Uber Voice Recognition App",
      description: "Caltech Hackathon 2019 Project. Voice recognition 2FA for Uber drivers.",
      tech: ["Python", "Google API", "Dialogflow"],
      github: "https://github.com/larrymaiucsb/UberVoiceRec",
      year: "2019"
    },
    {
      title: "Google to Spotify",
      description: "SB Hacks 2020 Web Application. Spotify playlist generator based on user's emotional state.",
      tech: ["Node.js", "Google Vision API", "Spotify API"],
      year: "2020"
    },
  ],

  // Skills
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "C++", "Java", "HTML", "CSS"],
    areas: ["5G Wireless", "Machine Learning", "AI", "Full-Stack Development", "Embedded Systems",  "CI/CD",  "QA Testing/Automation", "DevOps" ],
    tools: ["Next.js", "Node.js", "Express", "Flask", "Git", "Docker", "Supabase","Jenkins","Kubernetes","AWS","GCP","Azure"]
  },

  // Experience
  experience: [
    {
      company: "Mercor",
      position: "Software Engineer",
      location: "Remote",
      startDate: "April 2025",
      endDate: "Present",
      achievements: [
        "Developed automated Python setup scripts for over 100+ GitHub repositories, enabling reproducible, docker containerized environments pinned to historical commits aimed to train LLMs.",
        "Achieved 90–100% test coverage across selected issues by writing and optimizing Pytests with custom flags, improving LLM patch verification accuracy.",
        "Reduced environment setup time by 70% via streamlined Docker workflows and dependency resolution pipelines."
      ]
    },
    {
      company: "Corning",
      position: "Software Engineer I (Wireless)",
      location: "Milpitas, CA",
      startDate: "Sep 2022",
      endDate: "Aug 2024",
      achievements: [
        "Developed and tested Layer 3 networking stack features for 5G radio access networks, reducing deployment time by 30% and improving connection reliability by 25% for small-cell technologies in C.",
        "Designed system alarms and call performance reports in C that decreased network downtime by 18%, and implemented LTE subscriber redirection that improved handover success rates by 22%.",
        "Managed and optimized 15+ developer environments and servers (WRCP, Supermicro), reducing configuration time by 40% and cutting network setup time from 3 days to 4 hours.",
        "Created and executed 200+ automated test cases for Qualcomm and Samsung chipset compatibility, increasing test coverage by 35% and identifying 28 critical integration issues before production.",
        "Successfully integrated 3 new vendor 5G core systems into existing network architecture, maintaining 99.9% service availability during transition and reducing operational costs by 15%."
      ]
    },
    {
      company: "Stealth Startup",
      position: "Software Engineering Intern",
      location: "San Francisco, CA",
      startDate: "Jun 2021",
      endDate: "Sep 2021",
      achievements: [
        "Built a Django and React B2B web application to provide precise investment analytics to over 10 companies.",
        "Implemented Python-based fuzzy search algorithms with over 90% accuracy for financial risk analysis and recommendations.",
        "Achieved 99.9% uptime after migrating codebase to an AWS serverless architecture including AWS Lambda, EC2, and S3.",
        "Utilized MySQL and AWS Aurora DB for data querying and ran machine learning models with over 90% accuracy to analyze over 100 trends in venture capital revenue and growth."
      ]
    },
    {
      company: "Piedmont Racing Limited",
      position: "Software Engineering Intern",
      location: "Santa Barbara, CA",
      startDate: "Sep 2019",
      endDate: "Dec 2019",
      achievements: [
        "Created Python scripts to transform MySQL data into structured spreadsheet formats for efficient analysis of sports tracking data."
      ]
    },
    {
      company: "AGS Inc",
      position: "IT Development Intern",
      location: "San Francisco, CA",
      startDate: "Jun 2018",
      endDate: "Aug 2018",
      achievements: [
        "Developed a Python web scraping tool that automated data collection for 300+ engineering projects."
      ]
    }
  ],

  // Education
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "M.S. in Computer Science",
      startDate: "Jan 2026",
      endDate: "May 2028"
    },
    {
      school: "University of California, Santa Barbara",
      degree: "B.S. in Computer Engineering",
      startDate: "Aug 2018",
      endDate: "June 2022"
    }
  ],

  // Research
  research: [
    {
      title: "Atmospheric Water Generator",
      organization: "UCSB CSEP Capstone Project",
      startDate: "2018",
      endDate: "2020",
      description: [
        "Developed and programmed internal and external temperature and humidity sensors in C++ to monitor environmental conditions for water generation.",
        "Designed and implemented a real-time data logging system using ISRs and RTOS to capture and analyze day–night cycle patterns affecting water yield.",
        "Engineered circuit designs to power and control key system components, including cooling fans, power regulation modules, and a water quality sensor for cleanliness monitoring."
      ]
    }
  ],

  // Contact
  contact: {
    title: "Get In Touch",
    description: "I'm always interested in hearing about new opportunities and interesting projects."
  }
}; 