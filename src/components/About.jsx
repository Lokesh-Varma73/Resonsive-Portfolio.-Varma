import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="about-section"
    >
      <h2>About Me</h2>
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'I am a Full Stack Developer',
              1000,
              'I am a UI/UX Enthusiast',
              1000,
              'I am a Problem Solver',
              1000,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
            className="type-animation"
          />
          <p>
            I am a passionate Full-Stack Developer with expertise in JavaScript, React.js, Node.js, Express.js, and Python. 
            I love creating user-friendly web applications with a strong focus on UI/UX design. I am also proficient in SQL, 
            MongoDB, and have experience with NumPy, Pandas, Matplotlib, PyTorch, Seaborn, and scikit-learn.
          </p>
          <p>
            Currently pursuing my B.Tech in Information Technology at N.B.K.R. Institute of Science and Technology, 
            I am dedicated to building scalable applications and continuously enhancing my technical skills.
          </p>
        </motion.div>
        <motion.div
          className="education"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3>Education</h3>
          <ul>
            <li>
              <strong>B.Tech in Information Technology</strong>
              <span>N.B.K.R. Institute of Science and Technology (2021 - Present)</span>
            </li>
            <li>
              <strong>Intermediate (Class 12)</strong>
              <span>Krishna Murthy Jr College (2019 - 2021) – 93.4%</span>
            </li>
            <li>
              <strong>10th Class</strong>
              <span>Ratnam EM School (2018) – 9.7 CGPA</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;