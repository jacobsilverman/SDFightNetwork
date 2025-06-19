import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';
import './ColorModeSwitcher.scss';

const ColorModeSwitcher = () => {
  const [currentMode, setCurrentMode] = useState('default');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('colorMode') || 'default';
    setCurrentMode(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    // Remove all theme classes
    document.body.classList.remove('default-mode', 'light-mode', 'dark-mode', 'blue-mode', 'green-mode');
    
    // Add the selected theme class
    if (theme !== 'default') {
      document.body.classList.add(`${theme}-mode`);
    }
    
    // Save to localStorage
    localStorage.setItem('colorMode', theme);
  };

  const handleThemeChange = (theme) => {
    setCurrentMode(theme);
    applyTheme(theme);
  };

  const themes = [
    { id: 'default', name: 'Default', icon: <FaPalette /> },
    { id: 'light', name: 'Light', icon: <FaSun /> },
    { id: 'dark', name: 'Dark', icon: <FaMoon /> },
    { id: 'blue', name: 'Blue', icon: <FaPalette /> },
    { id: 'green', name: 'Green', icon: <FaPalette /> }
  ];

  return (
    <div className="color-mode-switcher">
      <div className="switcher-container">
        <select
          value={currentMode}
          onChange={(e) => handleThemeChange(e.target.value)}
          className="theme-select"
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
        <div className="theme-icon">
          {themes.find(t => t.id === currentMode)?.icon}
        </div>
      </div>
    </div>
  );
};

export default ColorModeSwitcher; 