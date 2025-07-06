'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code,
  Server,
  Brain
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Home() {

  const { projects, skills } = siteConfig;

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
              <a href="#skills" className="text-white hover:text-gray-300 transition-colors">
                Skills & Technologies
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-hover border border-border"
              >
                <div className="h-48 rounded-lg mb-6 overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <Code size={48} className="text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            {siteConfig.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            {siteConfig.contact.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
