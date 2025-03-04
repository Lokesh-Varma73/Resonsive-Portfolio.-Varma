import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact</h2>
      <div className="contact-info">
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1 }}
          className="contact-link"
        >
          <FaEnvelope /> your.email@example.com
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="contact-link"
        >
          <FaLinkedin /> LinkedIn Profile
        </motion.a>
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="contact-link"
        >
          <FaGithub /> GitHub Profile
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;