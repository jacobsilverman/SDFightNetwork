import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { usePWA } from './usePWA';
import './PWAInstallButton.scss';

const PWAInstallButton = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);

  const handleInstallClick = async () => {
    const success = await installApp();
    if (success) {
      setIsDismissed(true);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isInstalled || !isInstallable || isDismissed) {
    return null;
  }

  return (
    <div className="pwa-install-banner">
      <div className="pwa-install-content">
        <div className="pwa-install-text">
          <Download size={20} />
          <span>Install SD Fight Network App</span>
        </div>
        <div className="pwa-install-actions">
          <button 
            className="pwa-install-btn"
            onClick={handleInstallClick}
          >
            Install
          </button>
          <button 
            className="pwa-dismiss-btn"
            onClick={handleDismiss}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallButton; 