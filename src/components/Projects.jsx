import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Online Billing System',
    description: 'A comprehensive billing solution built with React.js and Node.js, featuring real-time calculations and invoice generation.',
    demo: '#',
    github: '#'
  },
  {
    title: 'Event Management Platform',
    description: 'Full-stack application for managing events, featuring user authentication, event scheduling, and ticket booking system.',
    demo: '#',
    github: '#'
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather tracking app built with React, featuring location-based forecasts and interactive weather maps.',
    demo: '#',
    github: '#'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;