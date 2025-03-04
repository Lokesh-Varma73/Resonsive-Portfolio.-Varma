import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled ? 'var(--bg-color)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <motion.header
      style={headerStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://see.fontimg.com/api/renderfont?text=LV&filename=eyJmaWxlbmFtZSI6ImV5SmthV1FpT2lJeE1qTTBOVFkzT0NJc0ltWnBiR1Z1WVcxbElqb2lNakF5TXkweE1pMHhOeUo5&id=12345678"
            alt="LV Logo"
            style={{ height: '40px' }}
          />
        </motion.h1>
        <button 
          className="nav-toggle" 
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <AnimatePresence>
          <motion.ul
            className={`nav-menu ${navActive ? 'active' : ''}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`} onClick={() => setNavActive(false)}>
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;