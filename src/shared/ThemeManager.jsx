import { useEffect } from 'react';

const ThemeManager = () => {
  useEffect(() => {
    // Apply saved theme on app initialization
    const applySavedTheme = () => {
      const savedTheme = localStorage.getItem('colorMode') || 'default';
      
      // Remove all theme classes
      document.body.classList.remove('default-mode', 'light-mode', 'dark-mode', 'blue-mode', 'green-mode', 'padres-mode');
      
      // Add the selected theme class
      if (savedTheme !== 'default') {
        document.body.classList.add(`${savedTheme}-mode`);
      }
    };

    // Apply theme immediately
    applySavedTheme();

    // Also apply theme when the page becomes visible (handles back/forward navigation)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        applySavedTheme();
      }
    };

    // Listen for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeManager; 