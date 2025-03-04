import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle">
      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
        moonColor="#f5f5f5"
        sunColor="#333"
      />
    </div>
  );
};

export default ThemeToggle;