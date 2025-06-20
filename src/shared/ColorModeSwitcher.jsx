import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';
import './ColorModeSwitcher.scss';

const ColorModeSwitcher = () => {
  const [currentMode, setCurrentMode] = useState('default');

  // Apply theme function
  const applyTheme = (theme) => {
    // Remove all theme classes
    document.body.classList.remove('default-mode', 'light-mode', 'dark-mode', 'blue-mode', 'green-mode', 'padres-mode');
    
    // Add the selected theme class
    if (theme !== 'default') {
      document.body.classList.add(`${theme}-mode`);
    }
    
    // Save to localStorage
    localStorage.setItem('colorMode', theme);
  };

  // Initialize theme on mount and handle storage changes
  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('colorMode') || 'default';
    setCurrentMode(savedTheme);
    applyTheme(savedTheme);

    // Listen for storage changes (in case theme is changed in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'colorMode') {
        const newTheme = e.newValue || 'default';
        setCurrentMode(newTheme);
        applyTheme(newTheme);
      }
    };

    // Listen for page visibility changes to reapply theme
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const savedTheme = localStorage.getItem('colorMode') || 'default';
        applyTheme(savedTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup listeners
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentMode(theme);
    applyTheme(theme);
  };

  const themes = [
    { id: 'default', name: 'Default', icon: <FaPalette /> },
    { id: 'light', name: 'Light', icon: <FaSun /> },
    { id: 'dark', name: 'Dark', icon: <FaMoon /> },
    { id: 'blue', name: 'Blue', icon: <FaPalette /> },
    { id: 'green', name: 'Green', icon: <FaPalette /> },
    { id: 'padres', name: 'Padres', icon: <FaPalette /> }
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