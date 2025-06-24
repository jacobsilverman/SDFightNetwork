import React from 'react';
import { WifiOff } from 'lucide-react';
import { usePWA } from './usePWA';
import './OfflineIndicator.scss';

const OfflineIndicator = () => {
  const { isOnline } = usePWA();

  if (isOnline) {
    return null;
  }

  return (
    <div className="offline-indicator">
      <WifiOff size={16} />
      <span>You're offline</span>
    </div>
  );
};

export default OfflineIndicator; 