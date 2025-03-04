import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js',
  'Express.js', 'MongoDB', 'Git', 'Responsive Design', 'RESTful APIs'
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: 'var(--primary-color)' }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;