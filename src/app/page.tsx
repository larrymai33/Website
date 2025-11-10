'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code,
  Server,
  Brain,
  Briefcase,
  GraduationCap,
  FlaskConical
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Home() {

  const { projects, skills, experience, education, research } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              {siteConfig.name}
            </motion.div>
            <div className="flex items-center space-x-6">
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
                Featured Projects
              </a>
              <a href="#experience" className="text-white hover:text-gray-300 transition-colors">
                Experience
              </a>
              <a href="#education" className="text-white hover:text-gray-300 transition-colors">
                Education
              </a>
              <a href="#research" className="text-white hover:text-gray-300 transition-colors">
                Research
              </a>
              <a href="#skills" className="text-white hover:text-gray-300 transition-colors">
                Skills & Technologies
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-blue-500">{siteConfig.name}</span> is a software engineer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {siteConfig.hero.description}
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href={siteConfig.social.github} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
                <span>Github</span>
              </a>
              <a href={siteConfig.social.linkedin} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href={siteConfig.social.resume} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink size={20} />
                <span>Web Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-hover border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.year && (
                    <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                    <p className="text-lg text-blue-500 font-semibold mb-1">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.startDate} - {job.endDate}</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-lg text-blue-500 font-semibold mb-2">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Research
          </motion.h2>
          
          <div className="space-y-8">
            {research.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-lg text-blue-500 font-semibold mb-1">{project.organization}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-muted text-sm rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Areas of Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-muted text-sm rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-muted text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            {siteConfig.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            {siteConfig.contact.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a href={siteConfig.social.linkedin} className="flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 {siteConfig.name}. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
