import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'IBM Certificate in Full Stack Web Development',
    issuer: 'IBM',
    date: '2023'
  },
  {
    title: 'Wadhwani Foundation Certificate in Full Stack Web Development',
    issuer: 'Wadhwani Foundation',
    date: '2023'
  },
  {
    title: 'Freedom AI Certification',
    issuer: 'Freedom AI',
    date: '2023'
  },
  {
    title: 'Walmart Advanced Software Engineer Certificate',
    issuer: 'Walmart',
    date: '2023'
  },
  {
    title: 'NPTEL Course in Privacy and Security',
    issuer: 'NPTEL',
    date: '2023'
  }
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="certifications"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
          >
            <FaCertificate className="cert-icon" />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span className="cert-date">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;