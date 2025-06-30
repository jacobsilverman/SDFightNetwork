import { useState, useEffect } from 'react';

export const usePWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      // Check for standalone mode (PWA installed)
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.navigator.standalone === true) {
        console.log('PWA: App is already installed');
        setIsInstalled(true);
        return true;
      }
      return false;
    };

    // Check if already installed
    if (checkIfInstalled()) return;

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      console.log('PWA: beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      console.log('PWA: App was installed');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    // Listen for online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Check if service worker is registered
    const checkServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            console.log('PWA: Service worker is registered');
          } else {
            console.log('PWA: Service worker not registered');
          }
        } catch (error) {
          console.error('PWA: Error checking service worker:', error);
        }
      }
    };

    // Check if manifest is accessible
    const checkManifest = async () => {
      try {
        const response = await fetch('/manifest.json');
        if (response.ok) {
          const manifest = await response.json();
          console.log('PWA: Manifest is accessible', manifest.name);
        } else {
          console.log('PWA: Manifest not accessible');
        }
      } catch (error) {
        console.error('PWA: Error checking manifest:', error);
      }
    };

    // Register event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Run checks
    checkServiceWorker();
    checkManifest();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) {
      console.log('PWA: No deferred prompt available');
      return false;
    }

    try {
      console.log('PWA: Prompting for installation');
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt');
        setDeferredPrompt(null);
        setIsInstallable(false);
        return true;
      } else {
        console.log('PWA: User dismissed the install prompt');
        return false;
      }
    } catch (error) {
      console.error('PWA: Error during app installation:', error);
      return false;
    }
  };

  const checkForUpdate = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
        return true;
      }
    }
    return false;
  };

  return {
    isInstallable,
    isInstalled,
    isOnline,
    installApp,
    checkForUpdate,
  };
}; 