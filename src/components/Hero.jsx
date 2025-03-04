import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Lokesh Varma Yallamraju
        </motion.h1>
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'UI/UX Enthusiast',
              1000,
              'Problem Solver',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="type-animation"
          />
        </motion.div>
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          Crafting digital experiences that make a difference
        </motion.p>
        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="button primary-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 206, 201, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="button secondary-button"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> Download Resume
          </motion.a>
        </motion.div>
        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;